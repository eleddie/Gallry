import React, { Component } from 'react';
import { View, StyleSheet, TextInput, ScrollView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Touchable from '../../components/Touchable';
import FloatingButton from '../../components/FloatingButton';
import SuggestedImage from '../../components/SuggestedImage';
import Color from '../../components/Color';
import TextSpacing from '../../components/TextSpacing';
import RoundImage from '../../components/RoundImage';

const suggestions1 = [
	'https://www.rd.com/wp-content/uploads/2017/09/01-Can-You-Pass-This-Elementary-School-Math-Test--760x506.jpg',
	'http://www.sciencefriday.com/wp-content/uploads/2016/08/Artboard-1.png',
	'https://hips.hearstapps.com/del.h-cdn.co/assets/16/23/1600x800/landscape-1465410639-grilled-pineapple-sundaes.jpg?resize=480:*',
	'https://e2k9ube.cloudimg.io/s/cdn/x/https://desalinationbiz.s3.amazonaws.com/news/images/full_8974.jpg?v=21/03/2018%2015:53:00',
	'https://www.text100.com/wp-content/uploads/2015/04/codingfeatured.jpg',
];

const suggestions2 = [
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFH9a-fG3vMUBGw54Q7OCjQmCW_pJTgxT13s_ojBdZlfPCSlgj',
	'https://www.chatelaine.com/wp-content/uploads/2012/07/4cfa8a2042a582675a2930de2e6d.jpg',
	'https://neilpatel-qvjnwj7eutn3.netdna-ssl.com/wp-content/uploads/2015/10/colors.jpg',
	'https://s3-us-west-2.amazonaws.com/hfc-ad-prod/plan_assets/324995624/large/85223ms_front_1510093255.jpg?1510093255',
];

const colors1 = [
	'#D54D4D',
	'#528AE3',
	'#49DC6E',
	'#BB5CF7',
	'#E19F26',
];

const colors2 = [
	'#C0EE51',
	'#52E3C1',
	'#3B36F9',
	'#E24B98',
	'#6C26F4',
];

export default class NewCategory extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerLeft: <Touchable onPress={() => navigation.goBack()}><Icon name="chevron-left" color="#fff" size={24} style={{ paddingLeft: 16 }} /></Touchable>,
			headerRight: <View />,
			title: 'Nueva Categoria',
			headerStyle: {
				backgroundColor: '#3F51B5',
			},
			headerTitleStyle: {
				color: '#fff',
				textAlign: 'center',
				justifyContent: 'center', alignItems: 'center', flex: 1
			},

		}
	};

	render() {
		return (
			<ScrollView style={styles.container}>
				<StatusBar barStyle="light-content" />
				<View >
					<View style={styles.section}>
						<TextSpacing styles={styles.label} spacing={2}>NOMBRE</TextSpacing>
						<TextInput
							style={styles.nameInput}
							placeholder="Nombre de la categoria"
							underlineColorAndroid="transparent" />
					</View>
					<View style={styles.section}>
						<TextSpacing styles={styles.label} spacing={2}>IMAGEN</TextSpacing>
						<View style={styles.imageContainer}>
							<RoundImage size={128} source="https://www.madsquirrel.uk/assets/placeholders/Placeholder-SQ.jpg" />
							<FloatingButton icon="camera" color="#3F51B5" containerStyles={styles.fabImage} />
						</View>
						<View style={styles.imageSuggestions}>
							<View style={styles.suggestionsRow}>
								{suggestions1.map((image, index) => <SuggestedImage key={index} src={image} />)}
							</View>
							<View style={styles.suggestionsRow}>
								{suggestions2.map((image, index) => <SuggestedImage key={index} src={image} />)}
								<FloatingButton icon="image" color="#3F51B5" />
							</View>
						</View>
					</View>
					<View style={styles.section}>
						<TextSpacing styles={styles.label} spacing={2}>COLOR</TextSpacing>
						<View style={styles.colors}>
							<View style={styles.colorsRow}>
								{colors1.map((color, index) => <Color size={32} key={index} color={color} />)}
							</View>
							<View style={styles.colorsRow}>
								{colors2.map((color, index) => <Color size={32} key={index} color={color} />)}
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		)
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
	},
	section: {
		paddingBottom: 24,
	},
	label: {
		color: '#3F51B5',
		paddingVertical: 8,
	},
	nameInput: {
		paddingVertical: 8,
		borderBottomWidth: 0.7,
		borderBottomColor: '#3F51B5',
	},
	imageContainer: {
		height: 160,
		alignItems: 'center',
		marginTop: 16,
	},
	fabImage: {
		position: 'relative',
		bottom: 44,
		left: 36,
	},
	suggestionsRow: {
		height: 46,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginBottom: 16,
	},
	colors: {
		marginTop: 16,
	},
	colorsRow: {
		height: 46,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginBottom: 2,
		paddingHorizontal: 16,
	}
});
