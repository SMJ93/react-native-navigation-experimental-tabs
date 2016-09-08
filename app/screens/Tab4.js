import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native'

import HeaderStyles from '../styles/Header'
import Tabs from '../components/Tabs';

class Tab4 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>

				<View style={HeaderStyles.header}>
					<View style={[HeaderStyles.side, HeaderStyles.left]}/>
					<View style={HeaderStyles.middle}>
						<Text style={[HeaderStyles.text, HeaderStyles.title]}>Tab 4</Text>
					</View>
					<View style={[HeaderStyles.side, HeaderStyles.right]}/>
				</View>

				<Text style={styles.title}>Tab 4</Text>
				<Tabs activeTab="tab4" _handleNavigate={this.props._handleNavigate}/>
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

export default Tab4;
