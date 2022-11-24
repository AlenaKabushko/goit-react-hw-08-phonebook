import {
  ContactsListStyled,
  ContactsItemStyled,
  ButtonStyle,
  TextStyle,
} from './Contacts.styled';
import { selectFilterContacts } from '../../redux/selectors';
import { useSelector } from 'react-redux/es/exports';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

function ContactList({ onDelete }) {
  const contacts = useSelector(selectFilterContacts);
  return (
    <div>
      <ContactsListStyled>
        {contacts.map(({ id, name, phone }) => (
          <ContactsItemStyled key={nanoid(4)}>
            <TextStyle>
              {name}: {phone}
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
  onDelete: PropTypes.func,
};
