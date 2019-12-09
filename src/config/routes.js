import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Trending from '../screens/trending';
import repositoriosFavoritos from '../screens/repositoriosFavoritos';

export const AppTabs = createMaterialTopTabNavigator({
    Trending: {
        screen: Trending,
    },
    Favoritos: repositoriosFavoritos,
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarPosition: 'bottom',
    }),
    tabBarOptions: {
        activeTintColor:"white",
        indicatorStyle: {backgroundColor:"#dad7d6",},
        style: { backgroundColor: "#918f8e", }
    }

});

export default createAppContainer(AppTabs)