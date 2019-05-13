import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

setIcon = (type) => {
  switch (type) {
    case "activity":
      return require('../../../utils/img/social.png');
    case "logout":
      return require('../../../utils/img/logout.png');
    case "profile":
      return require('../../../utils/img/profileIcon.png');
    case "settings":
      return require('../../../utils/img/configProfile.png');
  }

}
callNumber = (url) => {
  Linking.canOpenURL(url).then(supported => {
    if (!supported) {
    } else {
      return Linking.openURL(url);
    }
  }).catch(err => console.error('An error occurred', err));
}

export const Center = (props) => {
  return (

    <View style={{ flexDirection: "row", alignItems: "center", borderBottomColor: "#cacaca", flex: 1, borderBottomWidth: 1, borderRadius: 1, padding: 18, }}>
      <View style={{ flex: 1 }}>
        <Icon name="hospital-o" size={30} color="red" />
      </View>

      <View style={{ flex: 3 }}>
        <Text style={{
          fontFamily: 'Montserrat-SemiBold',
          fontSize: 16,
          color: "#008deb"
        }}>Cruz Roja</Text>

        <Text style={{
          fontFamily: 'Montserrat-SemiBold',
          fontSize: 13,
          color: "#5d5d5d"
        }}>Av Dr Ruperto Paliza 176, Primer Cuadro, 8000</Text>

        <Text style={{
          fontFamily: 'Montserrat-SemiBold',
          fontSize: 13,
          color: "#5d5d5d"
        }}>667 712 5868</Text>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => callNumber(`tel:667214565}`)}>

          <Icon name="phone" size={40} color="green" />
        </TouchableOpacity>

      </View>

    </View>
  );
}