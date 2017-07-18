import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const primaryColor = '#2379BF';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{width:'100%', height:'5%', backgroundColor:primaryColor}} />
        <View style={{width:'100%', height:'10%', backgroundColor:primaryColor}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center'
  },
});
