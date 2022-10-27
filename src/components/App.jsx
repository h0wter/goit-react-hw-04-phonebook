import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const contactsList = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(contactsList);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }

    setContacts(state => [...state, { name, number, id: nanoid() }]);
  };

  const removeContact = id => {
    setContacts(state => [...state].filter(contact => contact.id !== id));
  };

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const onInputChange = e => {
    setFilter(e.target.value);
  };

  return (
    <>
      <Box as="h2" mb="10px">
        Phonebook
      </Box>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter onChange={onInputChange} />
      <ContactList contacts={filterContacts()} onClick={removeContact} />
      <GlobalStyle />
    </>
  );
};
