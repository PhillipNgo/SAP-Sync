import React from 'react';
import { Text, Button, Platform, ScrollView, StyleSheet, Image } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import EventsPage from './EventsPage';
import LocalEventsPage from './LocalEventsPage';
import ProfilePage from './ProfilePage';
import HomePage from './HomePage';

const Nav = DrawerNavigator(
  {
    Profile: {
      path: '/',
      screen: ProfilePage,
    },
    Local: {
      path: '/events1',
      screen: EventsPage,
    },
    InHouse: {
      path: '/events2',
      screen: LocalEventsPage,
    },
    Home: {
      path: '/Home',
      screen: HomePage,
    }
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
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
    drawerPosition: 'right'
  },
);

const styles = StyleSheet.create({
  container: {
    //marginTop: Platform.OS === 'ios' ? 20 : 0,
    height: '100%'
  },
});

export default Nav;
