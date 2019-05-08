import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Login from './src/views/containers/Login/index';
import Home from './src/views/containers/Home';
import Profile from './src/views/containers/Profile';
import Friends from './src/views/containers/Friends';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Friends></Friends>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
