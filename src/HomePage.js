import React from 'react';
import { Image, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../styles/myStyles';

class HomePage extends React.Component {
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
            <Text style={[styles.headingOne, {textAlign: 'center', paddingTop: '13%'}]}>SAP SYNC</Text>
            <Image
              source={require('./../imgs/ronald.jpg')}
              style={[styles.centerBlock, {borderRadius: 20}]}
            />
            <View style={[styles.button,styles.centerBlock]}>
              <Button
                onPress={() => navigate('Local')}
                title='In-House Events'
              />
            </View>
            <View style={[styles.button,styles.centerBlock]}>
              <Button
                onPress={() => navigate('InHouse')}
                title='Local Events'
              />
            </View>
          </View>
        </Image>
    </View>
    );
  }
}

export default HomePage;
