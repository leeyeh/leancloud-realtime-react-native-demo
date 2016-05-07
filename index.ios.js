/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Realtime } from 'leancloud-realtime';
delete global.XMLHttpRequest;

class RealtimeDemo extends Component {
  async componentDidMount() {
   this.realtime = new Realtime({
     appId: 'anruhhk6visejjip57psvv5uuv8sggrzdfl9pg2bghgsiy35',
     region: 'cn',
     noBinary: true
   });

   try {
     let client = await this.realtime.createIMClient('lee');

     this.conversation = await client.createConversation({
       members: ['yeh'],
       name: 'leeyeh',
       unique: true
     });

     console.log(this.conversation.id);
     this.conversation.on('message', (message, conv) => {
       // ...
     });
   }
   catch(err) {
     console.warn(err.message);  // 这句输出Command Timeout.
   }
 }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RealtimeDemo', () => RealtimeDemo);
