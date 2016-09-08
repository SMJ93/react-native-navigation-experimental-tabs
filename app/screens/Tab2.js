import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView
} from 'react-native'

import HeaderStyles from '../styles/Header'
import Tabs from '../components/Tabs';

class Tab2 extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>

				<View style={HeaderStyles.header}>
					<View style={[HeaderStyles.side, HeaderStyles.left]}/>
					<View style={HeaderStyles.middle}>
						<Text style={[HeaderStyles.text, HeaderStyles.title]}>Tab 2</Text>
					</View>
					<View style={[HeaderStyles.side, HeaderStyles.right]}/>
				</View>

				<ScrollView style={styles.scroll}>
					<Text style={styles.title}>Tab 2</Text>
					<Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
          <Text style={styles.text}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Text>
          <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
          <Text style={styles.text}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Text>
        </ScrollView>
				<Tabs activeTab="tab2" _handleNavigate={this.props._handleNavigate}/>
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
	},
  text:{
	  fontSize: 14,
    margin:10
  }
});

export default Tab2;
