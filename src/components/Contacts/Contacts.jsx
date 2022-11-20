import {
  ContactsListStyled,
  ContactsItemStyled,
  ButtonStyle,
  TextStyle,
} from './Contacts.styled';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

function ContactList({ allContacts, onDelete }) {
  return (
    <div>
      <ContactsListStyled>
        {allContacts.map(obj => (
          <ContactsItemStyled key={nanoid(4)}>
            <TextStyle>
              {obj.name}: {obj.number}
            </TextStyle>
            <ButtonStyle type="button" onClick={() => onDelete(obj.id)}>
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
