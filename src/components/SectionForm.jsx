import { reduxForm, Field } from 'redux-form'

function SectionForm ({ handleSubmit }) {
    return(
        <form className="input-group mb-3" onSubmit={handleSubmit}>
            <Field className="form-control" name="name" component="input" placeholder="Section Name" />
            <button className="btn btn-secondary" type="submit">Add Section</button>
        </form>
    )
}

const validate = values => {
    const errors = {}
  
    if (!values.name) errors.name = 'You should add a Section'

    return errors
}

export default reduxForm({
    validate,
    form: 'section',
})(SectionForm)