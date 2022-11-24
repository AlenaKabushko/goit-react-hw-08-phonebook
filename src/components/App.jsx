import { useDispatch, useSelector } from 'react-redux/es/exports';
import { selectIsLoading } from '../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts, deleteContacts } from 'redux/operations';
import ContactList from './Contacts/Contacts';
import { FormInput } from './Form/Form';
import Filter from './Filter/Filter';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = ({ id }) => {
    dispatch(deleteContacts(id));
  };

  return (
    <section style={{ marginLeft: '40px' }}>
      <h1>Phonebook</h1>
      <FormInput />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <p>Loading...</p>}
      <ContactList onDelete={handleDelete} />
    </section>
  );
}
