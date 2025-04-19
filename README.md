# Angular Contact List App

This is my first project built with **Angular**, based on the initial exercise from the first section of my Angular course, where a basic task list was created.

I have expanded the concept into a **Contact List** app. Each user has detailed information, and only one contact is allowed per user. The goal of this project is to practice Angular fundamentals such as:

- Standalone components
- Input/Output communication
- Local state handling
- Services
- Using `localStorage` for persistence

---

## Features

- View a list of contacts
- Add a new contact (only one per user)
- Select a contact to view details
- Remove contacts
- Data persistence via `localStorage`
- Sorted contact list (alphabetically by name)

---

## Technologies

- Angular 18
- TypeScript
- HTML & CSS (basic styling)

---

## Getting Started

To run this project locally:

```bash
git clone https://github.com/your-username/contact-list-app.git
cd contact-list-app
npm install
ng serve
```

Then open your browser at: `http://localhost:4200`

---

## Code Snippets

**Initialize and Load Contacts (contact.service.ts)**

```ts
constructor() {
  const stored = localStorage.getItem('contacts');

  if (stored) {
    this.contacts = JSON.parse(stored).sort((a, b) => a.name.localeCompare(b.name));
  } else {
    this.contacts = DEFAULT_USERS.sort((a, b) => a.name.localeCompare(b.name));
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }
}
```

**Add New Contact**

```ts
addContact(contact: Contact) {
  this.contacts.unshift({ ...contact, userId: Date.now().toString() });
  this.saveContacts();
}
```

**Get Selected Contact**

```ts
get selectedContact() {
  return this.selectedId ? this.contactService.getUserContact(this.selectedId) : null;
}
```

---

## Credits

This project was developed for learning purposes. While building it, I consulted:

- [Angular Documentation](https://angular.io/)
- [StackOverflow](https://stackoverflow.com/)
- [ChatGPT](https://chat.openai.com/)

---

## Author

Ricard Roberg
