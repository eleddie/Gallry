import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Touchable from '../Touchable';

const FloatingButton = ({ icon, color, containerStyles }) => (
	<View style={[styles.container, { backgroundColor: color }, containerStyles]} containerViewStyle={{borderRadius: 23}}>
		<Touchable borderless>
			<View style={[styles.button]}>
				<Icon name={icon} color="#fff" size={24} style={styles.icon} />
			</View>
		</Touchable>
	</View>
);

const styles = StyleSheet.create({
	container: {
		width: 46,
		height: 46,
		borderRadius: 23,
		elevation: 6,
		shadowColor: '#000',
		shadowOffset: { width: 1, height: 3, },
		shadowOpacity: 0.3,
		shadowRadius: 3,
		justifyContent: 'center',
		alignItems: 'center',
		zIndex:10,
	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 46,
		height: 46,
		borderRadius: 23,
	},
	icon: {
		paddingTop: 3,
		paddingLeft: 2,
	}
});

export default FloatingButton;
