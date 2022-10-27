import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    if (this.state.contacts.find(contact => contact.name.includes(name))) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState({
      contacts: [...this.state.contacts, { name, number, id: nanoid() }],
    });
  };

  removeContact = id => {
    this.setState({
      contacts: [...this.state.contacts].filter(contact => contact.id !== id),
    });
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <Box as="h2" mb="10px">
          Phonebook
        </Box>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.onInputChange} />
        <ContactList
          contacts={this.filterContacts()}
          onClick={this.removeContact}
        />
        <GlobalStyle />
      </>
    );
  }
}
