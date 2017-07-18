import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import './../styles/myStyles.less';

const primaryColor = '#2379BF';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <View style={{width:'100%', height:'5%', backgroundColor:primaryColor}} />
        <View style={{width:'100%', height:'10%', backgroundColor:primaryColor}} />
      </View>
    );
  }
}
