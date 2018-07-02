import React from 'react';
import { View, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

export default class ImageViewer extends React.Component {
	static navigationOptions = {
		header: null,
	}


	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
				<Image style={{ width: width, height: width * 16 / 9 }} source={{ uri: this.props.navigation.getParam('image') }} />
				<View style={styles.backButton}>
					<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
						<Icon name="chevron-left" color="#fff" size={32} />
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	backButton: {
		position: 'absolute',
		top: 0,
		backgroundColor: 'rgba(0,0,0,0.5)',
		flexDirection: 'row',
		width: width,
		height: 86,
		alignItems: 'flex-end',
		paddingLeft: 16,
		paddingBottom: 8,
	},
});
