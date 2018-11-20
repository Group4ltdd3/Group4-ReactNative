/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import ShoppingCart from './ShoppingCart';


const RootStack = createStackNavigator(
  {
  Home: {
    screen: HomeScreen, 
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  Detail: { 
    screen: DetailScreen,
    navigationOptions: {
      headerTitle: 'Detail'
    }
  },
  Shopping: {
    screen: ShoppingCart,
    navigationOptions: {
      headerTitle: 'Shopping Cart'
    }
  },
},
{
  initialRouteName: 'Home',
}
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}


