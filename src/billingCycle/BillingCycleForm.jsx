import React from 'react';
import { reduxForm, Field } from 'redux-form';
import labelAndInput from '../common/form/labelAndInput';

class BillingCycleForm extends React.Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form role='form' onSubmit={ handleSubmit }>
                <div className="box-body">
                    <Field name='name'
                        component={labelAndInput}
                        label='Name'
                        col='12 4'
                        placeholder='Name' />
                    <Field name='month'
                        component={labelAndInput}
                        type='number'
                        label='Month'
                        col='12 4'
                        placeholder='Month' />
                    <Field name='year'
                        component={labelAndInput}
                        type='number'
                        label='Year'
                        col='12 4'
                        placeholder='Year' />
                </div>
                <div className="box-footer">
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        );
    }
}

export default reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm);
