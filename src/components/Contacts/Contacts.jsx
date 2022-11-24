import {
  ContactsListStyled,
  ContactsItemStyled,
  ButtonStyle,
  TextStyle,
} from './Contacts.styled';
import {
  selectContacts,
  selectFilter,
  selectFilterContacts,
} from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

function ContactList({ onDelete }) {
  const contacts = useSelector(selectFilterContacts);
  console.log('allContacts', contacts);
  return (
    <div>
      <ContactsListStyled>
        {contacts.map(({ id, name, phone }) => (
          <ContactsItemStyled key={nanoid(4)}>
            <TextStyle>
              {id} - {name}: {phone}
            </TextStyle>
            <ButtonStyle type="button" onClick={() => onDelete({ id })}>
              Delete
            </ButtonStyle>
          </ContactsItemStyled>
        ))}
      </ContactsListStyled>
    </div>
  );
}

export default ContactList;

ContactList.propTypes = {
  allContacts: PropTypes.arrayOf(PropTypes.shape),
  onDelete: PropTypes.func,
};
