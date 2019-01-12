import React from 'react'
import { WebView } from 'react-native-gesture-handler';

export default class YouTubeVideo extends React.Component{
    static navigationOptions = {

        header: null,
      };

    render() {
        return (
        <WebView
            javaScriptEnabled={true} 
            source={{uri: `https://www.youtube.com/embed/${this.props.navigation.state.params.youtubeId}?rel=0?rel=0&autoplay=0&showinfo=0`}}
            style={{flex:1}}
        />
        )
    }
}