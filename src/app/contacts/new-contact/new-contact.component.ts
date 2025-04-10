import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ContactService } from '../contact.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-contact',
  imports: [FormsModule],
  templateUrl: './new-contact.component.html',
  styleUrl: './new-contact.component.css'
})
export class NewContactComponent {
  @Input({ required: true }) userId!: string
  @Output() close = new EventEmitter<void>()
  enteredName: string = ''
  enteredNickName: string = ''
  enteredEmail: string = ''
  enteredStreetName: string = ''
  enteredStreetNumber: string = ''
  enteredDistrict: string = ''
  enteredCity: string = ''
  enteredState: string = ''
  enteredCountry: string = ''
  enteredPostalCode: string = ''
  enteredPhone1: string = ''
  enteredPhone2: string = ''

  private contactService = inject(ContactService)

  onCancel() {
    this.close.emit()
  }

  onSubmit() {
    this.contactService.addContact({
      userId: this.userId,
      name: this.enteredName,
      nickName: this.enteredNickName,
      email: this.enteredEmail,
      address: {
        streetName: this.enteredStreetName,
        streetNumber: this.enteredStreetNumber,
        district: this.enteredDistrict,
        city: this.enteredCity,
        state: this.enteredState,
        country: this.enteredCountry,
        postalCode: this.enteredPostalCode,
        phone1: this.enteredPhone1,
        phone2: this.enteredPhone2
      }
    }, this.userId)
    this.close.emit()
  }

}
