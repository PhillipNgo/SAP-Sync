import React from 'react';
import { ScrollView, TouchableOpacity, Image, AppRegistry, Alert, Text, View, Button, TextInput, NavigatorIOS } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { findEvents } from './utils/TicketMasterService';
import styles from '../styles/myStyles';
import EventBlock from './EventBlock';

class LocalEventsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasFetched: false
    };
  }

  componentDidMount() {
    findEvents('22180').then(data => {
      this.setState({
        data: data['_embedded']['events'],
        hasFetched: true
      })
    });
  }

  static navigationOptions = {
    title: 'Local Events',
  };

  render() {
    const { data, hasFetched } = this.state;
    return (
      <View style={{marginTop: 22}}>
        <ScrollView>
        { hasFetched &&
          data.map((event, index) => {
            return <EventBlock key={index} event={event} />
          })
        }
        </ScrollView>
      </View>
    );
  }
}

export default LocalEventsPage;
