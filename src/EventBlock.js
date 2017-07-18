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
      <View style={{marginTop: 22}}>
        <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {alert("Modal has been closed.")}}
            >
           <ScrollView style={{marginTop: 22}}>
            <View style={{flex: 1, flexDirection: 'column', paddingTop: '5%'}}>
              <Image
                style={[styles.centerBlock, styles.backdrop, {height: 266, width: 400}]}
                source={{uri: event.images[0].url}}
              />
              <Text style={[styles.headline]}>{event.name}</Text>
              <View style={styles.profileBox}>
                <Text style={styles.modalHeading}> Date: </Text>
                <Text style={styles.modalInfo}> {dateFormat(event.dates.start.dateTime, 'mm/dd/yyyy')} </Text>
              </View>

              <View style={styles.profileBox}>
                <Text style={styles.modalHeading}> Time: </Text>
                <Text style={styles.modalInfo}> {dateFormat(event.dates.start.dateTime, 'h:MM TT')} </Text>
              </View>

              <View style={styles.profileBox}>
                <Text style={styles.modalHeading}> Location: </Text>
                <Text style={styles.modalInfo}> {event._embedded.venues[0].name + ' (' + event._embedded.venues[0].city.name + ', ' + event._embedded.venues[0].state.name + ')'} </Text>
              </View>

              <View style={styles.profileBox}>
                <Text style={styles.modalHeading}> Website: </Text>
                <Text style={{color: 'blue'}} onPress={() => Linking.openURL(event.url)}>{event.url}</Text>
              </View>

              <Text style={styles.modalHeading}>Co-Workers Attending:<Text style={styles.modalInfo}>1</Text></Text>

              <View style={{flex:1,flexDirection:'row',alignItems:'baseline'}}>
                <Image
                  source={require('./../imgs/rex.jpg')}
                  resizeMode='cover'
                  style={[styles.centerBlock, {borderRadius: 20, height: 50, width: 50}]}
                />
              </View>


              <View style={[styles.button,styles.centerBlock]}>
                <Button onPress={() => {}} title='Invite'/>
              </View>

              <View style={[styles.button,styles.centerBlock]}>
                <Button
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible)
                  }}
                  title='Close'
                />
              </View>

            </View>
           </ScrollView>
        </Modal>
        <TouchableOpacity onPress={() => this.setModalVisible(true)} underlayColor='white' >
          <Image
            style={[styles.centerBlock, styles.backdrop, {height: 266, width: 400}]}
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
