import { useDispatch, useSelector } from 'react-redux';
import { Box } from 'components/Box';
import { Input } from './Filter.styled';
import { filter, getFilter } from 'redux/redusers';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);
  const handleChangeFilter = evt => {
    dispatch(filter(evt.target.value));
  };

  return (
    <Box
      as="label"
      display="flex"
      gridGap="10px"
      alignItems="center"
      htmlFor="filter"
    >
      Find contacts by name
      <Input
        type="input"
        value={filterValue}
        onChange={handleChangeFilter}
      ></Input>
    </Box>
  );
};
