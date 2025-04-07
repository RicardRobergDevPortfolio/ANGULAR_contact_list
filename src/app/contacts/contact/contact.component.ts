import { Component, inject, Input } from '@angular/core';

import { type Contact } from '../../user/user.model';
import { ContactService } from '../contacts.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @Input({ required: true }) contact!: Contact

  private contactService = inject(ContactService)

  onRemoveContact() {
    this.contactService.removeContact(this.contact.userId)
  }

}
