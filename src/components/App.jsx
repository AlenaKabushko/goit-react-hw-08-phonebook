import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import ContactList from './Contacts/Contacts';
import { FormInput } from './Form/Form';
import Filter from './Filter/Filter';

import { deleteContact } from '../redux/contactsSlice';
import { getContacts, getFilter } from '../redux/selectors';

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const fromFilter = useMemo(() => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);

  return (
    <section style={{ marginLeft: '40px' }}>
      <h1>Phonebook</h1>
      <FormInput />
      <h2>Contacts</h2>
      <Filter />
      {fromFilter && (
        <ContactList allContacts={fromFilter} onDelete={handleDelete} />
      )}
    </section>
  );
}
