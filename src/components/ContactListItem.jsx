import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts.reducer';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ul>
      <li>
        {name}: {number}
        <button
          style={{ marginLeft: '15px' }}
          type="button"
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </li>
    </ul>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
