import React from 'react';
import { ScrollView, View } from 'react-native';
import styles from '../styles/myStyles';
import EventBlock from './EventBlock';

//Custom Data for Company Events
const EventData = [
  {
    name: 'Morning Coffee',
    images: [{url: 'http://cdn1.medicalnewstoday.com/content/images/articles/289/289891/coffee.jpg'}],
    dates: {
      start: {
        dateTime: '2017-07-08T00:00:00Z'
      }
    },
    _embedded: {
      venues: [{
        name: 'Concur Office',
        city: {
          name: 'Vienna'
        },
        state: {
          name: 'Virginia'
        }
      }]
    },
    url: 'N/A'
  },

  {
    name: 'Happy Hour',
    images: [{url: 'https://dc8gwjuur0w0x.cloudfront.net/lists/avatars/000/000/047/original_o-PINT-GLASS-BEER-facebook.jpg?1473216955'}],
    dates: {
      start: {
        dateTime: '2017-07-18T00:00:00Z'
      }
    },
    _embedded: {
      venues: [{
        name: 'Space Bar',
        city: {
          name: 'Falls Church'
        },
        state: {
          name: 'Virginia'
        }
      }]
    },
    url: 'http://www.spcbr.com/'
  },

  {
    name: 'Burgers',
    images: [{url: 'https://hoodwork-production.s3.amazonaws.com/uploads/story_photo/image/1358/Super_Duper_burger_fries.jpg'}],
    dates: {
      start: {
        dateTime: '2017-07-12T00:00:00Z'
      }
    },
    _embedded: {
      venues: [{
        name: 'McDonalds',
        city: {
          name: 'Vienna'
        },
        state: {
          name: 'Virginia'
        }
      }]
    },
    url: 'https://www.mcdonalds.com/us/en-us.html'
  },

  {
    name: 'Pong',
    images: [{url: 'http://wallpapersdsc.net/wp-content/uploads/2015/09/Ping_Pong_HD_57.jpg'}],
    dates: {
      start: {
        dateTime: '2017-07-24T00:00:00Z'
      }
    },
    _embedded: {
      venues: [{
        name: 'Peter\'s House!!',
        city: {
          name: 'Columbia'
        },
        state: {
          name: 'Maryland'
        }
      }]
    },
    url: 'N/A'
  },

  {
    name: 'Billiards',
    images: [{url: 'https://s-media-cache-ak0.pinimg.com/originals/3c/29/a9/3c29a9c2a9a46a5dd6631cdef533170a.jpg'}],
    dates: {
      start: {
        dateTime: '2017-08-16T00:00:00Z'
      }
    },
    _embedded: {
      venues: [{
        name: 'Justin\'s Crib',
        city: {
          name: 'Silver Spring'
        },
        state: {
          name: 'Maryland'
        }
      }]
    },
    url: 'N/A'
  }
];

export default class EventsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Company Events'
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {
            EventData.map((event, index) => {
              return <EventBlock key={index} event={event} />
            })
          }
        </ScrollView>
      </View>
    );
  }
}
