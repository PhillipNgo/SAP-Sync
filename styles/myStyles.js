import { StyleSheet } from 'react-native';
import background1 from './../imgs/background1.jpg';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(159, 159, 159, 0.22)',
    width: 200,
    borderRadius: 20,
    marginTop: 5
  },
  'centerBlock': {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  'headingOne': {
    fontSize: 40,
    fontWeight:'600',
    color:'#2e98ee',
    textShadowColor: 'black',
    textShadowOffset: {width:1, height:1},
    textShadowRadius: 3,
  },
  'statusBar': {
    backgroundColor: '#2e98ee',
    width: '100%',
    height: '7%'
  },
  'tabBar': {
    backgroundColor: '#2e98ee',
    width: '100%',
    height: '28%'
  },
  'loginBlock': {
    marginTop: 'auto'
  },
  'loginInput': {
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    height: 40,
    width: '50%',
    borderRadius: 8,
    marginBottom: 10
  },
  backdrop: {
    marginTop: .1,
  },
  backdropView: {
    backgroundColor: 'rgba(0, 0, 0, 0.22)',
    height: 266,
    width: 400
  },
  backdropHome: {
    backgroundColor: 'rgba(235, 235, 235, 0.53)',
    height: '100%',
    width: 400
  },
  headline: {
    fontSize: 50,
    textAlign: 'center',
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {width:1, height:1},
    textShadowRadius: 3,
  },
  container: {
    paddingTop: 18
  },
  profileBox: {
    flex: 1 ,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'flex-start'
  },
  profileHeading: {
    fontSize: 28,
    fontWeight:'400'
  },
  profileInfo: {
    fontSize: 20
  },
  modalHeading: {
    fontSize: 20,
    fontWeight:'400'
  },
  modalInfo: {
    fontSize: 15
  }
});

export default styles;
