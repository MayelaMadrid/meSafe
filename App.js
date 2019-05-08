import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Login from './src/views/containers/Login/index';
import Home from './src/views/containers/Home';
import Profile from './src/views/containers/Profile';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Profile></Profile>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
