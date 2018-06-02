import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm } from 'redux-form';
import { showTabs, selectTab } from '../common/tabs/tabActions';

const BASE_URL = 'http://localhost:3003/api';

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`);
    return {
        type: 'BILLING_CYCLE_FETCHED',
        payload: request
    }
}

export function create( values ) {
    return dispatch => {
        axios.post(`${BASE_URL}/billingCycles`, values)
            .then(res => {
                toastr.success('Success', 'Successful operation');
                dispatch([
                    resetForm('billingCycleForm'),
                    getList(),
                    selectTab('tabList'),
                    showTabs('tabList', 'tabCreate')
                ]);
            })
            .catch(err => {
                dispatch(err.response.data.errors.forEach(erro => toastr.error('Erro', erro)));
            })
    };
}
