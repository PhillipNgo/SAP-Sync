import React from 'react';
import { ScrollView, TouchableOpacity, Image, AppRegistry, Alert, Text, View, Button, TextInput, NavigatorIOS } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../styles/myStyles';
import  Nav  from './Nav';
import { findEvents } from './utils/TicketMasterService';

class HomePage extends React.Component {
  static navigationOptions = {
    //title: '',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image
          source={require('./../imgs/background2.jpg')}
          resizeMode='cover'
          style={[styles.centerBlock, styles.backdrop]}
        >
          <View style={styles.backdropHome}>
            <Text style={[styles.headingOne, {textAlign: 'center', paddingTop: '13%'}]}>Hello, Ronald!</Text>
            <Image
              source={require('./../imgs/ronald.jpg')}
              style={[styles.centerBlock, {borderRadius: 20}]}
            />
            <View style={[styles.button,styles.centerBlock]}>
              <Button
                onPress={() => navigate('Local')}
                title="Local"
              />
            </View>
            <View style={[styles.button,styles.centerBlock]}>
              <Button
                onPress={() => navigate('InHouse')}
                title="In-House"
              />
            </View>
          </View>
        </Image>
    </View>
    );
  }
}

export default HomePage;
