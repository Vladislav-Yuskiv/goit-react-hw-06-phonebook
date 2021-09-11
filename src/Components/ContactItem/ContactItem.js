import React from "react";
import s from './ContactItem.module.css';
import { useSelector, useDispatch } from 'react-redux';
import contactsActions from "../../redux/contacts/contacts-actions";
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
function ContactItem() {

  const visibleContacts = useSelector(getVisibleContacts)
  const dispatch = useDispatch();
  const onDeleteTodo = id => dispatch(contactsActions.deleteContact(id));



  return (
    <>
      {visibleContacts.map(({ id, name, number }, i) => (
        <li key={id} className={s.item}>
          <span className={s.text}>
            {`${i + 1})    `}
            {name}: {number}
          </span>
          <button type="button" onClick={() => onDeleteTodo(id)} className={s.button}>
            Delete
          </button>
        </li>
      ))}
    </>
  )

}

export default ContactItem;