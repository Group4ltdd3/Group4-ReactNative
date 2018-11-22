/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import DetailScreen from './DetailScreen';

import {name as appName} from './app.json';
import Web from './WebService';
import InforScreen from './InforScreen';
import LogoutScreen from './LogoutScreen';
AppRegistry.registerComponent(appName, () => InforScreen);
