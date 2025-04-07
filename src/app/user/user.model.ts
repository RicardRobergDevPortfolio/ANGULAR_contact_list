export interface Contact {
  userId: string;
  name: string;
  nickName: string;
  email: string;
  address: Address;
}


export interface Address {
  streetName: string;
  streetNumber: string;
  district: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  phone1: string;
  phone2: string;
}
