import React from "react";
import ContactList from "./ContactList";
import { getData } from "../utils/data";
import ContactInput from "./ContactInput";

class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: getData(),
    };

    // wajib kita bind
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    // add contact
    this.addContactHandler = this.onAddContactHandler.bind(this);
  }

  onDeleteHandler(id) {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  }

  onAddContactHandler({ name, tag }) {
    this.setState((prevState) => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: +new Date(),
            name,
            tag,
            imageUrl: "/images/default.jpeg",
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="contact-app">
        <h1>Aplikasi Kontak</h1>

        <h2>Tambah Kontak</h2>
        <ContactInput addContactHandler={this.addContactHandler} />

        <h2>Daftar Kontak</h2>
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }
}

export default ContactApp;
