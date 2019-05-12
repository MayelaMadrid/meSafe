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
import IconFA from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from "./views/components/Header";
import HelpCenters from "./views/containers/Help Centers/inidex";
const TabScreenHome = createMaterialTopTabNavigator(
  {
    Momento: { screen: Home },
    Asaltos: { screen: Home },
    Robos: { screen: Home },
    Reportes: { screen: Home }

  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 11,
      },
      style: {
        backgroundColor: '#008deb',
      }
    }
  }
);
const TabScreenHelp = createMaterialTopTabNavigator(
  {
    Hospitales: { screen: HelpCenters },
    Policia: { screen: HelpCenters },
    Bomberos: { screen: HelpCenters },
    Otros: { screen: HelpCenters }

  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 11,
      },
      style: {
        backgroundColor: '#008deb',
      }
    }
  }
);
const Main = createStackNavigator(
  {
    Home: {
      screen: TabScreenHome, navigationOptions: () => ({
        headerTitle: <Header />,
      }),
    },
    Report: Report,

  });

const HelpCenter = createStackNavigator(
  {
    Ayuda: {
      screen: TabScreenHelp, navigationOptions: () => ({
        headerTitle: <Header />,
      }),
    }

  });
const newReport = createStackNavigator(
  {
    newReport: {
      screen: AddReport, navigationOptions: () => ({
        title: "Nuevo Reporte",
        headerBackTitle: "A",
        headerStyle: {
          backgroundColor: '#008deb',
          textAlign: "center"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: "center"
        },

      }),
    },
    Report: Report,

  });

const pageFriends = createStackNavigator(
  {
    Friends: {
      screen: Friends, navigationOptions: () => ({
        headerTitle: <Header />,
      }),
    },
    Profile: Profile,


  });

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Login,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="zap" size={30} color="#008deb" />
      )
    },
  },
  ADDReport: {
    screen: newReport,
    navigationOptions: {
      title: 'Details',
      tabBarLabel: "Reporte",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="plus" size={30} color="#008deb" />
      )
    }
  },
  Friends: {
    screen: pageFriends,
    navigationOptions: {
      tabBarLabel: "Mis amigos",
      tabBarIcon: ({ tintColor }) => (
        <IconFA name="human-greeting" size={30} color="#008deb" />
      )
    }
  },
  Settings: {
    screen: HambugerOptions,
    navigationOptions: {
      tabBarLabel: "Opciones",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="menu" size={30} color="#008deb" />
      )
    }
  },
  Help: {
    screen: HelpCenter,
    navigationOptions: {
      tabBarLabel: "Ayuda",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="heart" size={30} color="#008deb" />
      )
    }
  },
},

  {
    order: ['Home', 'ADDReport', "Friends", "Settings", "Help"],
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