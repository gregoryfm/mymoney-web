import React from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { init } from './billingCycleActions';
import LabelAndInput from '../common/form/labelAndInput';
import ItemList from './ItemList';

class BillingCycleForm extends React.Component {
    render() {
        const { handleSubmit, readOnly, credits } = this.props;
        return (
            <form role='form' onSubmit={ handleSubmit }>
                <div className="box-body">
                    <Field name='name'
                        component={LabelAndInput}
                        label='Name'
                        readOnly={readOnly}
                        col='12 4'
                        placeholder='Name' />
                    <Field name='month'
                        component={LabelAndInput}
                        type='number'
                        label='Month'
                        readOnly={readOnly}
                        col='12 4'
                        placeholder='Month' />
                    <Field name='year'
                        component={LabelAndInput}
                        type='number'
                        label='Year'
                        readOnly={readOnly}
                        col='12 4'
                        placeholder='Year' />

                    <ItemList cols='12 6'
                        readOnly={readOnly}
                        list={credits}
                        field='credits'
                        legend='Credits' />

                    <ItemList cols='12 6'
                        readOnly={readOnly}
                        showStatus={true}
                        list={debits}
                        field='debits'
                        legend='Debits' />
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

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm);
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);

const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debits: selector(state, 'debits')
});

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);
