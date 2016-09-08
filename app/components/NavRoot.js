//ENTRY POINT TO THE APPLICATION

import React, {Component} from 'react'

//IMPORT SCREENS
import Tab1 from '../screens/Tab1'
import Tab2 from '../screens/Tab2'
import Tab3 from '../screens/Tab3'
import Tab4 from '../screens/Tab4'
import Tab5 from '../screens/Tab5'
import Page1 from '../screens/Page1'
import Page2 from '../screens/Page2'
import Page3 from '../screens/Page3'
import Page4 from '../screens/Page4'
import Page5 from '../screens/Page5'



import {
	BackAndroid,
	NavigationExperimental
} from 'react-native'

//DESTRUCTURE NavigationCardStack FROM NavigationExperimental
const {
	CardStack: NavigationCardStack
} = NavigationExperimental;

class NavRoot extends Component {
	constructor(props) {
		super(props);
		this._renderScene = this._renderScene.bind(this);
		this._handleBackAction = this._handleBackAction.bind(this);
	}

	//AFTER INITIAL PAGE RENDER
	componentDidMount() {
		BackAndroid.addEventListener('hardwareBackPress', this._handleBackAction);
	}

	//RUN IMMEDIATELY BEFORE COMPONENT IS UNMOUNTED
	componentWillUnmount() {
		BackAndroid.removeEventListener('hardwareBackPress', this._handleBackAction);
	}

	//DESTRUCTURE THE ROUTE FROM PROPS.SCENE
	_renderScene(props) {
		const {route} = props.scene;
		//RETURN A COMPONENT BASED ON THE KEY
		if (route.key === 'tab1') {
			return <Tab1 _handleNavigate={this._handleNavigate.bind(this)}/>
		}
		if (route.key === 'tab2') {
			return <Tab2 _handleNavigate={this._handleNavigate.bind(this)} _goBack={this._handleBackAction.bind(this)}/>
		}
		if (route.key === 'tab3') {
			return <Tab3 _handleNavigate={this._handleNavigate.bind(this)} _goBack={this._handleBackAction.bind(this)}/>
		}
		if (route.key === 'tab4') {
			return <Tab4 _handleNavigate={this._handleNavigate.bind(this)} _goBack={this._handleBackAction.bind(this)}/>
		}
		if (route.key === 'tab5') {
			return <Tab5 _handleNavigate={this._handleNavigate.bind(this)} _goBack={this._handleBackAction.bind(this)}/>
		}
		if (route.key === 'page1') {
			return <Page1 _handleNavigate={this._handleNavigate.bind(this)} _goBack={this._handleBackAction.bind(this)}/>
		}
		if (route.key === 'page2') {
			return <Page2 _handleNavigate={this._handleNavigate.bind(this)} _goBack={this._handleBackAction.bind(this)}/>
		}
		if (route.key === 'page3') {
			return <Page3 _handleNavigate={this._handleNavigate.bind(this)} _goBack={this._handleBackAction.bind(this)}/>
		}
		if (route.key === 'page4') {
			return <Page4 _handleNavigate={this._handleNavigate.bind(this)} _goBack={this._handleBackAction.bind(this)}/>
		}
		if (route.key === 'page5') {
			return <Page5 _handleNavigate={this._handleNavigate.bind(this)} _goBack={this._handleBackAction.bind(this)}/>
		}
	}

	//PASSED TO SCREENS AS PROPS SO WE CAN ACCESS POP METHODS AS THIS.PROPS
	_handleBackAction() {
		if (this.props.navigation.index === 0) {
			return false
		}
		this.props.popRoute();
		return true
	}

	//PASSED TO SCREENS AS PROPS SO WE CAN ACCESS PUSH METHODS AS THIS.PROPS
	_handleNavigate(action) {
		switch (action && action.type) {
			case 'push':
				this.props.pushRoute(action.route);
				return true;
			case 'tab':
				this.props.changeTab(action.route);
				return true;
			case 'back':
			case 'pop':
				return this._handleBackAction();
			default:
				return false;
		}
	}

	//PASS METHODS navigationState, onNavigate AND renderScene TO NavigationCardStack
	render() {
		return (
			<NavigationCardStack
				//this.props.navigate IS A PROPERTY PASSED DOWN FROM OUR CONNECT FUNCTION
				navigationState={this.props.navigation}
				onNavigate={this._handleNavigate.bind(this)}
				renderScene={this._renderScene}
				direction='horizontal'
			/>
		)
	}
}

export default NavRoot;
