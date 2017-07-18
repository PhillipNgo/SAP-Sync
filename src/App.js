import React from 'react';
import { ScrollView, TouchableOpacity, Image, AppRegistry, Alert, Text, View, Button, TextInput, NavigatorIOS } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../styles/myStyles';
import  Nav  from './Nav';
import { findEvents } from './utils/TicketMasterService';

class HomeScreen extends React.Component {
  static navigationOptions = {
    //title: '',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text style={[styles.headingOne, {textAlign: 'center', paddingTop: '13%'}]}>Hello, Ronald!</Text>
        <Image
          source={require('./../imgs/ronald.jpg')}
          resizeMode='cover'
          style={[styles.centerBlock, {borderRadius: 20}]}
        />
        <Button
          onPress={() => navigate('Nav')}
          title="Go"
        />
    </View>
    );
  }
}

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Nav: { screen: Nav },
});

AppRegistry.registerComponent('App', () => App);

export default App;
