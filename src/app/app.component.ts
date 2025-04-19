import { Component, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from "./contacts/contact.component";
import { UserComponent } from "./user/user.component";
import { FooterComponent } from "./footer/footer.component";
import { CardComponent } from "./shared/card/card.component";
import { ContactService } from './contacts/contact.service';
import { NewContactComponent } from './contacts/new-contact/new-contact.component';

import { type Contact } from './user/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ContactComponent, UserComponent, FooterComponent, CommonModule, CardComponent, NewContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  contacts!: Contact[];
  @Input({ required: true }) userId!: string

  selectedContactId?: string
  isAddingContact = false;

  constructor(private contactService: ContactService) {
    this.contacts = this.contactService.getContacts().sort((a, b) => a.name.localeCompare(b.name));
  }

  get selectedContact() {
    return this.contacts.find(contact => contact.userId === this.selectedContactId)
  }

  onSelectContact(userId: string) {
    this.selectedContactId = userId
  }

  onContactRemoved(userId: string) {
    this.contacts = this.contacts.filter(contact => contact.userId !== userId);
  }

  onStartAddContact() {
    this.isAddingContact = true
  }

  onCloseAddContact() {
    this.isAddingContact = false
  }

  onRemoveContact() {
    this.contactService.removeContact(this.selectedContactId!);
    this.contacts = this.contactService.getContacts();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const insideUserList = target.closest('#contacts'); // ou algum seletor que englobe os botões

    if (!insideUserList) {
      this.selectedContactId = undefined;
    }
  }
}
