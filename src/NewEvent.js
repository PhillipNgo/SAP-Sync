import React from 'react';
import { ScrollView, TouchableOpacity, Image, AppRegistry, Alert,
   Text, TextInput, View, Button, NavigatorIOS,
 } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../styles/myStyles';
import  Nav  from './Nav';
import { findEvents } from './utils/TicketMasterService';
import { FormLabel, FormInput } from 'react-native-elements';
import DatePicker from 'react-native-datepicker'

class NewEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Type Here',
      date: new Date()
    };
  }
  //
  // static propTypes = {
  //       date: React.PropTypes.instanceOf(Date)
  //   }
  // static defaultProps = {
  //     date: new Date()
  // }

  static navigationOptions = {
    title: 'Create A New Event',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
          <View style={{
               padding : '10%',
             }}>
             <Text style={[styles.headingOne, {textAlign:'center'}]}> Create a New Event </Text>
            <FormLabel>Title</FormLabel>
            <FormInput />
            <FormLabel>Date</FormLabel>
            <DatePicker
              date = "2017-07-18"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
             style={{width: 300}}
             />
            <FormLabel>Description</FormLabel>
            <FormInput />
            <FormLabel>Location</FormLabel>
            <FormInput />
            <FormLabel>Groups</FormLabel>
            <FormInput />
            <View style={[styles.centerBlock, styles.button]}>
              <Button
                onPress={() => navigate('Local')}
                title="Create"
              />
            </View>
          </View>
    </ScrollView>
    );
  }
}

export default NewEvent;
