import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

interface IContact {
  id: string,
  name: string,
  tel: string,
  email: string
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  myFormGroup: FormGroup = new FormGroup({
    email: new FormControl(),
    phone: new FormControl(),
    name: new FormControl()
  })
  title = "Liste des contactes";
  date = new Date(2021, 5, 23);
  montant = 450;
  testPipe = "Prof p extends Utilisateur p.name Product u.getNa";
  //username: string = "";
  
  isError: boolean = false;
  contacts: IContact[] = [
    { id: "1", name: "contact1", tel: "066666", email: "email@tr.com" },
    { id: "2", name: "contact2", tel: "066666", email: "email@tr.com" },
    { id: "3", name: "contact3", tel: "066666", email: "email@tr.com" },
    { id: "4", name: "contact4", tel: "066666", email: "email@tr.com" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getTitle() {
    return this.title;
  }

  add() {
    const contact: IContact = {
      id: Math.floor(Math.random() * 100) + "",
      email: "new@gmail.com",
      name: "new contact",
      tel: "+212633445566",
    }
    this.contacts.push(contact);
  }

  edit(contact: IContact) {
    console.log(contact);
  }

  delete(contact: IContact) {
    // contact = { id: "2", name: "contact2", tel: "066666", email: "email@tr.com" }
    this.contacts = this.contacts.filter((item) => {
      // filter all contacts item.id === contact.id

      // iter 1 item = { id: "1", name: "contact1", tel: "066666", email: "email@tr.com" }
      // iter 2 item = { id: "2", name: "contact2", tel: "066666", email: "email@tr.com" }
      // iter 3 item = { id: "3", name: "contact3", tel: "066666", email: "email@tr.com" }
      // iter 4 item = { id: "4", name: "contact4", tel: "066666", email: "email@tr.com" }
      if (contact.id === item.id) {
        return false;
      } else {
        return true;
      }

    })
  }

  // Submit function 
  submit() {
    const existingContacts = this.contacts.filter((item) => {
      return item.name === this.myFormGroup.value.name;
    })
    if (existingContacts.length > 0) {
      this.isError = true;
    } else {
      this.isError = false;
      const contact: IContact = {
        id: Math.floor(Math.random()*100)+"",
        email: this.myFormGroup.value.email,
        name: this.myFormGroup.value.name,
        tel: this.myFormGroup.value.phone,
      }
      this.contacts.push(contact);
    }
  }
}


