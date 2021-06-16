import { reduxForm, Field } from 'redux-form'

function BookForm ({ handleSubmit }) {
    return(
        <form className="input-group mb-3" onSubmit={handleSubmit} >
            <Field className="form-control" name="author" component="input" placeholder="Book Author" />
            <Field className="form-control" name="title" component="input" placeholder="Book Title" />
            <button className="btn btn-secondary" type="submit">Add</button>
        </form>
    )
}

const validate = values => {
    const errors = {}
  
    if (!values.author) errors.author = 'You should add a Author'

    if (!values.title) errors.title = 'You should add a Title'
 
    return errors;
}

export default reduxForm({
    validate,
    form: 'book',
})(BookForm)