import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form';
import { showTabs, selectTab } from '../common/tabs/tabActions';

const BASE_URL = 'http://localhost:3003/api';
const INITIAL_VALUES = {};

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`);
    return {
        type: 'BILLING_CYCLE_FETCHED',
        payload: request
    }
}

export function create( values ) {
    return submit( values, 'post' );
}

export function update( values ) {
    return submit( values, 'put' );
}

function submit( values, method ) {
    return dispatch => {
        const id = values._id || '';
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(res => {
                toastr.success('Success', 'Successful operation');
                dispatch(init());
            })
            .catch(err => {
                dispatch(err.response.data.errors.forEach(erro => toastr.error('Erro', erro)));
            })
    };
}

export function showUpdate( billingCycle ) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle )
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES )
    ]
}
