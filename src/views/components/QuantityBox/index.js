import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View

} from 'react-native';

export const QuantityBox = (props) => {
  return (
    <View style={style.containerQuantity}>
      <Text style={style.letter}>
        {props.quantity}
      </Text>
      <Text style={style.letter}>
        {props.title}
      </Text>
    </View>);
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
  }
})