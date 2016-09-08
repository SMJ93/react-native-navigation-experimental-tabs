//OUR REDUX STORE

import {createStore} from 'redux'
import rootReducer from '../reducers/rootReducer'

export default function configureStore() {
	//VARIABLE TO HOLD OUR REDUX STORE
	const store = createStore(rootReducer);

	//ENABLE HOT RELOADING ON REDUX
	if (module.hot) {
		module.hot.accept(() => {
			const nextRootReducer = require('../reducers/rootReducer').default;
			store.replaceReducer(nextRootReducer)
		})
	}
	return store
}
