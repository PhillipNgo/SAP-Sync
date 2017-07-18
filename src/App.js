import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TextInput  } from 'react-native';
import styles from '../styles/myStyles';
import  Nav  from './Nav';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {
    return (
      <View>
        <View style={styles.statusBar} />
        <View style={styles.tabBar}>
          {/* <Text style={[styles.headingOne, {textAlign: 'center'}]}>
            Hello
          </Text>
        </View>

        <View style={styles.loginBlock}>
          <TextInput
            style={[styles.loginInput, styles.centerBlock]}
            onChangeText={(text) => this.setState({text})}
            placeholder='Username'
          />
          <TextInput
            style={[styles.loginInput, styles.centerBlock]}
            onChangeText={(text) => this.setState({text})}
            placeholder='Password'
          /> */}
          <Nav />
        </View>
      </View>
    );
  }
}
