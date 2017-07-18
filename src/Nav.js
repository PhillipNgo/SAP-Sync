import React from 'react';
import { Text, Button, Platform, ScrollView, StyleSheet, Image } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import EventsPage from './EventsPage';

const url = 'https://scontent.xx.fbcdn.net/v/t1.0-1/p320x320/11037222_10205920297827781_3146923335721648288_n.jpg?oh=bc6fa550affbafb0b565aa523b8f6ec9&oe=5A00A82B';

const ProfileScreen = ({ navigation }) => (
  <ScrollView style={styles.container}>
    <Text>THIS IS Profile PAGE! </Text>
  </ScrollView>
);
ProfileScreen.navigationOptions = {
  drawerLabel: 'Ronald Cheng',
  drawerIcon: (()=> (
     <Image
       source={{ url}}
       style={{ width: 32, height: 32 }}
     />
   ))
};

const PlacesScreen = ({ navigation }) => (
  <ScrollView style={styles.container}>
    <Text> THIS IS Places PAGE! </Text>
  </ScrollView>
);
PlacesScreen.navigationOptions = {
  drawerLabel: 'Places',
};

const Nav = DrawerNavigator(
  {
    Profile: {
      path: '/',
      screen: ProfileScreen,
    },
    Events: {
      path: '/events',
      screen: EventsPage,
    },
    // Friends: {
    //   path: '/friends',
    //   screen: FriendsScreen,
    // },
    // Groups: {
    //   path: '/groups',
    //   screen: GroupsScreen,
    // },
    // NewEvent: {
    //   path: '/newEvent',
    //   screen: newEventScreen,
    // },
    // Setting: {
    //   path: '/setting',
    //   screen: settingScreen,
    // },
  },
  {
    initialRouteName: 'Events',
    contentOptions: {
      activeTintColor: '#2379BF',
    },
    drawerPosition: 'right'
  },
);

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
});

export default Nav;
