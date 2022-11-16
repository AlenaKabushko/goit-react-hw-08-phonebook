import { Label, Input } from './Filter.styled';
import PropTypes from 'prop-types';

function Filter({ onChange }) {
  return (
    <Label>
      Find contacts by name:
      <Input
        type="text"
        name="name"
        onChange={e => onChange(e.currentTarget.value)}
      />
    </Label>
  );
}

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func,
};
