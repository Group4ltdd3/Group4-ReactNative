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
<<<<<<< HEAD
  initialRouteName: 'Login',
=======
  initialRouteName: 'Detail',
>>>>>>> 134244c9494100b6d47cecaab9f5d028107684b6
}
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}


