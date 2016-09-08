import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native'

import SimpleHeader from '../components/SimpleHeader'

class Page2 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<SimpleHeader _goBack={this.props._goBack} title="Page 2"/>
				<Text style={styles.title}>Page2</Text>
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

export default Page2;
