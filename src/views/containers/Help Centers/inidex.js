import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { ImageUser } from '../../components/ImageUser';
import { Options } from '../../components/Options';
import { Center } from '../../components/center';



export default class HelpCenters extends Component {

  render() {
    return (
      <View style={styles.containerHambuger}>

        <ScrollView style={styles.containerOptions}>
          <Center></Center>
          <Center></Center>
          <Center></Center>
          <Center></Center>


        </ScrollView>


      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerHambuger: {
    flex: 1
  },
  containerWelcome: {
    flex: 0.5,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row"
  },
  containerOptions: {
    flex: 1,
    flexDirection: "column",

  },
  nameUser: {
    fontSize: 16,
    color: "white",
    fontFamily: 'Montserrat-Bold'
  },
  description: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 22,
    color: "#008deb",
    marginBottom: 10
  },
  descriptionCity: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 11,
    color: "#1c1c1c"
  }
});
