import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View

} from 'react-native';

export const QuantityBox = (props) => {
  return (
    <View style={style.containerQuantity}>
      <Text style={props.color === "blue" ? style.letter2 : props.color === "red" ? style.letter3 : style.letter}>
        {props.quantity}
      </Text>
      <Text style={props.color === "blue" ? style.letter2 : props.color === "red" ? style.letter3 : style.letter}>
        {props.title}
      </Text>
    </View >);
}

const style = StyleSheet.create({
  containerQuantity: {
    alignItems: "center",
    justifyContent: "center"
  },
  letter: {
    fontSize: 16,
    color: "white",
    fontFamily: 'Montserrat-Bold'
  },
  letter2: {
    fontSize: 12,
    color: "#008deb",
    fontFamily: 'Montserrat-Bold'
  },
  letter3: {
    fontSize: 12,
    color: "red",
    fontFamily: 'Montserrat-Bold'
  }
})