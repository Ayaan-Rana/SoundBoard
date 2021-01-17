
import React, { Component } from 'react';
import { View, Button, Alert, TouchableOpacity, Text } from 'react-native';
import { Audio } from 'expo-av';

export default class App extends Component {
  async playSound(url) {
    await Audio.setIsEnabledAsync(true)
    var playbackObject = await Audio.Sound.createAsync(
      { uri: url },

      { shouldPlay: true }
    );
  }
  render() {
    return (
      <View>


        <View>
          <TouchableOpacity
            style={{
              marginTop: 100,
              marginLeft: 10,
              alignItems: 'center',
              justifyContent: 'center',
              width: 150,
              height: 50,
              backgroundColor: 'red',
              borderWidth: 5,
              borderRadius: 20,
            }}
            onPress={() => {
                var url = 'https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/rock-guitar-music-bed_z1y16Brd_NWM.mp3';
                this.playSound(url);
              }}>
              
              <Text>Sound 1</Text>

            </TouchableOpacity>
        </View>




        <View>
          <TouchableOpacity
            style={{
              marginTop: 100,
              marginLeft: 10,
              alignItems: 'center',
              justifyContent: 'center',
              width: 150,
              height: 50,
              backgroundColor: 'yellow',
              borderWidth: 5,
              borderRadius: 20,
            }}
            onPress={() => {
                var url = 'http://animal-sounds.org/Air/Bird%20chirps%20animals140.wav';
                this.playSound(url);
              }}>
              
              <Text>Sound 3</Text>

            </TouchableOpacity>
        </View>




        <View>
          <TouchableOpacity
            style={{
              marginTop: 100,
              marginLeft: 10,
              alignItems: 'center',
              justifyContent: 'center',
              width: 150,
              height: 50,
              backgroundColor: 'blue',
              borderWidth: 5,
              borderRadius: 20,
            }}
            onPress={() => {
                var url = 'http://onj3.andrelouis.com/phonetones/unzipped/Alcatel%20Idol%20X/ringtones/Sunny%20Day.mp3';
                this.playSound(url);
              }}>
              
              <Text>Sound 5</Text>

            </TouchableOpacity>
        </View>



        <View>
          <TouchableOpacity
            style={{
              marginTop: 100,
              marginLeft: 10,
              alignItems: 'center',
              justifyContent: 'center',
              width: 150,
              height: 50,
              backgroundColor: 'brown',
              borderWidth: 5,
              borderRadius: 20,
            }}
            onPress={() => {
                var url = 'http://onj3.andrelouis.com/phonetones/unzipped/Alcatel%20Idol%20X/ringtones/Woodwork.mp3';
                this.playSound(url);
              }}>
              
              <Text>Sound 7</Text>

            </TouchableOpacity>
        </View>










        <View>
          <TouchableOpacity
            style={{
              marginTop: 100,
              marginLeft: 55,
              alignItems: 'center',
              justifyContent: 'center',
              width: 300,
              height: 70,
              backgroundColor: 'grey',
              borderWidth: 5,
              borderRadius: 20,
            }}
            onPress={() => {
                Audio.setIsEnabledAsync(false);
              }}>
              
              <Text>Stop Sound</Text>

            </TouchableOpacity>
        </View>








        <View>
          <TouchableOpacity
            style={{
              marginTop: -670,
              marginLeft: 250,
              alignItems: 'center',
              justifyContent: 'center',
              width: 150,
              height: 50,
              backgroundColor: 'orange',
              borderWidth: 5,
              borderRadius: 20,
            }}
            onPress={() => {
                var url = 'http://onj3.andrelouis.com/phonetones/unzipped/Alcatel%20Idol%20X/ringtones/Gene.mp3';
                this.playSound(url);
              }}>
              
              <Text>Sound 2</Text>

            </TouchableOpacity>
        </View>




        <View>
          <TouchableOpacity
            style={{
              marginTop: -520,
              marginLeft: 250,
              alignItems: 'center',
              justifyContent: 'center',
              width: 150,
              height: 50,
              backgroundColor: 'green',
              borderWidth: 5,
              borderRadius: 20,
            }}
            onPress={() => {
                var url = 'http://onj3.andrelouis.com/phonetones/unzipped/Nokia/N95/visualradiostartsound.wav';
                this.playSound(url);
              }}>
              
              <Text>Sound 4</Text>

            </TouchableOpacity>
        </View>


        <View>
          <TouchableOpacity
            style={{
              marginTop: -370,
              marginLeft: 250,
              alignItems: 'center',
              justifyContent: 'center',
              width: 150,
              height: 50,
              backgroundColor: 'teal',
              borderWidth: 5,
              borderRadius: 20,
            }}
            onPress={() => {
                var url = 'http://onj3.andrelouis.com/phonetones/unzipped/Meizu%20MX4/notifications/Tunnel.mp3';
                this.playSound(url);
              }}>
              
              <Text>Sound 6</Text>

            </TouchableOpacity>
        </View>


        <View>
          <TouchableOpacity
            style={{
              marginTop: -220,
              marginLeft: 250,
              alignItems: 'center',
              justifyContent: 'center',
              width: 150,
              height: 50,
              backgroundColor: 'purple',
              borderWidth: 5,
              borderRadius: 20,
            }}
            onPress={() => {
                var url = 'http://onj3.andrelouis.com/phonetones/unzipped/Meizu%20MX4/notifications/Empire.mp3';
                this.playSound(url);
              }}>
              
              <Text>Sound 8</Text>

            </TouchableOpacity>
        </View>
        

      </View>
    );
  }
}
