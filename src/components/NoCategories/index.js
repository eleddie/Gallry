import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const NoCategories = () => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Icon name="inbox" color="#000" size={96} style={{ opacity: 0.2 }} />
			<Text style={{ opacity: 0.2, fontSize: 24, fontWeight: 'bold' }}>No hay categorias</Text>
		</View>
	);
}

export default NoCategories;
