import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Youtube from 'react-native-youtube'
//import YouTubeVideo from './YouTubeVideo'

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    fetch(`https://www.googleapis.com/youtube/v3/search/?key=AIzaSyB9nATqCVlc9EirnM_ohY0UcqhqVTVEvJM&channelId=UC-lHJZR3Gqxm24_Vd_AJ5Yw&part=snippet,id&order=date&maxResults=30`)
    .then(res => res.json())
    .then(res => {
      const videoId = res.items.map(item=>item)
      this.setState({
        data: videoId
      })
    })
    .catch(err => console.error(err))
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Still Working!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  }
});