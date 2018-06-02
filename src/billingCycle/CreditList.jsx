import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field } from 'redux-form';

import Grid from '../common/layout/Grid';
import Input from '../common/form/input';

class CreditList extends React.Component {

  renderRows() {
    const list = this.props.list || [];
    return list.map(((item, index) => (
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
        <td></td>
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
                <th>Actions</th>
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
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreditList);
