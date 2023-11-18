import { useSelector } from 'react-redux';
import ContactListItem from './ContactListItem';

const ContactList = () => {
  const contacts = useSelector(state => state.contactsStore.contacts);
  const filter = useSelector(state => state.filterStore.value);

  const getFilteredContact = () => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  const filteredContacts = getFilteredContact();

  return (
    <div>
      {filteredContacts.map(item => {
        return <ContactListItem {...item} key={item.id} />;
      })}
    </div>
  );
};

export default ContactList;
