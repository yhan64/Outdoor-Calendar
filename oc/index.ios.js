import { Navigation } from 'react-native-navigation';
import Example from './src/example';

console.ignoredYellowBox = ['Remote debugger'];

Navigation.registerComponent('Example', () => Example);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'Example',
    title: 'WixCal',
  },
  appStyle: {
    navBarBackgroundColor: '#00adf5',
    navBarTextColor: 'white',
    navBarButtonColor: '#ffffff',
    statusBarTextColorScheme: 'light'
  }
});