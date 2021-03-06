import React from 'react';
import { View, StyleSheet } from 'react-native';
import Touchable from '../Touchable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Color = ({ color, size, colorStyle, selected, onPress }) => (
	<View style={[styles.container, { height: size, width: size, borderRadius: size / 2 }, colorStyle]}>
		<Touchable borderless onPress={onPress}>
			<View style={{ backgroundColor: color, height: size, width: size, borderRadius: size / 2 }} />
		</Touchable>
			{selected && <Icon name="check" color="#fff" size={24} style={{ position: 'absolute' }} />}
	</View>
);

const styles = StyleSheet.create({
	container: {
		elevation: 6,
		shadowColor: '#000',
		shadowOffset: { width: 1, height: 3, },
		shadowOpacity: 0.3,
		shadowRadius: 3,
		justifyContent: 'center',
		alignItems: 'center',
	}
});

export default Color;
