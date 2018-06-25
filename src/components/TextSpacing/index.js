import React from 'react';
import { Text, Platform } from 'react-native';

const TextSpacing = ({ styles, spacing, children }) => {
	const getSpacing = (text, spacing) => {
		if (Platform.OS === 'ios') {
			return text;
		}
		return text.split('').join('\u200A'.repeat(spacing));
	}
	return (
		<Text style={[styles, { letterSpacing: spacing }]}>{getSpacing(children)}</Text>
	);
};

export default TextSpacing;
