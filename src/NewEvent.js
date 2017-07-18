import React from 'react';
import { ScrollView, TouchableOpacity, Image, AppRegistry, Alert,
   Text, TextInput, View, Button, NavigatorIOS,
 } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../styles/myStyles';
import  Nav  from './Nav';
import { findEvents } from './utils/TicketMasterService';
import { FormLabel, FormInput } from 'react-native-elements'

class NewEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Type Here',
    };
  }

  static navigationOptions = {
    title: 'Create A New Event',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
          <View style={{
               padding : '10%',
               borderBottomColor: '#000000',
               borderBottomWidth: 1,
               backgroundColor: 'lightblue'
             }}>
            <FormLabel>Title</FormLabel>
            <FormInput />
            <FormLabel>Date</FormLabel>
            <FormInput />
            <FormLabel>Description</FormLabel>
            <FormInput />
            <FormLabel>Location</FormLabel>
            <FormInput />
            <FormLabel>Groups</FormLabel>
            <FormInput />
            <Button
              onPress={() => navigate('Local')}
              title="Create"
            />
          </View>
    </ScrollView>
    );
  }
}

export default NewEvent;
