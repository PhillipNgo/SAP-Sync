import React from 'react';
import { Text, Button, Platform, ScrollView, StyleSheet, Image } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import EventsPage from './EventsPage';
import ProfilePage from './ProfilePage';

const Nav = DrawerNavigator(
  {
    Profile: {
      path: '/',
      screen: ProfilePage,
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
    initialRouteName: 'Profile',
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
