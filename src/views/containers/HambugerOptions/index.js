import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { ImageUser } from '../../components/ImageUser';



export default class HambugerOptions extends Component {

  render() {
    return (
      <View style={styles.containerHambuger}>
        <ImageBackground style={styles.containerWelcome}>
          <ImageUser type="big"></ImageUser>
          <Text>Hola</Text>
          <Text>Mayela Madrid!</Text>
        </ImageBackground>
        <View style={styles.containerOptions}>


        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  nameUser: {
    fontSize: 16,
    color: "#008deb",
    fontFamily: 'Montserrat-Bold'
  },
  description: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: "#5d5d5d"
  },
  descriptionCity: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 11,
    color: "#1c1c1c"
  }
});
