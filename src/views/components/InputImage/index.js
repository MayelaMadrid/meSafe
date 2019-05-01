import React, { Component } from 'react';
import { Image, StyleSheet, View, TextInput } from 'react-native';

export const InputImage = props => {
  let placeholder, img, pass;

  if (props.type === 'user') {
    placeholder = 'Usuario';
    pass = false;
    img = require('../../../utils/img/man-user.png');
  }
  if (props.type === 'pass') {
    placeholder = 'Contraseña';
    img = require('../../../utils/img/house-key.png');
    pass = true;
  }
  return (
    <View style={styles.iptlogin}>
      <Image source={img} style={styles.svg} />
      <TextInput
        placeholder={placeholder}
        secureTextEntry={pass}
        style={{
          height: 55,
          fontSize: 17,
          width: '80%',
          color: 'black',
          opacity: 6
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iptlogin: {
    width: 300,
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    color: 'black'
  },

  svg: {
    marginStart: 10,
    marginEnd: 3,
    width: 20,
    height: 20
  }
});
