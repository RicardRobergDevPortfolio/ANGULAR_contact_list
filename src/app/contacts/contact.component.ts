import { Component, Input } from '@angular/core';
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
  @Input({ required: true }) userId!: string
  @Input({ required: true }) name!: string
  isAddingContact: boolean = false

  constructor(private contactService: ContactService) { }

  get selectedContact(): Contact | undefined {
    return this.contactService.getUserContact(this.userId);
  }

  onStartAddContact() {
    this.isAddingContact = true
  }

  onCloseAddContact() {
    this.isAddingContact = false
  }

}
