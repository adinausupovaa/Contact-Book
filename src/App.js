import React, { useState } from "react";
import AddContact from "./components/AddContact/AddContact";
import ContactsList from "./components/contactlist/contactsList";
import EditContacts from "./components/EditContacts/EditConracts";
function App() {
  let [contacts, setContacts] = useState([]);
  let [editContact, setEditContact] = useState({});
  let [isEdit, setIsEdit] = useState(false);

  function handleNewContact(newContact) {
    let newContactsArray = [...contacts];
    newContactsArray.push(newContact);
    setContacts(newContactsArray);
  }
  function handleDeleteContact(id) {
    let newContactsArray = contacts.filter((item) => {
      if (item.id !== id) return item;
    });
    setContacts(newContactsArray);
  }
  function hendleEditIndex(index) {
    setIsEdit(true);
    setEditContact(contacts[index]);
  }

  function handleEditSave(newContact) {
    let newContactsArray = contacts.map((item) => {
      if (item.id === newContact.id) {
        return newContact;
      }
      return item;
    });
    setContacts(newContactsArray);
    setIsEdit(false);
  }
  return (
    <div className="App">
      <AddContact handleNewContact={handleNewContact} />
      {isEdit ? (
        <EditContacts
          editContact={editContact}
          handleEditSave={handleEditSave}
        />
      ) : null}

      <ContactsList
        contacts={contacts}
        handleDeleteContact={handleDeleteContact}
        hendleEditIndex={hendleEditIndex}
      />
    </div>
  );
}
export default App;
