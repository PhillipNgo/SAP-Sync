import React from 'react';
import { Text, Button, Platform, ScrollView, StyleSheet } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

const ProfileScreen = ({ navigation }) => (
  <ScrollView style={styles.container}>
    <Text>THIS IS Profile PAGE! </Text>
  </ScrollView>
);
ProfileScreen.navigationOptions = {
  drawerLabel: 'View My Profile',
   drawerIcon:
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
    Places: {
      path: '/places',
      screen: PlacesScreen,
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
      activeTintColor: '#e91e63',
    },
  }
);

const styles = StyleSheet.create({
  container: {
    //marginTop: Platform.OS === 'ios' ? 20 : 0,
    height: '100%'
  },
});

export default Nav;
