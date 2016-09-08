import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	Linking
} from 'react-native'

import Button from '../components/Button';
import HeaderStyles from '../styles/Header'
import Tabs from '../components/Tabs';

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

const page4Route = {
	type: 'push',
	route: {
		key: 'page4',
		title: 'Page 4'
	}
};

const page5Route = {
	type: 'push',
	route: {
		key: 'page5',
		title: 'Page 5'
	}
};


class Tab5 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={HeaderStyles.header}>
					<View style={[HeaderStyles.side, HeaderStyles.left]}/>
					<View style={HeaderStyles.middle}>
						<Text style={[HeaderStyles.text, HeaderStyles.title]}>Tab 5</Text>
					</View>
					<View style={[HeaderStyles.side, HeaderStyles.right]}/>
				</View>

				<ScrollView style={styles.scroll}>
					<Text style={styles.title}>Tab 5</Text>

					<Button onPress={() => this.props._handleNavigate(page1Route)}  label='Page 1'/>
					<Button onPress={() => this.props._handleNavigate(page2Route)}  label='Page 2'/>
					<Button onPress={() => this.props._handleNavigate(page3Route)}  label='Page 3'/>
					<Button onPress={() => this.props._handleNavigate(page4Route)}  label='Page 4'/>
					<Button onPress={() => this.props._handleNavigate(page5Route)}  label='Page 5'/>
				</ScrollView>

				<Tabs activeTab="tab5" _handleNavigate={this.props._handleNavigate}/>
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
	},
	scroll:{
		marginBottom:60
	}
});

export default Tab5;
