import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getList, showUpdate } from './billingCycleActions';

class BillingCycleList extends React.Component {
    componentWillMount() {
        this.props.getList();
    }

    renderRows() {
        const list = this.props.list || [];
        return list.map(item => (
            <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.month}</td>
                <td>{item.year}</td>
                <td>
                    <button className="btn btn-warning" onClick={() => this.props.showUpdate( item )}>
                        <i className="fa fa-pencil"></i>
                    </button>
                </td>
            </tr>
        ));
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Month</th>
                            <th>Year</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.billingCycle.list });
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);
