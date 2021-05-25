import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title = "Liste des contactes";
  date = new Date(2021,5,23);
  montant = 450;
  testPipe = "Prof p extends Utilisateur p.name Product u.getNa";

  contacts = [
    {id:"1",name:"contact1",tel:"066666", email:"email@tr.com"},
    {id:"2",name:"contact2",tel:"066666", email:"email@tr.com"},
    {id:"3",name:"contact3",tel:"066666", email:"email@tr.com"},
    {id:"4",name:"contact4",tel:"066666", email:"email@tr.com"}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  getTitle(){
    return this.title;
  }

}
