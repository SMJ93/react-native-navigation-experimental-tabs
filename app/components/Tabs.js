//BUTTON COMPONENT

import React, { Component } from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

//NEW SCREEN ROUTE
const tab1Route = {
	type: 'tab',
	route: {
		key: 'tab1'
	}
};

const tab2Route = {
	type: 'tab',
	route: {
		key: 'tab2'
	}
};

const tab3Route = {
	type: 'tab',
	route: {
		key: 'tab3'
	}
};

const tab4Route = {
	type: 'tab',
	route: {
		key: 'tab4'
	}
};

const tab5Route = {
	type: 'tab',
	route: {
		key: 'tab5'
	}
};


class Tabs extends Component {
	constructor(props) {
		super(props);
	}

	checkActiveTab(tab){
		let style ={
			flex:1,
			height:60,
			alignItems: "center",
			justifyContent: "center",
		};

		if(this.props.activeTab == tab){
			style.backgroundColor = "#AD5D5D";
		}
		return style;
	}

	render() {
		return (
			<View style={styles.tabs}>
				<TouchableOpacity style={this.checkActiveTab('tab1')} onPress={() => this.props._handleNavigate(tab1Route)}>
					<Icon name='home' style={styles.tabIcon}/>
					<Text style={styles.tabText}>Tab 1</Text>
				</TouchableOpacity>
				<TouchableOpacity style={this.checkActiveTab('tab2')} onPress={() => this.props._handleNavigate(tab2Route)}>
					<Icon name='beer' style={styles.tabIcon}/>
					<Text style={styles.tabText}>Tab 2</Text>
				</TouchableOpacity>
				<TouchableOpacity style={this.checkActiveTab('tab3')} onPress={() => this.props._handleNavigate(tab3Route)}>
					<Icon name='bell' style={styles.tabIcon}/>
					<Text style={styles.tabText}>Tab 3</Text>
				</TouchableOpacity>
				<TouchableOpacity style={this.checkActiveTab('tab4')} onPress={() => this.props._handleNavigate(tab4Route)}>
					<Icon name='building-o' style={styles.tabIcon}/>
					<Text style={styles.tabText}>Tab 4</Text>
				</TouchableOpacity>
				<TouchableOpacity style={this.checkActiveTab('tab5')} onPress={() => this.props._handleNavigate(tab5Route)}>
					<Icon name='compass' style={styles.tabIcon}/>
					<Text style={styles.tabText}>Tab 5</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	tabs:{
		height: 60,
		flexDirection: "row",
		alignItems: "flex-start",
		backgroundColor: "#B93A32",
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0
	},
	tabIcon:{
		fontSize:25,
		color:"#fff",
	},
	tabText:{
		fontSize:10,
		color:"#fff"
	}
});

export default Tabs;