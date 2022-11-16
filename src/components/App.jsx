import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';

import ContactList from './Contacts/Contacts';
import { FormInput } from './Form/Form';
import Filter from './Filter/Filter';

import { addContact, deleteContact, setNameFilter } from '../redux/actions';

import { Notify } from 'notiflix';

export function App() {
  const dispatch = useDispatch();

  const contactsFromLocal = localStorage.getItem('contacts');
  const parseContactsFromLocal = JSON.parse(contactsFromLocal);

  const [contacts, setContacts] = useState(
    parseContactsFromLocal ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formData = data => {
    if (contacts.find(contact => contact.name === data.name)) {
      Notify.warning(`${data.name} is already in contacts`);
      return false;
    }

    dispatch(addContact(data.name, data.number));

    setContacts([data, ...contacts]);
    return true;
  };

  const handleDelete = id => {
    dispatch(deleteContact(contacts.id));
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const onFilterChange = value => {
    dispatch(setNameFilter(value));
    setFilter(value);
  };

  let fromFilter = contacts;
  if (filter) {
    fromFilter = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  }

  return (
    <section style={{ marginLeft: '40px' }}>
      <h1>Phonebook</h1>
      <FormInput formData={formData} />
      <h2>Contacts</h2>
      <Filter onChange={onFilterChange} />
      <ContactList allContacts={fromFilter} onDelete={handleDelete} />
    </section>
  );
}
