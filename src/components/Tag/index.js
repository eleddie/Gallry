import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Touchable from '../Touchable';

const Tag = ({ children }) => {
	return (
		<Touchable>
			<View style={styles.container}>
				<Text style={styles.text}>{children.toUpperCase()}</Text>
			</View>
		</Touchable>
	);
};

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 4,
		marginVertical: 10,
		backgroundColor: '#3F51B5',
		height: 32,
		borderRadius: 16,
		alignSelf: 'center',
		paddingHorizontal: 16,
		justifyContent: 'center',
	},
	text: {
		color: '#fff',
		fontSize: 16,
	},
});

export default Tag;
