import React from 'react';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Camera, Permissions } from 'expo';

const { width } = Dimensions.get('window');

export default class CameraScreen extends React.Component {
	state = {
		hasCameraPermission: null,
		type: Camera.Constants.Type.back,
	};

	static navigationOptions = {
		header: null,
	}

	async componentWillMount() {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasCameraPermission: status === 'granted' });
	}

	takePicture = async () => {
		if (this.camera) {
			const photo = await this.camera.takePictureAsync({ base64: true });
			this.saveImage(photo.base64);
		}
	};

	saveImage = (base64) => {
		AsyncStorage.getItem('categories', (error, result) => {
			if (!error) {
				if (result) {
					const date = Date.now();
					const data = JSON.parse(result);
					console.log(data);
					const category = data.filter(category => category.name = this.props.navigation.getParam('name'))[0];
					category.photos.push(date);
					AsyncStorage.setItem(date, `data:image/gif;base64,${base64}`)
					AsyncStorage.setItem('categories', JSON.stringify(data));
					this.props.navigation.state.params.refresh();
					this.props.navigation.goBack();
				}
			}
		});
	}

	onPictureSaved = async photo => {
		await FileSystem.moveAsync({
			from: photo.uri,
			to: `${FileSystem.documentDirectory}photos/${this.props.nagivation.getParam('name')}/${Date.now()}.jpg`,
		});
	}

	render() {
		const { hasCameraPermission } = this.state;
		if (hasCameraPermission === null) {
			return <View />;
		} else if (hasCameraPermission === false) {
			return <Text>No access to camera</Text>;
		} else {
			return (
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
					<Camera
						ref={ref => this.camera = ref}
						style={{ width: width, height: width * 16 / 9 }}
						ratio="16:9"
						type={this.state.type} />
					<View style={styles.backButton}>
						<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
							<Icon name="chevron-left" color="#fff" size={32} />
						</TouchableOpacity>
					</View>
					<View style={styles.buttons}>
						<TouchableOpacity onPress={this.takePicture}>
							<Icon name="camera" color="#fff" size={32} />
						</TouchableOpacity>
					</View>
				</View>
			);
		}
	}
}

const styles = StyleSheet.create({
	backButton: {
		position: 'absolute',
		top: 0,
		backgroundColor: 'rgba(0,0,0,0.5)',
		flexDirection: 'row',
		width: width,
		height: 86,
		alignItems: 'flex-end',
		paddingLeft: 16,
		paddingBottom: 8,
	},
	buttons: {
		position: 'absolute',
		bottom: 0,
		backgroundColor: 'rgba(0,0,0,0.5)',
		flexDirection: 'row',
		width: width,
		height: 100,
		alignItems: 'center',
		justifyContent: 'space-around'
	}
});