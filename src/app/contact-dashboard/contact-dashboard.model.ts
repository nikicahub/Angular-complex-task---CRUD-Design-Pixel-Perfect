export class ContactModel{
    id : number = 0;
    img ?: any;
    name : string = '';
    position : string = '';
    city : string = '';
    email : string = '';
    phone : string = '';
    phone2 : string = '';
    countryCode : string = '';
    countryCode2 : string = '';
    favorite : boolean = false;
    additionalPhones = <any>[];
}