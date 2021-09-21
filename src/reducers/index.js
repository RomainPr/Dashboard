import { combineReducers } from 'redux';

import dashboardReducer from './dashboard';

// combineReducers permet de découper notre état et nos reducers
// en plusieurs "tranches" aka SLICES
// ici nous avons deux tranches : recipes et user
const rootReducer = combineReducers({
  dashboard: dashboardReducer,
});

export default rootReducer;
