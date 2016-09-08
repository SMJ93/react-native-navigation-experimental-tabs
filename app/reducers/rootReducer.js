//OUR ROOT REDUCER THAT WILL USE COMBINE REDUCERS TO WRAP OUR REDUCER

import {combineReducers} from 'redux'
import navReducer from './navReducer'

//CALL combineReducers ON OUR ONE REDUCER
const rootReducer = combineReducers({
	navReducer
	//If you grow the app later, you can import the rest of the reducers
	//into this file and pass the new reducers here.
});

export default rootReducer;
