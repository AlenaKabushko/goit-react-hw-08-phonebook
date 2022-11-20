import { Label, Input } from './Filter.styled';
import { useDispatch } from 'react-redux/es/exports';
import { setNameFilter } from '../../redux/filterSlice';

function Filter() {
  const dispatch = useDispatch();

  const onFilterChange = e => {
    dispatch(setNameFilter(e.currentTarget.value));
  };

  return (
    <Label>
      Find contacts by name:
      <Input type="text" name="name" onChange={onFilterChange} />
    </Label>
  );
}

export default Filter;
