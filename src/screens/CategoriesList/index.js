import React from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Touchable from '../../components/Touchable';
import Color from '../../components/Color';
import NoCategories from '../../components/NoCategories';
import RoundImage from '../../components/RoundImage';

const data = [
	{
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Sk-dYtFcpTxK8_8WGngbD9BJu-hsqCDbsuGhNDXLQbB1C-gx',
		name: 'Matematicas',
		color: 'red',
		tags: 3,
		photos: 10,
		key: 'math'
	},
	{
		image: 'https://us.123rf.com/450wm/picsfive/picsfive1209/picsfive120900125/15430851-close-up-of-math-formulas-on-a-blackboard.jpg?ver=6',
		name: 'Fisica',
		color: 'green',
		tags: 1,
		photos: 5,
		key: 'physics'
	}
];

export default class CategoriesList extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerRight: <Touchable onPress={() => navigation.navigate('NewCategory')}><Icon name="plus" color="#fff" size={24} style={{ paddingRight: 16 }} /></Touchable>,
			headerLeft: <Touchable><Icon name="magnify" color="#fff" size={24} style={{ paddingLeft: 16 }} /></Touchable>,
			title: 'Gallry',
			headerStyle: {
				backgroundColor: '#3F51B5',
			},
			headerTitleStyle: {
				color: '#fff',
				textAlign: 'center',
				justifyContent: 'center', alignItems: 'center', flex: 1
			}
		}
	};

	constructor(props) {
		super(props);
		this.state = {
			data,
		};
	}

	renderRow = (item) => {
		return (
			<Touchable key={item.key} onPress={() => this.props.navigation.navigate('Category', item)}>
				<View style={styles.row} >
					<RoundImage size={70} source={item.image} />
					<View style={styles.colorIndicator} >
						<Color size={16} color={item.color} />
					</View>
					<Text style={styles.rowName}>{item.name}</Text>
					<View style={styles.rowExtraInfo}>
						<Text>{item.tags} etiqueta{item.tags > 1 && 's'}</Text>
						<Text>{item.photos} foto{item.photos > 1 && 's'}</Text>
					</View>
				</View>
			</Touchable>
		);
	}

	render() {
		return (
			<View style={styles.container}>
				<StatusBar barStyle="light-content" />
				{this.state.data.length > 0 ?
					<FlatList
						data={this.state.data}
						renderItem={({ item }) => this.renderRow(item)}
						ItemSeparatorComponent={() => <View style={styles.separator} />}
						keyExtractor={item => item.key} />
					:
					<NoCategories />}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	row: {
		backgroundColor: '#fff',
		paddingVertical: 24,
		paddingHorizontal: 16,
		flexDirection: 'row',
		height: 90,
		alignItems: 'center'
	},
	rowName: {
		flex: 1,
		paddingLeft: 8,
		fontSize: 18,
	},
	rowExtraInfo: {
		justifyContent: 'center',
		alignItems: 'flex-end',
		opacity: 0.5,
	},
	colorIndicator: {
		position: 'absolute',
		bottom: 9,
		left: 62,
	},
	separator: {
		height: 1,
		flex: 1,
		marginHorizontal: 16,
		marginVertical: 2,
		backgroundColor: 'rgba(0,0,0,0.1)',
	}
});
