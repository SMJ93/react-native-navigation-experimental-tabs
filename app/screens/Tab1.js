import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity
} from 'react-native'

import WhiteButton from '../components/WhiteButton';
import IconButton from '../components/IconButton';
import HeaderStyles from '../styles/Header';
import Tabs from '../components/Tabs';

//NEW SCREEN ROUTE
const page1Route = {
	type: 'push',
	route: {
		key: 'page1',
		title: 'Page 1'
	}
};

const page2Route = {
	type: 'push',
	route: {
		key: 'page2',
		title: 'Page 2'
	}
};

const page3Route = {
	type: 'push',
	route: {
		key: 'page3',
		title: 'Page 3'
	}
};

//TAB VIEW TAKES A _handleNavigate FUNCTION
class Tab1 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={HeaderStyles.header}>
					<View style={[HeaderStyles.side, HeaderStyles.left]}>
						<WhiteButton onPress={() => this.props._handleNavigate(page1Route)} text='Page 1'/>

					</View>

					<View style={HeaderStyles.middle}>
						<Text style={[HeaderStyles.text, HeaderStyles.title]}>App</Text>
					</View>


					<View style={[HeaderStyles.side, HeaderStyles.right]}>
						<WhiteButton onPress={() => this.props._handleNavigate(page2Route)} text='2'/>
						<IconButton onPress={() => this.props._handleNavigate(page3Route)} icon='eraser' color='#fff'/>
					</View>
				</View>



				<Text style={styles.title}>Tab 1</Text>




				<Tabs activeTab="tab1" _handleNavigate={this.props._handleNavigate}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	title: {
		marginTop: 20,
		marginBottom: 20,
		fontSize: 22,
		textAlign: 'center'
	},
	container: {
		marginTop: 22,
		flex:1
	}
});

export default Tab1;
