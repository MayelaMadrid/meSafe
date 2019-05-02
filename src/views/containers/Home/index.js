import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from '../../components/Header';

export default class Home extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'blue', flex: 1 }}>
        <Header />
      </View>
    );
  }
}
const styles = StyleSheet.create({});
