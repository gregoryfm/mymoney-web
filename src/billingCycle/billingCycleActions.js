import axios from 'axios';

const URL = 'http://localhost:3003/api';

export function getList() {
    const request = axios.get(`${URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLE_FETCHED',
        payload: request
    }
}