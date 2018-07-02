import React from 'react';
import { View, StyleSheet } from 'react-native';
import Touchable from '../Touchable';
import RoundImage from '../RoundImage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SuggestedImage = ({ src, selected, onPress }) => (
	<View style={styles.imageWrapper}>
		<Touchable borderless onPress={onPress}>
			<RoundImage size={46} source={src} />
		</Touchable>
		{selected && <Icon name="check" color="#fff" size={24} style={{ position: 'absolute' }} />}
	</View>
);

const styles = StyleSheet.create({
	imageWrapper: {
		elevation: 6,
		shadowColor: '#000',
		shadowOffset: { width: 1, height: 3, },
		shadowOpacity: 0.3,
		shadowRadius: 3,
		justifyContent: 'center',
		alignItems: 'center',
	}
});


export default SuggestedImage;
