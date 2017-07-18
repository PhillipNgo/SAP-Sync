import React from 'react';
import { ScrollView, Text, View, Button } from 'react-native';
import styles from '../styles/myStyles';
import { FormLabel, FormInput } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';

const getLocation = () => {
  const geolocation = navigator.geolocation;

  const location = new Promise((resolve, reject) => {
    if (!geolocation) {
      reject(new Error('Not Supported'));
    }

    geolocation.getCurrentPosition((position) => {
      resolve(position);
      window.alert(position);
    }, () => {
      reject (new Error('Permission denied'));
    });
  });
}

class NewEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Type Here',
      date: '07-18-2017'
    };
  }

  static navigationOptions = {
    title: 'Create A New Event',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <View style={{padding : '10%'}}>
           <Text style={[styles.headingOne, {textAlign:'center'}]}> Create a New Event </Text>
          <FormLabel>Title</FormLabel>
          <FormInput />
          <FormLabel>Date</FormLabel>
          <DatePicker
            date = {this.state.date}
            format='MM-DD-YYYY'
            confirmBtnText= 'Confirm'
            cancelBtnText= 'Cancel'
            style={{width: 300}}
            onDateChange={(date) => {this.setState({date: date})}}
           />
          <FormLabel>Description</FormLabel>
          <FormInput />
          <FormLabel>Location</FormLabel>
          <FormInput />
          <Button
            onPress={getLocation}
            title='Current Location'
          />
          <FormLabel>Groups</FormLabel>
          <FormInput />
          <View style={[styles.centerBlock, styles.button]}>
            <Button
              onPress={() => navigate('Local')}
              title='Create'
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default NewEvent;
