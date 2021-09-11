import React, { useState } from "react";
import s from './FormContacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import contactsActions from "../../redux/contacts/contacts-actions";
import { getContacts } from '../../redux/contacts/contacts-selectors';

function FormContacts({ submit }) {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const items = useSelector(getContacts);

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }

  }

  const handleChangeSubmit = (e) => {
    e.preventDefault();

    if (items.find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`)
    }
    dispatch(contactsActions.addContact(name, number));

    reset();

  };

  const reset = () => {
    setName('');
    setNumber('');
  };



  return (
    <form onSubmit={handleChangeSubmit} className={s.form}>
      <label className={s.label}>
        Name
        <input type="text" name="name" required value={name} onChange={handleChange} className={s.input}></input>
      </label>
      <label className={s.label}>
        Number
        <input type="tel" required name="number" value={number} onChange={handleChange} className={s.input}></input>
      </label>
      <button type="submit" className={s.button}>Add to card</button>
    </form>
  )
}

export default FormContacts;