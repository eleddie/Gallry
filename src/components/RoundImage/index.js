import React from 'react';
import { Image } from 'react-native';

const RoundImage = ({ source, size }) => {
	return (
		<Image style={{ height: size, width: size, borderRadius: size / 2 }} source={{ uri: source }} />
	);
};

export default RoundImage;
