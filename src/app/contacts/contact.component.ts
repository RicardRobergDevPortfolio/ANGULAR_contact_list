import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContactService } from './contact.service';
import { ShowContactComponent } from "./show-contact/show-contact.component";
import { Contact } from '../user/user.model';
import { CommonModule } from '@angular/common';
import { NewContactComponent } from './new-contact/new-contact.component';

@Component({
  selector: 'app-contact',
  imports: [NewContactComponent, ShowContactComponent, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @Input({ required: true }) contact!: Contact
  isAddingContact: boolean = false

  constructor(private contactService: ContactService) { }

  get selectedContact(): Contact | undefined {
    // console.log('selectedContact ===>', this.contact.userId)
    return this.contactService.getUserContact(this.contact.userId);
  }

  onCloseAddContact() {
    this.isAddingContact = false
  }



}
