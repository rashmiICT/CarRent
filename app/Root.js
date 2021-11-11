import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 'one',
    title: 'hy',
    text: 'Premium & prestige car. Get your best car in the fastest way.',
    image: require('./app/assets/Imagers/adrien-vajas-DIOJmxKCA6c-unsplash.jpg'),
  },
  {
    key: 'two',
    title: 'Choose The Car',
    text: 'Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor',
    image: require('./app/assets/Imagers/josh-berquist-_4sWbzH5fp8-unsplash.jpg'),
  },
  {
    key: 'three',
    title: 'Complete The Process',
    text: 'Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor',
    image: require('./app/assets/Imagers/serge-kutuzov-1K9-TbJWs2U-unsplash.jpg'),
  },
  {
    key: 'four',
    title: 'Get The Cars',
    text: 'Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor',
    image: require('./app/assets/Imagers/malusi-msomi-cpHZQ7zg9aQ-unsplash.jpg'),
  },
];

export default class App extends React.Component {
  state = {showHomePage: false};
  _renderItem = ({item}) => {
    return (
      <View style={{flex: 1}}>
        <Image
          source={item.image}
          style={{
            resizeMode: 'cover',
            height: '73%',
            width: '100%',
          }}
        />
        <Text
          style={{
            paddingTop: 25,
            paddingBottom: 10,
            fontSize: 28,
            fontWeight: 'bold',
            color: '#21465b',
            alignSelf: 'center',
          }}>
          {item.title}
        </Text>

        <Text
          style={{
            textAlign: 'center',
            color: '#b5b5b5',
            fontSize: 15,
            paddingHorizontal: 30,
          }}>
          {item.text}
        </Text>
      </View>
    );
  };
  render() {
    if (this.state.showHomePage) {
      return <App />;
    } else {
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          activeDotStyle={{
            backgroundColor: '#21465b',
            width: 30,
          }}
        />
      );
    }
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
