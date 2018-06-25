import React from 'react';
import { View, StyleSheet } from 'react-native';
import Touchable from '../Touchable';

const Color = ({ color, size, colorStyle }) => (
	<View style={[styles.container, { height: size, width: size, borderRadius: size / 2 }, colorStyle]}>
		<Touchable borderless>
			<View style={{ backgroundColor: color, height: size, width: size, borderRadius: size / 2 }} />
		</Touchable>
	</View>
);

const styles = StyleSheet.create({
	container: {
		elevation: 6,
		shadowColor: '#000',
		shadowOffset: { width: 1, height: 3, },
		shadowOpacity: 0.3,
		shadowRadius: 3,
	}
});

export default Color;
