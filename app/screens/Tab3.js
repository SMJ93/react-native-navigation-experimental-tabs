import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native'

import HeaderStyles from '../styles/Header'
import Tabs from '../components/Tabs';
import WhiteButton from '../components/WhiteButton';

const page5Route = {
	type: 'push',
	route: {
		key: 'page5',
		title: 'Page 5'
	}
};

class Tab3 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>

				<View style={HeaderStyles.header}>
					<View style={[HeaderStyles.side, HeaderStyles.left]}>

					</View>

					<View style={HeaderStyles.middle}>
						<Text style={[HeaderStyles.text, HeaderStyles.title]}>Tab 3</Text>
					</View>


					<View style={[HeaderStyles.side, HeaderStyles.right]}>
						<WhiteButton onPress={() => this.props._handleNavigate(page5Route)} text='Page 5'/>
					</View>
				</View>


				<Text style={styles.title}>Tab 3</Text>

				<Tabs activeTab="tab3" _handleNavigate={this.props._handleNavigate}/>
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
		paddingTop: 22,
		flex:1
	}
});

export default Tab3;
