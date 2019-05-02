import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from '../../components/Header';

export default class Home extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <View style={styles.header}>
          <Header />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {}
});
