import React from 'react';
import { ScrollView, TouchableOpacity, Image, AppRegistry, Alert, Text, View, Button, TextInput, NavigatorIOS } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../styles/myStyles';
import  Nav  from './Nav';
import LocalEventsPage from './LocalEventsPage';

const App = ()=> {
  return <Nav/>
}

AppRegistry.registerComponent('App', () => App);

export default App;
