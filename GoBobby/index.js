/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {registerRootComponent} from 'expo';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

// Needed for expo
// This may be commented in production
registerRootComponent(App);

// Debugger npx react-dev-tools
fetch('http://localhost:8097');
