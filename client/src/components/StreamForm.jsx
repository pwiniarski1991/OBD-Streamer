import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Error from './Error'


class StreamForm extends React.Component {
    renderError({ touched, error}) {
        if(touched && error)
            return <Error text={error} />
    }
    renderInput = ({ input, label, meta }) => {
        return (
            <div className={`field ${meta.error && meta.touched ? "error" : ""}`}>
                <label>{label}</label>
                <input {...input} />
                {this.renderError(meta)}
            </div>
       )
   }
   render() {
       const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <div>
                <form className="ui form error" onSubmit={handleSubmit(this.props.onSubmit)}>
                    <Field 
                        name="title" 
                        component={this.renderInput} 
                        placeholder="type..."
                        label="Title" 
                    />
                    <Field 
                        name="description" 
                        component={this.renderInput} 
                        placeholder="type..."
                        label="Description" 
                    />
                    <button className="ui button primary">Submit</button>
                </form>
            </div>
        )
   }
}

const validate = formValues => {
    const errors = {};
    if(!formValues.title) errors.title= 'You must enter title' 
    if(!formValues.title) errors.description= 'You must enter description'
    return errors; 
}

export default reduxForm({
    form: 'streamCreate',
    validate
})(StreamForm)