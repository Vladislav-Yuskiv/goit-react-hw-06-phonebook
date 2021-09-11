import React from "react";
import Filter from "./Components/Filter";
import { useSelector } from 'react-redux';
import FormContacts from "./Components/FormContacts";
import ContactList from "./Components/ContactList";
import ContactItem from "./Components/ContactItem";
import { getContacts } from './redux/contacts/contacts-selectors';

function App() {
  const items = useSelector(getContacts);

  return (
    <>
      <h1>PHONEBOOK</h1>
      <FormContacts />
      <Filter title={"Contacts"} />
      <ContactList >
        {items.length === 0 && <h2>Список ваших контактів пустий</h2>}
        <ContactItem />
      </ContactList>

    </>
  )
}


export default App;
