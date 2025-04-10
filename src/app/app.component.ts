import { Component, HostListener } from '@angular/core';

import { HeaderComponent } from "./header/header.component";

import { DEFAULT_USERS } from './user/DEFAULT_USERS';
import { ContactComponent } from "./contacts/contact.component";
import { UserComponent } from "./user/user.component";
import { FooterComponent } from "./footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ContactComponent, UserComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  contacts = DEFAULT_USERS.sort((a, b) => a.name.localeCompare(b.name))
  selectedContactId?: string

  get selectedContact() {
    return this.contacts.find(contact => contact.userId === this.selectedContactId)
  }

  onSelectContact(userId: string) {
    this.selectedContactId = userId
  }

  onContactRemoved(userId: string) {
    this.contacts = this.contacts.filter(contact => contact.userId !== userId);
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
