import { Component } from '@angular/core';

import { HeaderComponent } from "./header/header.component";
import { ContactComponent } from "./contacts/contact/contact.component";

import { DEFAULT_USERS } from './user/DEFAULT_USERS';
import { ContactsComponent } from "./contacts/contacts.component";
import { UserComponent } from "./user/user.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ContactsComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  contacts = DEFAULT_USERS
  selectedContactId?: string

  get selectedContact() {
    return this.contacts.find(contact => contact.userId === this.selectedContactId)
  }

  onSelectContact(userId: string) {
    this.selectedContactId = userId
  }
}
