import React from 'react';
import { AppRegistry } from 'react-native';
import styles from '../styles/myStyles';
import Nav from './Nav';

const App = ()=> {
  return <Nav/>
}

AppRegistry.registerComponent('App', () => App);

export default App;
