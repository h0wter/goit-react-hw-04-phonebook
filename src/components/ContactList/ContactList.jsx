import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';

export const ContactList = ({ contacts, onClick }) => {
  return (
    <>
      <ul>
        {contacts.map(contact => {
          return (
            <Contact contact={contact} key={contact.id} onClick={onClick} />
          );
        })}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};
