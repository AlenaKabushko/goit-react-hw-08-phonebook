import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import ContactList from './Contacts/Contacts';
import { FormInput } from './Form/Form';
import Filter from './Filter/Filter';

// import { deleteContact } from '../redux/contactsSlice';
import {
  selectContacts,
  selectFilter,
  selectFilterContacts,
  selectIsLoading,
} from '../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts, deleteContacts } from 'redux/operations';

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  // const filterContacts = useSelector(selectFilterContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = ({ id }) => {
    dispatch(deleteContacts(id));
    console.log('new contacts', contacts);
  };

  // const fromFilter = useMemo(() => {
  //   console.log('contacts from memo', contacts);
  //   return contacts.filter(contact => {
  //     console.log('name', contact.name);
  //     return contact;
  //     // return name.toLowerCase().includes(filter.toLowerCase());
  //   });
  // }, [contacts]);

  return (
    <section style={{ marginLeft: '40px' }}>
      <h1>Phonebook</h1>
      <FormInput />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <p>Loading...</p>}
      {/* //* <ContactList allContacts={fromFilter} onDelete={handleDelete} /> */}
      <ContactList onDelete={handleDelete} />
    </section>
  );
}
