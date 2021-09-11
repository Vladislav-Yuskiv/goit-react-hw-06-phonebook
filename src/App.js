import React from "react";
import Filter from "./Components/Filter";
import { useSelector } from 'react-redux';
import FormContacts from "./Components/FormContacts";
import ContactList from "./Components/ContactList";
import ContactItem from "./Components/ContactItem";

function App() {
  const items = useSelector(state => state.contacts.items);
  // const [contacts, setContacts] = useState([]);


  // useEffect(() => {
  //   if (localStorage.getItem("contacts")?.length > 0) {
  //     setContacts(JSON.parse(localStorage.getItem("contacts")));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);


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
