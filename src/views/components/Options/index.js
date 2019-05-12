import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';


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

export const Options = (props) => {
  return (
    <TouchableOpacity>
      <View style={{ flexDirection: "row", alignItems: "center", borderBottomColor: "#cacaca", borderBottomWidth: 1, borderRadius: 1, padding: 18, }}>
        <Image style={{ width: 50, height: 50 }} source={setIcon(props.type)}></Image>
        <View style={{ marginLeft: 30 }}>
          <Text style={{
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 20,
            color: "#008deb"
          }}>{props.title}</Text>
        </View>

      </View>

    </TouchableOpacity>
  );
}