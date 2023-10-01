import { useEffect, useState } from "react"
import { ContactForm } from "./contactForm/ContactForm";
import { ContactList } from "./contactList/ContactList";
import { Filter } from "./filter/Filter";
import { Wrapper } from "./App.styled"


export const App = () => {

  const [contacts, setcontacts] = useState([])
  const [filter, setfilter] = useState('')

  useEffect(() => {

    const localContact = JSON.parse(localStorage.getItem('contacts'))
    if (localContact === null) {
      return
    }
    setcontacts(localContact)
  }, [])

  useEffect(() => {
    if (contacts.length === 0) {
      return
    }
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])


  const addConacts = (data) => {

    const checkNameUser = contacts.some(user => user.name.toLowerCase() === data.name.toLowerCase())
    if (checkNameUser) {
      alert(`${data.name} is already in contacts`)
      return
    }
    setcontacts(prevState => prevState.concat(data))
  }

  const removeContact = (id) => {
    setcontacts(prevState => prevState.filter(user => user.id !== id))
  }

  const filterContact = (evt) => {
    setfilter(evt)
    return contacts.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()))
  }

  const filtredContactArr = () => {
    return contacts.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()))
  }

  return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm
          addConacts={addConacts}
        >
        </ContactForm>
        <h2>Contacts</h2>
        <Filter
          filterContact={filterContact}
        >
        </Filter>
        <ContactList
          phoneBook={filtredContactArr()}
          removeContact={removeContact}
          filter={filter}
        >
        </ContactList>
      </Wrapper>
  )
}
