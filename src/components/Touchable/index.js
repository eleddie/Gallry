import React from 'react';
import { Platform, TouchableNativeFeedback, TouchableOpacity } from 'react-native';

const Touchable = ({ children, onPress, borderless = false }) => (
	// Platform.OS === 'android' ?
	// 	<TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#D0D0D0', borderless)} onPress={onPress} >{children}</TouchableNativeFeedback> :
		<TouchableOpacity activeOpacity={0.5} onPress={onPress}>{children}</TouchableOpacity>
);

export default Touchable;
