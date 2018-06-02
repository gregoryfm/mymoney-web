import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, arrayInsert, arrayRemove } from 'redux-form';

import Grid from '../common/layout/Grid';
import Input from '../common/form/input';

class CreditList extends React.Component {

  add(index, item = {}) {
    if (!this.props.readOnly) {
      this.props.arrayInsert('billingCycleForm', 'credits', index, item);
    }
  }

  remove( index ) {
    if (!this.props.readOnly && this.props.list.length > 1) {
      this.props.arrayRemove('billingCycleForm', 'credits', index);
    }
  }

  renderRows() {
    const list = this.props.list || [];
    return list.map((item, index) => (
      <tr key={index}>
        <td>
          <Field name={`credits[${index}].name`}
                component={Input}
                placeholder='Name'
                readOnly={this.props.readOnly} />
        </td>
        <td>
          <Field name={`credits[${index}].value`}
                component={Input}
                placeholder='Value'
                readOnly={this.props.readOnly} />
        </td>
        <td>
          <button type='button'
                  className="btn btn-success"
                  onClick={() => this.add( index++ )} >
            <i className="fa fa-plus"></i>
          </button>
          <button type='button'
                  className="btn btn-warning"
                  onClick={() => this.add(index++, item)} >
            <i className="fa fa-clone"></i>
          </button>
          <button type='button'
                  className="btn btn-danger"
                  onClick={() => this.remove( index )} >
            <i className="fa fa-trash-o"></i>
          </button>
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <Grid cols={this.props.cols}>
        <fieldset>
          <legend>Credit</legend>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Value</th>
                <th className='table-actions'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
        </fieldset>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreditList);
