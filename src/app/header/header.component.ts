import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
   <nav class="navbar bg-body-tertiary navbar-light sticky-top p-4">
        <div class="container">
          <img src="assets/dmb-logo.png" routerLink="/" alt="" width="146px">
            <div class="navbar-nav  d-inline">
             <button data-bs-toggle="modal" data-bs-target="#modalInfo"
                                 class="btn btn-sm"><fa-icon
                                    [icon]="['far', 'question-circle']"></fa-icon></button>
             <button data-bs-toggle="modal" data-bs-target="#modalSignature"
                                 class="btn btn-sm"><fa-icon
                                    [icon]="['fas', 'signature']"></fa-icon></button>
            </div>   
        </div>
      </nav>
<!--Modal: ABout project-->
<div class="modal fade right" id="modalInfo" tabindex="-1" role="dialog"
  aria-labelledby="modalInfo" aria-hidden="true" data-backdrop="false">
  <div class="modal-dialog modal-side modal-bottom-right modal-notify modal-info" role="document">
    <!--Content-->
    <div class="modal-content">
      <!--Header-->
      <div class="modal-header">
        <p class="h3">About this project:</p>

        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
        </button>
      </div>

      <!--Body-->
      <div class="modal-body">

        <div class="row">
        <div class="col-12">
            <p style="font-size: 20px; color:#186f8b;"><strong>Local JSON DB used:</strong> </p><p>Local DB with json server used
Installation: <br>
-npm install -g json-server <br>
Start command: <br>
- json-server --watch db.json</p>
</div>

          <div class="col-12">
            <p style="font-size: 20px; color:#186f8b;"><strong>*CSS faults:*</strong></p>
            <p><strong># Modal Add/Edit</strong><br>
- modal background color (box-shadow) should be blueish not gray default<br>
- arrows of selects should be blue<br>
- dropdown hover should be light blue<br><br>
<strong># Modal Delete</strong><br>
- shadow on red X and two lines inside (one full opacity second 0.5opacity) instead of icon <br><br>
<strong># Table</strong><br>
- border-radius on table rows<br><br>
<strong># POPOVER</strong><br>
- icons for edit and delete are not the same as design</p>

          </div><div class="col-12 mt-4">
            <p style="font-size: 20px; color:#186f8b;"><strong>*NOT WORKING PROPERLY:*</strong></p>
            <p><strong># SEARCH</strong><br>
    -not working 100% (shows items on some words which are not in table like eafer - shows 2 items) - probably because it searches the database which might contain that, not sure actually<br><br>
    <strong># PHONE 2 </strong><br>
- should display number of items in array not the whole numbers (what is seen is entered manually - cheating)<br><br>
<strong># POPOVER</strong><br>
- does not close on clicking anywhere on screen (which it should for better UX), but on button click only<br><br>
<strong># MODALS ADD-EDIT</strong><br>
- add aditional phone (dynamically add), I have managed to implement the looks but I was not sure how to implement the logic,
on when dynamic elements are added and how to catch and store their data in the database, I will definetly continue solving this problem
since it didn't alove me to sleep in peace</p>

          </div>
          <div class="col-12 mt-4">
            <p style="font-size: 20px; color:#186f8b;"><strong>*ADDED FUNCTIONALITY:*</strong></p>
            <p>
            - for table and mobile view added a button to popover to view details since some were removed so the table could be viewed properly when screen size is smaller <br>
- unfavorite button which removes the favorite<br>
- remove button to remove additional phone
          </p>

          </div>
        </div>
      </div>
    </div>
    <!--/.Content-->
  </div>
</div>
<!--Modal: About Project-->

<!--Modal: Signature -->
<div class="modal fade right" id="modalSignature" tabindex="-1" role="dialog"
  aria-labelledby="modalSignature" aria-hidden="true" data-backdrop="false">
  <div class="modal-dialog" >
    <!--Content-->
    <div class="modal-content text-center">
      <!--Header-->
      <div class="modal-header">
        <p class="h4">Made By: <strong>Nikica Kovacevic</strong><br></p>
      </div>
    </div>
    <!--/.Content-->
  </div>
</div>
<!--Modal: Signature -->
  `,
  styles: [
  ]
})
export class HeaderComponent {

}
