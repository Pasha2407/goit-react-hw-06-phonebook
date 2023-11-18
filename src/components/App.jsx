import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, addFilter } from 'redux/contacts.reducer';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import css from './Form.module.css';
import { nanoid } from 'nanoid';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactsStore.contacts);
  const filter = useSelector(state => state.contactsStore.filter);

  const handleAddContact = contactData => {
    const hasDuplicates = contacts.some(
      item => item.name.toLowerCase() === contactData.name.toLowerCase()
    );
    if (hasDuplicates) {
      alert(`${contactData.name} is already in contacts.`);
      return;
    } else {
      const finalContact = {
        ...contactData,
        id: nanoid(),
      };
      dispatch(addContact(finalContact));
    }
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const inputFilterChange = event => {
    dispatch(addFilter(event.target.value));
  };

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filtered = filteredContacts();

  return (
    <div className={css.Container}>
      <h2>Phonebook</h2>
      <ContactForm addContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter filterValue={filter} filterChange={inputFilterChange} />
      <ContactList contacts={filtered} deleteContact={handleDeleteContact} />
    </div>
  );
};
