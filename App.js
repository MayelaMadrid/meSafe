import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Login from './src/views/containers/Login/index';
import Home from './src/views/containers/Home';
import Profile from './src/views/containers/Profile';
import HambugerOptions from './src/views/containers/HambugerOptions';
import Report from './src/views/containers/Report';
import Friends from "./src/views/containers/Friends"
import { LabelInput } from './src/views/components/labelInput';
import AddReport from './src/views/containers/AddReport';
import DefaultMarkers from "./src/views/containers/Map";
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
