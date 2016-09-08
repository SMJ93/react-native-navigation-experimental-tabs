import {StyleSheet} from 'react-native'

const HeaderStyles = StyleSheet.create({
	header: {
		height: 60,
		flexDirection: "row",
		alignItems: "flex-start",
		backgroundColor: "#B93A32",
	},

	side: {
		width: 100,
		justifyContent: "center",
		height: 60,
	},

	left: {
		alignItems: "flex-start",
	},

	right: {
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
	},

	middle: {
		alignItems: "center",
		flex: 1,
		justifyContent: 'center',
		height: 60
	},

	text: {
		color: "#fff",
		fontFamily: "Arial"
	},

	title: {
		fontSize: 20,
	}
});

export default HeaderStyles;