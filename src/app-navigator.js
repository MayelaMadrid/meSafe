import React, { Component } from "react";
import { Text } from "react-native";
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator } from "react-navigation";
import Login from './views/containers/Login/index';
import Home from './views/containers/Home';
import Profile from './views/containers/Profile';
import HambugerOptions from './views/containers/HambugerOptions';
import Report from './views/containers/Report';
import Friends from "./views/containers/Friends";
import AddReport from './views/containers/AddReport';
import DefaultMarkers from "./views/containers/Map";
import Icon from 'react-native-vector-icons/Feather';
import Header from "./views/components/Header";
const TabScreen = createMaterialTopTabNavigator(
  {
    Momento: { screen: Friends },
    Asaltos: { screen: Home }

  }
);
const Main = createStackNavigator(
  {
    Home: {
      screen: TabScreen, navigationOptions: () => ({
        headerTitle: <Header />,
      }),
    },
    Report: Report,

  });


const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Main,
    navigationOptions: {
      tabBarLabel: "Home Page",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="zap" size={30} color="#008deb" />
      )
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: "Profile Page",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="plus" size={30} color="#008deb" />
      )
    }
  },
},

  {
    order: ['Home', 'Profile'],
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#008deb',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'white',
      }
    },
  });



export default createAppContainer(TabNavigator);