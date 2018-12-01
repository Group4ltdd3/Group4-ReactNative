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
<<<<<<< HEAD
import RegisterScreen from './RegisterScreen';
=======
import LogoutScreen from './LogoutScreen';
import InforScreen from './InforScreen';
>>>>>>> 25fb367fdabe442848e1dd344dce7ef4231c4c4a


const RootStack = createStackNavigator(
  {
    Logout: {
      screen: LogoutScreen, 
      navigationOptions: {
        headerTitle: 'Logout'
      }
    },

    Infor: {
      screen: InforScreen, 
      navigationOptions: {
        headerTitle: 'Infor'
      }
    },


    Login: {
      screen: LoginScreen, 
      
    },
  
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
  Register: {
    screen: RegisterScreen
  },
},
{
  initialRouteName: 'Logout',
}
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}


