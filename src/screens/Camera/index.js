import React from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
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

	onPictureSaved = async photo => {
		await FileSystem.moveAsync({
		  from: photo.uri,
		  to: `${FileSystem.documentDirectory}photos/${Date.now()}.jpg`,
		});
		this.setState({ newPhotos: true });
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
					<View
						style={{
							position: 'absolute',
							bottom: 0,
							backgroundColor: 'rgba(0,0,0,0.5)',
							flexDirection: 'row',
							width: width,
							height: 100,
						}}>
						<TouchableOpacity
							style={{
								flex: 0.1,
								alignSelf: 'flex-end',
								alignItems: 'center',
							}}
							onPress={() => {
								this.setState({
									type: this.state.type === Camera.Constants.Type.back
										? Camera.Constants.Type.front
										: Camera.Constants.Type.back,
								});
							}}>
							<Text
								style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
								{' '}Flip{' '}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								flex: 0.1,
								alignSelf: 'flex-end',
								alignItems: 'center',
							}}
							onPress={() => {
								this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved });
							}}>
							<Text
								style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
								{' '}Take{' '}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			);
		}
	}
}