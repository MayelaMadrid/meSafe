import React from 'react';
import { StyleSheet, Image } from 'react-native';


export const ImageUser = (props) => {
  return (
    <Image source={require('../../../utils/img/user.jpg')} style={props.type === "small" ? styles.imageUser : styles2.imageUser} ></Image>
  );
}
const styles = StyleSheet.create({
  imageUser: {
    height: 70,
    width: 70,
    borderRadius: 35
  }
});
const styles2 = StyleSheet.create({
  imageUser: {
    height: 90,
    width: 90,
    borderRadius: 45
  }
});