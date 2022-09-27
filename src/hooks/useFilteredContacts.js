import { useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/redusers";

export const useFilteredContacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  
  if (filter !== '') {
    const normalizedContactName = filter.toLocaleLowerCase();
    const filtered = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedContactName));
    return filtered;
  }
    return contacts;
};