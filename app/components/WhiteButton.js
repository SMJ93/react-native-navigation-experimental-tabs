//BUTTON COMPONENT

import React from 'react'

import {Text, TouchableOpacity, StyleSheet, View} from 'react-native'

//PASS THROUGH LABEL AND CLICK ONPRESS PROPS
export default ({text, onPress}) => (
	<TouchableOpacity onPress={onPress} style={ styles.whiteButtonContainer }>
		<View style={ styles.whiteButton }>
			<Text style={styles.whiteButtonText}>{text}</Text>
		</View>
	</TouchableOpacity>
)

const styles = StyleSheet.create({
	whiteButtonContainer:{
		padding:15
	},
	whiteButton: {
		paddingLeft: 8,
		paddingRight: 8,
		paddingTop: 5,
		paddingBottom: 5,
		backgroundColor: '#fff',
	},
	whiteButtonText: {
		color: '#333',
		fontFamily: "Arial"
	}
});
