//NAVIGATION REDUCER TO HOLD OUR NAVIGATION STATE

//USE THESE ACTIONS IN OUR REDUCER
import {PUSH_ROUTE, POP_ROUTE, CHANGE_TAB} from '../constants/ActionTypes'
import {NavigationExperimental} from 'react-native'

//NavigationStateUtils IS A HELPER THAT LETS YOU CALL BASIC ROUTING METHODS
const {
	StateUtils: NavigationStateUtils
} = NavigationExperimental;

//INITIAL STATE OBJECT
const initialState = {
	index: 0,
	//ROUTES ARRAY IS THE ROUTE STACK WE PUSH TO AND POP FROM - THE INITIAL STATE IS HOME SO HOME WILL BE LOADED FIRST
	routes: [
		{
			key: 'tab1',
			title: 'Tab 1'
		}
	]
};

//RETURN A NEW STATE
function navReducer(state = initialState, action) {
	//TAKES THE CURRENT STATE AND RETURNS A NEW STATE BASED ON THE PUSH OR POP ACTION
	switch (action.type) {
		case PUSH_ROUTE:
			if (state.routes[state.index].key === (action.route && action.route.key)) return state;
			return NavigationStateUtils.push(state, action.route);

		case POP_ROUTE:
			if (state.index === 0 || state.routes.length === 1) return state;
			return NavigationStateUtils.pop(state);

		case CHANGE_TAB:
			//REPLACE THE INDEX VALUE WITH THE TAB
			const indexKey = state.routes[0].key;
			const index = NavigationStateUtils.indexOf(state, indexKey);
			return NavigationStateUtils.replaceAtIndex(state, index, action.route);

		default:
			return state
	}
}

export default navReducer;
