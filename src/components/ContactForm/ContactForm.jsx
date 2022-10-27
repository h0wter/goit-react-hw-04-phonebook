import { Component } from 'react';
import { Formik, Field } from 'formik';
import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import { StyledForm } from './ContactForm.styled';
import { Button } from 'components/Button/Button';
export class ContactForm extends Component {
  state = { name: '', number: '' };
  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { onSubmit } = this.props;
    const initialValues = {
      name: this.state.name,
      number: this.state.number,
    };
    return (
      <>
        <Formik
          initialValues={initialValues}
          onSubmit={() => {
            onSubmit(this.state.name, this.state.number);
            this.setState({ name: '', number: '' });
          }}
        >
          <StyledForm autoComplete="off">
            <label htmlFor="name">Name</label>
            <Box mt="10px" mb="15px">
              <Field
                name="name"
                type="text"
                onChange={this.onInputChange}
                value={initialValues.name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </Box>
            <label htmlFor="number">Number</label>
            <Box mb="15px">
              <Field
                name="number"
                type="tel"
                onChange={this.onInputChange}
                value={initialValues.number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </Box>
            <Button type="submit">Add contact</Button>
          </StyledForm>
        </Formik>
      </>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
