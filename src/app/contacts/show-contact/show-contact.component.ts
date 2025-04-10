import { Component, EventEmitter, inject, Input, Output } from '@angular/core';

import { type Contact } from '../../user/user.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-show-contact',
  imports: [],
  templateUrl: './show-contact.component.html',
  styleUrl: './show-contact.component.css'
})
export class ShowContactComponent {
  @Input({ required: true }) contact!: Contact
  @Output() contactRemoved = new EventEmitter<void>();


  private contactService = inject(ContactService)

  ngOnInit(): void {
    console.log('contact', this.contact)
  }

  onRemoveContact() {
    this.contactService.removeContact(this.contact.userId);
  }

}
