import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactModel } from './contact-dashboard.model';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-contact-dashboard',
  templateUrl: 'contact-dashboard.html',
  styles: [
  ]
})


export class ContactDashboardComponent implements OnInit {

  formValue !: FormGroup;
  contactModelObj: ContactModel = new ContactModel();
  contactData !: any;
  //switches for add/update button
  showAdd !: boolean;
  showUpdate !: boolean;
  showDelete !: boolean;
  //modal favorite toggle button boolean
  favoriteCheceked: boolean = false;
  // showFavoritesTable: boolean = false; 
  //boolean for button togle between tables (contact-fav)
  toggle: boolean = true;
  toggle2: boolean = false;
  //table view all/favorites
  original: any;
  //delete modal - select user for deletion
  rowId: any;
  //picture storage
  src: any;
  //search term
  searchTerm: string = '';
  selectedCity: string = '';
  selectedPositione: string = '';
  //for passing the name in delete modal
  contactName = '';
  //sorting 
  sortDirection: string = 'descending';

  //dynamically adding input fields for phones in modal window
  // additionalPhones = new FormArray([new FormControl('')]);

  constructor(private formbuilder: FormBuilder,
    private api: ContactService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      img: <any>[],
      name: [''],
      position: [''],
      city: [''],
      email: [''],
      countryCode: [''],
      countryCode2: [''],
      phone: [''],
      //additional phones array - dynamic content
      phone2: [''],
      phones: this.formbuilder.array([
        this.formbuilder.control('')
      ])

    }),

      this.getAllContacts();
  }

  //dynamically adding phone fields into the modal form
  get phones() {
    return this.formValue.get('phones') as FormArray;
  }
  removePhones(i: any) {
    console.log("phones", this.phones.controls);
    this.phones.removeAt(i);
  }

  addPhones() {
    this.phones.push(this.formbuilder.control(''))
  }

  //code copied from stackoverflow for opening a img file in the modal window
  url: string | null | ArrayBuffer = ''

  selectFile(files: FileList | null) {
    if (files) {
      var reader = new FileReader()
      reader.readAsDataURL(files[0])
      reader.onload = (event: Event) => {
        let fileReader = event.target as FileReader
        //store the image (url passing it later)
        this.url = fileReader.result;
      }
    }
  }

  //sort function
  sortData(property: string) {
    this.contactData.sort((a: any, b: any) => {
      if (this.sortDirection === 'ascending') {
        if (a[property] < b[property]) {
          return -1;
        } else if (a[property] > b[property]) {
          return 1;
        } else {
          return 0;
        }
      } else {
        if (a[property] > b[property]) {
          return -1;
        } else if (a[property] < b[property]) {
          return 1;
        } else {
          return 0;
        }
      }
    });

    this.sortDirection = this.sortDirection === 'ascending' ? 'descending' : 'ascending';
  }


  //logic for toggle and button contacts(original)-favorites(favorites)
  //show favorites function (favorites) 
  showFavorites() {
    //filter the table for favorites
    this.contactData = this.original.filter((item: any) => item.favorite === true);
    this.toggle2 = true;
    this.toggle = false;
  }
  //show all contacts (original)
  showAll() {
    this.contactData = this.original;
    this.toggle = true;
    this.toggle2 = false;
  }

  //popover button add to favorites function
  addToFavorite(row: any) {
    this.onEdit(row);
    this.favoriteCheceked = !row.favorite;
    this.url = row.img;
    this.updateContact();
    // console.log(row)
  }
  //popover button remove from favorites function
  removeFavorite(row: any) {
    this.onEdit(row);
    this.favoriteCheceked = !row.favorite;
    this.url = row.img;
    this.updateContact();
  }


  addContact = false;
  //adding the contact function for main button above table +contact
  clickAddContact() {
    //clear the added form fields
    this.phones.clear();
    //logic for solving the conflict between two modals one form
    this.addContact = true;
    //clear the picture on open (conflict with edit - would take the picture that was given in edit contact)
    this.url = '';
    //reset form
    this.formValue.reset();
    //show button according to modal opened (add or edit)
    this.showAdd = true;
    this.showDelete = true;
    this.showUpdate = false;
  }

  //function made so the code is not repated for storing data
  storeContactData() {
    //logic for conflict between one form - two modals
    if (this.addContact === true) {
      this.contactModelObj.id = 0;
    }
    //database - form values
    this.contactModelObj.img = this.url;
    this.contactModelObj.name = this.formValue.value.name;
    this.contactModelObj.position = this.formValue.value.position;
    this.contactModelObj.city = this.formValue.value.city;
    this.contactModelObj.email = this.formValue.value.email;
    this.contactModelObj.countryCode = this.formValue.value.countryCode;
    this.contactModelObj.countryCode2 = this.formValue.value.countryCode2;
    this.contactModelObj.phone = this.formValue.value.phone;
    this.contactModelObj.phone2 = this.formValue.value.phone2;
    this.contactModelObj.additionalPhones = [{

      countryCode: this.formValue.value.countryCode,
      number: this.formValue.value.phone
    }, {
      countryCode: this.formValue.value.countryCode2,
      number: this.formValue.value.phone2

    }];
    this.contactModelObj.favorite = this.favoriteCheceked;
    // this.contactModelObj.additionalPhones = this.phones;
    // console.log(this.contactModelObj.additionalPhones);

  }

  //function which will reset form, and refresh the 
  clearRefresh() {
    //cancel button by id
    let cancel = document.getElementById('cancel')
    cancel?.click();
    //clear everything after adding
    this.formValue.reset();
    //refresh
    this.getAllContacts();
  }

  //upon clicking the add contact button within the modal in adding contact view
  postContactDetails() {
    //take data from the form
    this.storeContactData();

    //post a new contact to the database
    this.api.postContact(this.contactModelObj)
      .subscribe(res => {
        console.log(res);
        // alert("Contact added!")
        this.clearRefresh();
      })
  }

  //get all the contacts from database
  getAllContacts() {
    this.api.getContact()
      .subscribe(res => {
        this.original = res;
        this.contactData = this.original;
      })
  }

  //function fires before delete modal opens
  beforeDeleteConfirmation(row: any) {
    //for passing the name in delete confirmation modal
    this.contactName = row.name;
    this.rowId = row.id;
    //also this just closes the popover otherwise it stays open
    this.getAllContacts();
  }

  //delete contact by id - button delete in popover
  deleteContact() {
    this.api.deleteContact(this.rowId)
      .subscribe(res => {
        // alert("contact deleted")
        //refresh the data after with getAllContacts()
        this.getAllContacts();
        this.clearRefresh();
      })
  }

  //set values for form, in respect for editing or viewing chage the boolean of buttons so they are shown/hidden
  setValues(row: any, showUpdate: boolean, showDelete: boolean) {
    this.phones.clear();
    this.addContact = false;
    this.showAdd = false;
    this.showUpdate = showUpdate;
    this.showDelete = showDelete;
    this.contactModelObj.id = row.id;
    this.url = row.img;
    this.formValue.controls['name'].setValue(row.name);
    this.formValue.controls['position'].setValue(row.position);
    this.formValue.controls['city'].setValue(row.city);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['countryCode'].setValue(row.countryCode);
    this.formValue.controls['countryCode2'].setValue(row.countryCode2);
    this.formValue.controls['phone'].setValue(row.phone);
    this.formValue.controls['phone2'].setValue(row.additionalPhones[1].number);
    this.favoriteCheceked = row.favorite;
    this.getAllContacts();
  }

  //on clicking edit button in popover
  onEdit(row: any) {
    this.setValues(row, true, true);
  }
  //mobile view clicking view button in popover
  onView(row: any) {
    this.setValues(row, false, false);
  }

  //updateContact upon clicking save in modal window from edit view
  updateContact() {
    this.storeContactData();
    //data+id of the contact being updated
    // console.log(this.contactModelObj);
    this.api.updateContact(this.contactModelObj, this.contactModelObj.id)
      .subscribe(res => {
        // alert("updated succsefully")
        this.clearRefresh();
      })
  }

  //country phone code number in modal window
  countryCode1: any;
  countryCode2: any;
  selectedCode(option: any, value: any) {
    if (option === "countryCode1") {
      this.countryCode1 = value;
    } else if (option === "countryCode2") {
      this.countryCode2 = value;
    }
  }

  //dropdown select position in modal window 
  position1: any;
  selectedPosition(option: any, value: any) {
    if (option === "position1") {
      this.position1 = value;
    }
  }

}


