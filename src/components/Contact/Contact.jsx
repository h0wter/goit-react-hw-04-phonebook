import PropTypes from 'prop-types';
import { ContactItem, ContactData } from './Contact.styled';
import { Button } from 'components/Button/Button';

export const Contact = ({ contact, onClick }) => {
  return (
    <ContactItem>
      <ContactData>
        {contact.name}: {contact.number}
      </ContactData>
      <Button type="button" onClick={() => onClick(contact.id)}>
        Delete
      </Button>
    </ContactItem>
  );
};

Contact.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};
