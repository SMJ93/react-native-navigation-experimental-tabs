import React from 'react'
import {AppRegistry} from 'react-native'

import NavigationRootContainer from './containers/navRootContainer'
import {Provider} from 'react-redux'


import configureStore from './store/configureStore'
const store = configureStore();

const App = () => (
  <Provider store={store}>
    <NavigationRootContainer />
  </Provider>
);

AppRegistry.registerComponent('NavigationExperimentalApp', () => App);
