import { createStackNavigator } from 'react-navigation';
import CategoriesList from './src/screens/CategoriesList';
import NewCategory from './src/screens/NewCategory';
import Category from './src/screens/Category';
import CameraScreen from './src/screens/Camera';
import ImageViewer from './src/screens/ImageViewer';

//Blue color #3F51B5

export default createStackNavigator(
	{
		CategoriesList: { screen: CategoriesList },
		Category: { screen: Category },
		NewCategory: { screen: NewCategory },
		Camera: { screen: CameraScreen },
		ImageViewer: { screen: ImageViewer },
	},
	{
		initialRouteName: 'CategoriesList',
	}
);