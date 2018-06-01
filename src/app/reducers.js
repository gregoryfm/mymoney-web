import { combineReducers } from 'redux';
import dashboardReducer from '../dashboard/dashboardReducer';
import TabReducer from '../common/tabs/tabReducer';

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tab: TabReducer
})

export default rootReducer;
