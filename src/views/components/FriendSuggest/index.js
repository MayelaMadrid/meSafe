import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ImageUser } from '../ImageUser';

export const FriendSuggest = (props) => {
  return (
    <View style={{ width: 110, height: 160, justifyContent: "center", alignItems: "center", backgroundColor: "white", borderRadius: 5 }}>
      <ImageUser type="small"></ImageUser>
      <Text style={styles.nameUser}>Diego Payan</Text>
      <Text style={styles.description}>Zona</Text>
      <Text style={styles.descriptionCity}>gamificacion</Text>
      <TouchableOpacity
        style={styles.button}
        underlayColor="white"
      >
        {props.type === "add" ? <Text style={{ color: "white", fontFamily: 'Montserrat-Bold', fontSize: 12 }}>  Agregar </Text> : null}
      </TouchableOpacity>
    </View >
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#008deb',
    padding: 3,
    borderRadius: 7,
    color: "white"
  },
  nameUser: {
    fontSize: 13,
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
    color: "#5d5d5d"
  }
});
