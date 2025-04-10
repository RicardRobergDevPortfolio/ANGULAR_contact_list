import { Injectable } from "@angular/core";

import { DEFAULT_USERS } from "../user/DEFAULT_USERS";

import { type Contact } from "../user/user.model";

@Injectable({ providedIn: 'root' })
export class ContactService {

  private contacts = DEFAULT_USERS

  constructor() {
    const contacts = localStorage.getItem('contacts')
    if (contacts) {
      this.contacts = JSON.parse(contacts)
    }
  }

  getUserContact(userId: string) {
    return this.contacts.find(contact => contact.userId === userId)
  }

  addContact(contact: Contact, userId: string) {
    this.contacts.unshift({
      userId: new Date().getTime().toString(),
      name: contact.name,
      nickName: contact.nickName,

      email: contact.email,
      address: {
        streetName: contact.address.streetName,
        streetNumber: contact.address.streetNumber,
        district: contact.address.district,
        city: contact.address.city,
        state: contact.address.state,
        country: contact.address.country,
        postalCode: contact.address.postalCode,
        phone1: contact.address.phone1,
        phone2: contact.address.phone2
      }
    })
    this.saveContacts()
  }

  removeContact(userId: string) {
    this.contacts = this.contacts.filter(contact => contact.userId !== userId)
    this.saveContacts()
  }

  private saveContacts() {
    localStorage.setItem('contacts', JSON.stringify(this.contacts))
  }
}   
