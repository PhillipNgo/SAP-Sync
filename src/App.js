import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../styles/myStyles';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <View style={styles['status-bar']} />
        <View style={styles['status-bar']} />
      </View>
    );
  }
}
