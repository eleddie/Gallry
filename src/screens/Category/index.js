import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, ScrollView, FlatList, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RoundImage from '../../components/RoundImage';
import TextSpacing from '../../components/TextSpacing';
import Color from '../../components/Color';
import Touchable from '../../components/Touchable';
import Tag from '../../components/Tag';

const { width } = Dimensions.get('window');

const suggestions1 = [
	'https://www.rd.com/wp-content/uploads/2017/09/01-Can-You-Pass-This-Elementary-School-Math-Test--760x506.jpg',
	'https://hips.hearstapps.com/del.h-cdn.co/assets/16/23/1600x800/landscape-1465410639-grilled-pineapple-sundaes.jpg?resize=480:*',
	'http://www.sciencefriday.com/wp-content/uploads/2016/08/Artboard-1.png',
	'http://www.sciencefriday.com/wp-content/uploads/2016/08/Artboard-1.png',
	'https://www.rd.com/wp-content/uploads/2017/09/01-Can-You-Pass-This-Elementary-School-Math-Test--760x506.jpg',
	'https://hips.hearstapps.com/del.h-cdn.co/assets/16/23/1600x800/landscape-1465410639-grilled-pineapple-sundaes.jpg?resize=480:*',
	'https://hips.hearstapps.com/del.h-cdn.co/assets/16/23/1600x800/landscape-1465410639-grilled-pineapple-sundaes.jpg?resize=480:*',
	'https://www.text100.com/wp-content/uploads/2015/04/codingfeatured.jpg',
	'http://www.sciencefriday.com/wp-content/uploads/2016/08/Artboard-1.png',
	'https://www.rd.com/wp-content/uploads/2017/09/01-Can-You-Pass-This-Elementary-School-Math-Test--760x506.jpg',
	'https://e2k9ube.cloudimg.io/s/cdn/x/https://desalinationbiz.s3.amazonaws.com/news/images/full_8974.jpg?v=21/03/2018%2015:53:00',
	'https://www.text100.com/wp-content/uploads/2015/04/codingfeatured.jpg',
	'https://hips.hearstapps.com/del.h-cdn.co/assets/16/23/1600x800/landscape-1465410639-grilled-pineapple-sundaes.jpg?resize=480:*',
	'https://www.text100.com/wp-content/uploads/2015/04/codingfeatured.jpg',
	'https://e2k9ube.cloudimg.io/s/cdn/x/https://desalinationbiz.s3.amazonaws.com/news/images/full_8974.jpg?v=21/03/2018%2015:53:00',
	'https://www.text100.com/wp-content/uploads/2015/04/codingfeatured.jpg',
	'https://e2k9ube.cloudimg.io/s/cdn/x/https://desalinationbiz.s3.amazonaws.com/news/images/full_8974.jpg?v=21/03/2018%2015:53:00',
	'https://hips.hearstapps.com/del.h-cdn.co/assets/16/23/1600x800/landscape-1465410639-grilled-pineapple-sundaes.jpg?resize=480:*',
];

export default class Category extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerLeft: <Touchable onPress={() => navigation.goBack()}><Icon name="chevron-left" color="#fff" size={24} style={{ paddingLeft: 16 }} /></Touchable>,
			headerRight: <Touchable borderless onPress={() => navigation.navigate('Camera')}><Icon name="camera" color="#fff" size={24} style={{ paddingRight: 16 }} /></Touchable>,
			title: navigation.getParam('name'),
			headerStyle: {
				backgroundColor: '#3F51B5',
			},
			headerTitleStyle: {
				color: '#fff',
				textAlign: 'center',
				justifyContent: 'center', alignItems: 'center', flex: 1
			},
			gesturesEnabled: false,
		}
	};

	renderImage = (image) => {
		return (
			<Touchable key={image}>
				<View style={styles.imageWrapper}>
					<Image
						style={styles.image}
						source={{ uri: image }}
					/>
				</View>
			</Touchable>);
	}

	render() {
		const image = this.props.navigation.getParam('image');
		const color = this.props.navigation.getParam('color');
		return (
			<ScrollView style={styles.container}>
				<StatusBar barStyle="light-content" />
				<Touchable><TextSpacing styles={styles.label} spacing={2}>EDITAR</TextSpacing></Touchable>
				<View style={styles.imageContainer}>
					<RoundImage size={128} source={image} />
					<Color colorStyle={styles.color} color={color} size={24} />
				</View>
				<View>
					<View style={styles.separator} />
					<ScrollView horizontal style={styles.tags}>
						<Tag>DERIVADAS</Tag>
						<Tag>Limites</Tag>
						<Tag>Integrales</Tag>
						<Tag>Funciones</Tag>
						<Tag>Ecuaciones</Tag>
					</ScrollView>
					<View style={styles.separator} />
				</View>
				<FlatList
					contentContainerStyle={styles.list}
					numColumns={3}
					data={suggestions1}
					renderItem={({ item }) => this.renderImage(item)}
					keyExtractor={imageUrl => imageUrl} />
			</ScrollView>
		)
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	label: {
		position: 'absolute',
		right: 16,
		top: 8,
		color: '#3F51B5',
		paddingVertical: 8,
	},
	imageContainer: {
		height: 160,
		alignItems: 'center',
		marginTop: 32,
	},
	color: {
		position: 'relative',
		bottom: 24,
		left: 36,
	},
	tags: {
		paddingHorizontal: 4,
	},
	separator: {
		height: 1,
		marginHorizontal: 16,
		backgroundColor: 'rgba(0,0,0,0.1)',
	},
	list: {
		justifyContent: 'space-around',
		margin: 1,
	},
	imageWrapper: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
		margin: 1,
		height: width / 3 - 3,
		width: width / 3 - 3,
	},
	image: {
		height: width / 3 - 3,
		width: width / 3 - 3,
	}
});
