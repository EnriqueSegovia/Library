import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class SectionForm extends Component {
    render() {
        
        const { handleSubmit } = this.props
        return(
            <form className="input-group mb-3" onSubmit={handleSubmit}>
                <Field className="form-control" name="name" component="input" placeholder="Section Name" />
                <button className="btn btn-secondary" type="submit">Add Section</button>
            </form>
        )
    }
}

const validate = values => {
    const errors = {};
  
    if (!values.name) errors.name = 'You should add a Section';
  
    // If errors is empty, the form is fine to submit
    // If errors has any properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'section',
})(SectionForm)