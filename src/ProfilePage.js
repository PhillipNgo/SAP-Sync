import React from 'react';
import { Text, Button, Platform, ScrollView, StyleSheet, Image, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import EventsPage from './EventsPage';
import styles from '../styles/myStyles';


export default class ProfilePage extends React.Component {

  static navigationOptions = {
    drawerLabel: 'Ronald Cheng',
    drawerIcon: (()=> (
       <Image
         source={require('./../imgs/ronald.jpg')}
         style={{ width: 32, height: 32 }}
       />
     ))
  };

  render(){
    return (
      <View style={styles.container}>
        <ScrollView style={{height:'100%'}}>
          <Text style={[{textAlign: 'center'}, styles.headingOne]}>Ronald Cheng</Text>
          <Image
            source={require('./../imgs/ronald.jpg')}
            resizeMode='cover'
            style={[styles.centerBlock, {borderRadius: 20}]}
          />
          <View style={{flex: 1, flexDirection: 'column', paddingTop: '5%'}}>
            <View style={styles.profileBox}>
              <Text style={styles.profileHeading}> Title:</Text>
              <Text style={styles.profileInfo}> Intern </Text>
            </View>
            <View style={styles.profileBox}>
              <Text style={styles.profileHeading}> Interests:</Text>
              <Text style={styles.profileInfo}> Long walks on the beach </Text>
            </View>
            <View style={styles.profileBox}>
              <Text style={styles.profileHeading}> Office:</Text>
              <Text style={styles.profileInfo}> Vienna </Text>
            </View>
            <View style={styles.profileBox}>
              <Text style={styles.profileHeading}> Team:</Text>
              <Text style={styles.profileInfo}> R&D </Text>
            </View>
         </View>
       </ScrollView>
      </View>
    );
  }
};
