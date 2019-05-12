import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import moment from "moment";
import Geocode from "react-geocode";
import AppNavigator from "./src/app-navigator";
import { Provider } from 'react-redux';
import { store } from './store';
moment.locale('es');

export default class App extends Component {
  componentDidMount() {


    Geocode.setApiKey("AIzaSyDCTc_IuiXgVT8RmAAmyaOW4s3v3_22nlk");
  }


  render() {
    return (
      <Provider store={store}>

        <View style={styles.container}>
          <AppNavigator></AppNavigator>
        </View>
      </Provider>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
