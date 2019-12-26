import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Trending from '../screens/trending';
import repositoriosFavoritos from '../screens/repositoriosFavoritos';
import RepoDetails from '../screens/repoDetails';
import UrlRepo from '../screens/UrlRepo';

export const AppTabs = createMaterialTopTabNavigator(
  {
    Trending: {
      screen: Trending,
    },
    Favoritos: repositoriosFavoritos,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarPosition: 'bottom',
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      indicatorStyle: {backgroundColor: '#dad7d6'},
      style: {backgroundColor: '#918f8e'},
    },
  },
);
export const AppNavigator = createStackNavigator(
  {
    AppTabs: {
      screen: AppTabs,
      navigationOptions: ({navigation}) => {
        return {
          header: null,
        };
      },
    },
    RepoDetails: {
      screen: RepoDetails,
      navigationOptions: ({navigation}) => {
        return {
          headerTitle: 'Detalhes do Repositório',
        };
      },
    },
    UrlRepo: {
      screen: UrlRepo,
      navigationOptions: ({navigation}) => ({
        headerTitle: navigation.getParam('name'),
      }),
    },
  },
  {
    initialRouteName: 'AppTabs',
  },
);

export default createAppContainer(AppNavigator);
