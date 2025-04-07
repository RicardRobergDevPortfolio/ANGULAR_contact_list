import { Component, Input } from '@angular/core';
import { ContactService } from './contacts.service';
import { ContactComponent } from "./contact/contact.component";
import { NewContactComponent } from "./new-contact/new-contact.component";

@Component({
  selector: 'app-contacts',
  imports: [ContactComponent, NewContactComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  @Input({required: true}) userId!: string
  @Input({required: true}) name!: string
  isAddingContact: boolean = false

  constructor(private contactsService: ContactService) {}

  get selectedContactAddress(){
    return this.contactsService.getUserContacts(this.userId)
  }

  onStartAddContact(){
    this.isAddingContact = true
  }

  onCloseAddContact(){
    this.isAddingContact = false
  }

}
