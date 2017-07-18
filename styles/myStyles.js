import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  'centerBlock': {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  'headingOne': {
    fontSize: 40
  },
  'statusBar': {
    backgroundColor: '#2379BF',
    width:'100%',
    height:'7%'
  },
  'tabBar': {
    backgroundColor: '#2379BF',
    width:'100%',
    height:'28%'
  },
  'loginBlock': {
    marginTop: 'auto'
  },
  'loginInput': {
    textAlign:'center',
    borderWidth:1,
    borderColor: 'gray',
    height: 40,
    width: '50%',
    borderRadius: 8,
    marginBottom: 10
  }
});

export default styles;
