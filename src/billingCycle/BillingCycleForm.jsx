import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { init } from './billingCycleActions';
import labelAndInput from '../common/form/labelAndInput';

class BillingCycleForm extends React.Component {
    render() {
        const { handleSubmit, readOnly } = this.props;
        return (
            <form role='form' onSubmit={ handleSubmit }>
                <div className="box-body">
                    <Field name='name'
                        component={labelAndInput}
                        label='Name'
                        readOnly={readOnly}
                        col='12 4'
                        placeholder='Name' />
                    <Field name='month'
                        component={labelAndInput}
                        type='number'
                        label='Month'
                        readOnly={readOnly}
                        col='12 4'
                        placeholder='Month' />
                    <Field name='year'
                        component={labelAndInput}
                        type='number'
                        label='Year'
                        readOnly={readOnly}
                        col='12 4'
                        placeholder='Year' />
                </div>
                <div className="box-footer">
                    <button type='submit'
                        className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button'
                        className={`btn btn-${this.props.submitClass}`}
                        onClick={this.props.init}>
                        Cancel
                    </button>
                </div>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm);
export default connect(null, mapDispatchToProps)(BillingCycleForm);
