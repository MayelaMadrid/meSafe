import React from 'react';
import { StyleSheet, Image } from 'react-native';


export const ImageUser = () => {
  return (
    <Image source={require('../../../utils/img/user.jpg')} style={styles.imageUser} ></Image>
  );
}
const styles = StyleSheet.create({
  imageUser: {
    height: 70,
    width: 70,
    borderRadius: 35
  }
});
