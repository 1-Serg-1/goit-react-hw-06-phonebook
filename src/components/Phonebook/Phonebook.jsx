import React from 'react';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContainerPhonebook, SearchMessage } from './Phonebook.styled';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { getContacts, getFilter } from 'redux/redusers';
import { useFilteredContacts } from 'hooks/useFilteredContacts';

export const Phonebook = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filtered = useFilteredContacts();

  return (
    <ContainerPhonebook>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length !== 0 && (
        <>
          <h2>Contacts</h2>
          <Filter />
          {filter === '' ? (
            <ContactList />
          ) : filtered.length === 0 ? (
            <SearchMessage>Contact not found</SearchMessage>
          ) : (
            <ContactList />
          )}
        </>
      )}
    </ContainerPhonebook>
  );
};
