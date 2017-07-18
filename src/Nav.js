import React from 'react';
import { Text, Button, Platform, ScrollView, StyleSheet, Image } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import EventsPage from './EventsPage';
import ProfilePage from './ProfilePage';
import LocalEventsPage from './LocalEventsPage';
import HomePage from './HomePage';
import NewEvent from './NewEvent';

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
    NewEvent: {
      path: '/New',
      screen: NewEvent,
    },
    ' ':{
      path :'/empty',
      screen: HomePage
    },
    Home: {
      path: '/Home',
      screen: HomePage,
    }
  },
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
    drawerPosition: 'right'
  },
);

export default Nav;
