//BUTTON COMPONENT

import React, { Component } from 'react';

import {View, Text, StyleSheet} from 'react-native'

import IconButton from '../components/IconButton';
import HeaderStyles from '../styles/Header'

//PASS THROUGH TITLE AND BACKPRESS
class SimpleHeader extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={HeaderStyles.header}>
				<View style={[HeaderStyles.side, HeaderStyles.left]}>
					<IconButton onPress={() => this.props._goBack()} icon='chevron-left' color='#fff'/>

				</View>

				<View style={HeaderStyles.middle}>
					<Text style={[HeaderStyles.text, HeaderStyles.title]}>{this.props.title}</Text>
				</View>


				<View style={[HeaderStyles.side, HeaderStyles.right]}>

				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({

});

export default SimpleHeader;