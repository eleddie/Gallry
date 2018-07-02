import React, { Component } from 'react';
import { View, StyleSheet, TextInput, ScrollView, StatusBar, AsyncStorage, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Touchable from '../../components/Touchable';
import FloatingButton from '../../components/FloatingButton';
import SuggestedImage from '../../components/SuggestedImage';
import Color from '../../components/Color';
import TextSpacing from '../../components/TextSpacing';
import RoundImage from '../../components/RoundImage';

const placeholder = 'https://www.madsquirrel.uk/assets/placeholders/Placeholder-SQ.jpg';

const suggestions = [
	'https://www.rd.com/wp-content/uploads/2017/09/01-Can-You-Pass-This-Elementary-School-Math-Test--760x506.jpg',
	'http://www.sciencefriday.com/wp-content/uploads/2016/08/Artboard-1.png',
	'https://hips.hearstapps.com/del.h-cdn.co/assets/16/23/1600x800/landscape-1465410639-grilled-pineapple-sundaes.jpg?resize=480:*',
	'https://e2k9ube.cloudimg.io/s/cdn/x/https://desalinationbiz.s3.amazonaws.com/news/images/full_8974.jpg?v=21/03/2018%2015:53:00',
	'https://www.text100.com/wp-content/uploads/2015/04/codingfeatured.jpg',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFH9a-fG3vMUBGw54Q7OCjQmCW_pJTgxT13s_ojBdZlfPCSlgj',
	'https://www.chatelaine.com/wp-content/uploads/2012/07/4cfa8a2042a582675a2930de2e6d.jpg',
	'https://neilpatel-qvjnwj7eutn3.netdna-ssl.com/wp-content/uploads/2015/10/colors.jpg',
	'https://s3-us-west-2.amazonaws.com/hfc-ad-prod/plan_assets/324995624/large/85223ms_front_1510093255.jpg?1510093255',
];

const colors = [
	'#528AE3',
	'#D54D4D',
	'#49DC6E',
	'#BB5CF7',
	'#E19F26',
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
			headerRight: <Touchable onPress={navigation.getParam('saveCategory')}><Icon name="content-save" color="#fff" size={24} style={{ paddingRight: 16 }} /></Touchable>,
			title: 'Nueva Categoria',
			headerStyle: {
				backgroundColor: '#3F51B5',
			},
			headerTitleStyle: {
				color: '#fff',
				textAlign: 'center',
				justifyContent: 'center',
				alignItems: 'center',
				flex: 1
			},

		}
	};

	constructor(props) {
		super(props);
		this.state = {
			selectedColor: 0,
			suggestedImage: -1,
			isSaving: false,
			name: '',
			image: placeholder,
		};
	}

	componentDidMount() {
		this.props.navigation.setParams({ saveCategory: this.saveCategory });
	}

	selectColor = (index) => {
		this.setState({
			selectedColor: index,
		});
	}

	selectImage = (index) => {
		if (this.state.suggestedImage === index)
			index = -1;
		this.setState({
			suggestedImage: index,
			image: index === -1 ? placeholder : suggestions[index],
		});
	}

	saveCategory = () => {
		if(this.state.name === ''){
			return; // TODO SHOW MESSAGE
		}
		AsyncStorage.getItem('categories', (error, result) => {
			if (!error) {
				if (result) {
					const data = JSON.parse(result);
					data.push({
						image: this.state.image,
						name: this.state.name,
						color: colors[this.state.selectedColor],
						tags: [],
						photos: [],
						key: this.state.name,
					});
					this.setState({ isSaving: true });
					AsyncStorage.setItem('categories', JSON.stringify(data), () => {
						this.setState({ isSaving: false });
						this.props.navigation.state.params.refresh();
						this.props.navigation.goBack();
					});
				}
			}
		})
	}

	render() {
		return (
			<View style={styles.container}>
				{this.state.isSaving &&
					<View style={styles.savingContainer}>
						<ActivityIndicator />
					</View>}
				<ScrollView style={[styles.container, { padding: 24 }]}>
					<StatusBar barStyle="light-content" />
					<View >
						<View style={styles.section}>
							<TextSpacing styles={styles.label} spacing={2}>NOMBRE</TextSpacing>
							<TextInput
								onChangeText={(value) => this.setState({ name: value })}
								value={this.state.name}
								style={styles.nameInput}
								placeholder="Nombre de la categoria"
								underlineColorAndroid="transparent" />
						</View>
						<View style={styles.section}>
							<TextSpacing styles={styles.label} spacing={2}>IMAGEN</TextSpacing>
							<View style={styles.imageContainer}>
								<RoundImage size={128} source={this.state.image} />
								<FloatingButton icon="camera" color="#3F51B5" containerStyles={styles.fabImage} />
							</View>
							<View style={styles.imageSuggestions}>
								<View style={styles.suggestionsRow}>
									{suggestions.slice(0, 5).map((image, index) => <SuggestedImage onPress={() => this.selectImage(index)} selected={this.state.suggestedImage === index} key={index} src={image} />)}
								</View>
								<View style={styles.suggestionsRow}>
									{suggestions.slice(5).map((image, index) => <SuggestedImage onPress={() => this.selectImage(index + 5)} selected={this.state.suggestedImage === index + 5} key={index + 5} src={image} />)}
									<FloatingButton icon="image" color="#3F51B5" />
								</View>
							</View>
						</View>
						<View style={styles.section}>
							<TextSpacing styles={styles.label} spacing={2}>COLOR</TextSpacing>
							<View style={styles.colors}>
								<View style={styles.colorsRow}>
									{colors.slice(0, 5).map((color, index) =>
										<Color onPress={() => this.selectColor(index)} size={32} selected={this.state.selectedColor === index} key={index} color={color} />)}
								</View>
								<View style={styles.colorsRow}>
									{colors.slice(5).map((color, index) =>
										<Color onPress={() => this.selectColor(index + 5)} size={32} selected={this.state.selectedColor === index + 5} key={index + 5} color={color} />)}
								</View>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		)
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	savingContainer: {
		flex: 1,
		position: 'absolute',
		top: 0, bottom: 0, left: 0, right: 0,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.2)'
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
