/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import home from './HomeScreen';

import {name as appName} from './app.json';
<<<<<<< HEAD
import Register from './RegisterScreen';

AppRegistry.registerComponent(appName, () => App);
=======
import Web from './WebService';
import InforScreen from './InforScreen';
import LogoutScreen from './LogoutScreen';
AppRegistry.registerComponent(appName, () => InforScreen);
>>>>>>> 25fb367fdabe442848e1dd344dce7ef4231c4c4a
