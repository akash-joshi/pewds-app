import React from 'react';
import { 
  Image, 
  TouchableHighlight, 
  TouchableOpacity, 
  ScrollView, 
  StyleSheet, 
  Text, 
  View 
} from 'react-native'

import { createAppContainer, createStackNavigator } from 'react-navigation';
import YouTubeVideo from './YouTubeVideo'

class HomeStuff extends React.Component {
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
      this.setState({
        data: res.items
      })
    })
    .catch(err => console.error(err))
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    const {navigate} = this.props.navigation
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.body}>
            {this.state.data.map((item, i) => 
           	<TouchableHighlight 
              key={item.id.videoId} 
              onPress={() => navigate('YouTubeVideo', {youtubeId: item.id.videoId})}>
              <View style={styles.vids}>
                <Image 
                  source={{uri: item.snippet.thumbnails.medium.url}} 
                  style={{width: 320, height: 180}}/>
                <View style={styles.vidItems}>
                  <Image 
                    source={require('../assets/images/pewds.png')} 
                    style={{width: 40, height: 40, borderRadius: 20, marginRight: 5}}/>
                  <Text style={styles.vidText}>{item.snippet.title}</Text>
                </View>
              </View>
            </TouchableHighlight>
            )}
          </View>
        </ScrollView>
	    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 30
  },
  vids: {
    paddingBottom: 30,
    width: 320,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderBottomWidth: 0.6,
    borderColor: '#aaa'
  },
  vidItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10
  },
  vidText: {
    padding: 20,
    color: '#000'
  },
  tabBar: {
    backgroundColor: '#fff',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 0.5,
    borderColor: '#bbb'
  },
  tabItems: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5
  },
  tabTitle: {
    fontSize: 11,
    color: '#333',
    paddingTop: 4,
    textDecorationLine: 'underline'
  }
})

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeStuff,
    },
    YouTubeVideo: {
      screen: YouTubeVideo,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return <AppContainer />;
  }
}