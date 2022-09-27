import { useDispatch } from 'react-redux';
import { TableTh, TableTd, BtnDel } from './ConstactList.styled';
import { deleteContact } from 'redux/redusers';
import { useFilteredContacts } from 'hooks/useFilteredContacts';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useFilteredContacts();
  return (
    <table>
      <TableTh>
        <tr>
          <th>Name</th>
          <th>Number</th>
          <th></th>
        </tr>
      </TableTh>
      <tbody>
        {contacts.map(({ name, number, id }) => {
          return (
            <tr key={id}>
              <TableTd>{name}</TableTd>
              <TableTd>{number}</TableTd>
              <TableTd>
                <BtnDel
                  type="button"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  Delete
                </BtnDel>
              </TableTd>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
