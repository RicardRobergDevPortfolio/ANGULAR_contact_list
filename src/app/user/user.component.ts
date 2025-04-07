import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Contact } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) contact!: Contact
  @Input({ required: true }) selected!: boolean
  @Output() select = new EventEmitter<string>()

  onSelectContact() {
    this.select.emit(this.contact.userId)
  }

}
