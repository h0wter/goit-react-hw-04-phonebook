import PropTypes from 'prop-types';
import { Box } from 'components/Box';

export const Filter = ({ onChange }) => {
  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <Box mt="5px" mb="15px">
        <input name="filter" type="text" onChange={onChange} />
      </Box>
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
