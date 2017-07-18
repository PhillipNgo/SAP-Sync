import React from 'react';
import { Modal, ScrollView, TouchableOpacity, Image, Text, View, Button, Linking } from 'react-native';
import styles from '../styles/myStyles';
import dateFormat from 'dateformat';

class EventBlock extends React.Component {
  state = {
    modalVisible: false
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { event } = this.props;
    return (
      <View>
        <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {alert("Modal has been closed.")}}
            >
           <View style={{marginTop: 22}}>
            <View>
              <Image
                style={[styles.centerBlock, styles.backdrop]}
                source={{uri: event.images[0].url}}
              />
              <Text style={[styles.headline]}>{event.name}</Text>
              <Text>Date: {dateFormat(event.dates.start.dateTime, 'mm/dd/yyyy')}</Text>
              <Text>Time: {dateFormat(event.dates.start.dateTime, 'h:MM TT')}</Text>
              <Text>Location: {event._embedded.venues[0].name + ' (' + event._embedded.venues[0].city.name + ', ' + event._embedded.venues[0].state.name + ')'}</Text>
              <Text>Website: <Text style={{color: 'blue'}} onPress={() => Linking.openURL(event.url)}>{event.url}</Text></Text>
              <Text>Co-Workers Attending: 1</Text>
              <Image
                source={require('./../imgs/rex.jpg')}
                resizeMode='cover'
                style={[styles.centerBlock, {borderRadius: 20, height: 50, width: 50}]}
              />
              <Text>Rex Ledesma</Text>
              <Button onPress={() => {}} title='Invite'/>
              <Button
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                }}
                title='Close'
              />
            </View>
           </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setModalVisible(true)} underlayColor='white' >
          <Image
            style={[styles.centerBlock, styles.backdrop]}
            source={{uri: event.images[0].url}}
          >
            <View style={styles.backdropView}>
              <Text style={[styles.headline]}>{event.name}</Text>
            </View>
          </Image>
        </TouchableOpacity>
      </View>
    )
  }
}

export default EventBlock;
