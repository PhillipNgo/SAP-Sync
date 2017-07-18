import React from 'react';
import { Text, Button, Platform, ScrollView, StyleSheet, Image, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import EventsPage from './EventsPage';
import styles from '../styles/myStyles';
import { SocialIcon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


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
      <ScrollView style = {{backgroundColor: 'powderblue'}}>
        <Text style={[{textAlign: 'center', paddingTop: '10%'}]}>Ronald Cheng</Text>
        <Image
          source={require('./../imgs/ronald.jpg')}
          resizeMode='cover'
          style={[styles.centerBlock, {borderRadius: 20}]}
        />
        <View style={{flex: 1, flexDirection: 'column', paddingTop: '5%'}}>
         <View style={{ height: 50, width : 500, backgroundColor: 'powderblue'}} >
           <Text> Title: Intern </Text>
         </View>
         <View style={{ height: 50, width : 500, backgroundColor: 'powderblue'}} >
           <Text> Interest: Basketball </Text>
         </View>
         <View style={{ height: 50, width : 500, backgroundColor: 'powderblue'}} >
           <Text> Office: Vienna </Text>
         </View>
         <View style={{ height: 50, width : 500, backgroundColor: 'powderblue'}} >
           <Text> Team: R&D </Text>
         </View>
         <View style={{ height: 50, width : 500, backgroundColor: 'powderblue'}} >
           <Text> Groups: </Text>
         </View>
         <View style={{ height: 50, width : 500, backgroundColor: 'powderblue'}} >
           <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
              Login with Facebook
            </Icon.Button>
         </View>
         {/* <View>
           <SocialIcon
            type='twitter'
            />
         </View> */}
       </View>
     </ScrollView>
    );
  }
};
