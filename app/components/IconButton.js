//BUTTON COMPONENT

import React from 'react'

import {TouchableOpacity, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

//PASS THROUGH LABEL AND CLICK ONPRESS PROPS
export default ({onPress, icon, color}) => (
	<TouchableOpacity onPress={onPress}>
		<Icon name={icon} style={[styles.icon, {color: color}]}/>
	</TouchableOpacity>
)

const styles = StyleSheet.create({
	icon: {
		fontSize: 25,
		padding: 15,
	}
});
