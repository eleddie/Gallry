import React from 'react';
import { View, StyleSheet } from 'react-native';
import Touchable from '../Touchable';
import RoundImage from '../RoundImage';

const SuggestedImage = ({ src }) => (
	<View style={styles.imageWrapper}>
		<Touchable borderless>
			<RoundImage size={46} source={src} />
		</Touchable>
	</View>
);

const styles = StyleSheet.create({
	imageWrapper: {
		elevation: 6,
		shadowColor: '#000',
		shadowOffset: { width: 1, height: 3, },
		shadowOpacity: 0.3,
		shadowRadius: 3,
	}
});


export default SuggestedImage;
