import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import dashboardReducer from '../dashboard/dashboardReducer';
import TabReducer from '../common/tabs/tabReducer';
import BillingCycleReducer from '../billingCycle/billingCycleReducers';

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer
})

export default rootReducer;
