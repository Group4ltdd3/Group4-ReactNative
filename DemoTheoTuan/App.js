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
import LoginScreen from './LoginScreen';
import LogoutScreen from './LogoutScreen';
import InforScreen from './InforScreen';
import RegisterScreen from './RegisterScreen';


const RootStack = createStackNavigator(
  {
    Logout: {
      screen: LogoutScreen,
    },

    Infor: {
      screen: InforScreen, 
    },


    Login: {
      screen: LoginScreen, 
      
    },
  
  Home: {
    screen: HomeScreen, 
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
  Register: {
    screen: RegisterScreen
  },
},
{
  initialRouteName: 'Login',
}
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}


