import { useEffect, useState } from "react"
import ContactList from "./ContactList/ContactList"
import SearchBox from "./SearchBox/SearchBox"
import ContactForm from "./ContactForm/ContactForm"

function App() {
  const [contacts, setContacts] = useState(() => {
    const saveContacts = localStorage.getItem('contacts');
    if (saveContacts !== null) {
      return JSON.parse(saveContacts);
    }
    return [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]
  })
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  },[contacts])

  const [filter, setFilter] = useState('')
  
  const visibleContacts = contacts.filter(contacts=>contacts.name.toLowerCase().includes(filter.toLowerCase()))
  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact]
    })
  }
  const deleteContact = (contactID) => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactID);
    })
  }

  return (<div>
    <h1>Phonebook</h1>
    <ContactForm onAdd={addContact} />
    <SearchBox value={filter} onFilter={setFilter} />
    <ContactList contacts={visibleContacts} onDelete={deleteContact} />
</div>) 
}

export default App
