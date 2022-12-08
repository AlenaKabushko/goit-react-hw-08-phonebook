import { useDispatch, useSelector } from 'react-redux/es/exports';
import { selectIsLoading, selectError } from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts, deleteContacts } from '../../redux/operations';
import ContactList from '../Contacts/Contacts';
import { FormInput } from '../Form/Form';
import Filter from '../Filter/Filter';
import Box from 'components/Box';
import { TitleStyle } from './Phonebook.styled';

function Phonebook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = ({ id }) => {
    dispatch(deleteContacts(id));
  };

  return (
    <Box
      as={'section'}
      m={40}
      gridGap={16}
      justifyContent="space-evenly"
      alignItems="flex-start"
    >
      <div>
        <TitleStyle>Add name and number</TitleStyle>
        <FormInput />
      </div>
      <div>
        <h2>Contacts</h2>
        <Filter />
        {isLoading && <p>Loading...</p>}
        {isError && (
          <p style={{ color: 'red' }}>
            404! Ooops, something broke. <br /> Please, reload the page and try
            again...
          </p>
        )}
        <ContactList onDelete={handleDelete} />
      </div>
    </Box>
  );
}

export default Phonebook;
