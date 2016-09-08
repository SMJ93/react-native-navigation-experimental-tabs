//USE CONNECT SO WE CAN USE NAVIGATION METHODS THROUGHOUT THE APP

import {connect} from 'react-redux'
import NavigationRoot from '../components/NavRoot'
import {push, pop, changeTab} from '../actions/navActions'

//GIVE THE NAVIGATOR KEY THE PROPERTY OF OUR NAV REDUCER SO IT WILL BE AVAILABLE IN THE NavigationRoot COMPONENT AS this.props.navigation
function mapStateToProps(state) {
	return {
		navigation: state.navReducer
	}
}

//EXPORT OUR CONNECT FUNCTION WITH OUR NAVIGATION ROOT COMPONENT
export default connect(
	//DEFINE THE METHODS WE WANT TO PASS DOWN AS PROPS
	mapStateToProps,
	{
		pushRoute: (route) => push(route),
		popRoute: () => pop(),
		changeTab: (route) => changeTab(route)
	}
)(NavigationRoot)
