import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts.reducer';
import css from './Form.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactsStore.contacts);

  const inputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    switch (name) {
      case 'name': {
        setName(value);
        return;
      }
      case 'number': {
        setNumber(value);
        return;
      }
      default:
        return;
    }
  };

  const submit = event => {
    event.preventDefault();
    const hasDuplicates = contacts.find(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
    if (hasDuplicates) {
      alert(`"${name}" is already in contacts`);
      return;
    }
    dispatch(addContact(name, number));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={submit} className={css.Form}>
      <label>
        <span>Name</span>
        <input type="text" name="name" onChange={inputChange} value={name} />
        <span>Number</span>
        <input
          type="text"
          name="number"
          onChange={inputChange}
          value={number}
        />
      </label>
      <button type="submit">Add contact </button>
    </form>
  );
};

export default ContactForm;
