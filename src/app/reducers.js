import { combineReducers } from 'redux';
import Dashboard from '../dashboard/Dashboard';

const rootReducer = combineReducers({
    dashboard: () => ({ summary: {credit: 100, debit: 50 }})
})

export default rootReducer;