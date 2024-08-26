import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {MappApp} from './src/MapApp';

AppRegistry.registerComponent(appName, () => MappApp);
