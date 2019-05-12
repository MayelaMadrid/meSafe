import React, { Component, useState } from 'react';
import { Image, StyleSheet, View, TextInput } from 'react-native';



export const InputImage = props => {
  const [input, setInput] = useState(undefined);
  let placeholder, img, pass;
  const onChangeInput = (text) => {
    props.handleChange(props.type, text);
    setInput(text);
  }
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
        onChangeText={(text) => onChangeInput(text)}
        value={input}
        secureTextEntry={pass}
        style={{
          height: 55,
          fontSize: 17,
          width: '80%',
          color: 'black'
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
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    color: 'black',
    borderRadius: 5
  },

  svg: {
    marginStart: 10,
    marginEnd: 3,
    width: 20,
    height: 20
  }
});
