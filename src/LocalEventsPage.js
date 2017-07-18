import React from 'react';
import { ScrollView, TouchableOpacity, Image, AppRegistry, Alert, Text, View, Button, TextInput, NavigatorIOS } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { findEvents } from './utils/TicketMasterService';
import styles from '../styles/myStyles';

class EventBlock extends React.Component {

  render() {
    const { img_url, title } = this.props;
    return (
      <TouchableOpacity onPress={this._onPressButton} underlayColor='white' >
        <Image
          style={[styles.centerBlock, styles.backdrop]}
          source={{uri: img_url}}
        >
          <View style={styles.backdropView}>
            <Text style={[styles.headline]}>{title}</Text>
          </View>
        </Image>
      </TouchableOpacity>
    )
  }
}


class LocalEventsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Useless Placeholder',
      hasFetched: false
    };
    this._onPressButton = this._onPressButton.bind(this);
  }

  componentDidMount() {
    findEvents('22180').then(data => {
      this.setState({
        data: data['_embedded']['events'],
        hasFetched: true
      })
    });
  }

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  static navigationOptions = {
    title: 'Local Events',
  };

  render() {
    const { data, hasFetched } = this.state;
    return (
      <View>
        <ScrollView>
        { hasFetched &&
          data.map((event, index) => {
            return <EventBlock key={index} title={event.name} img_url={event.images[0].url} />
          })
        }
        </ScrollView>
      </View>
    );
  }
}

export default LocalEventsPage;
