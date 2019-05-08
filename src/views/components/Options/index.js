import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';


setIcon = (type) => {
  switch (type) {
    case "activity":
      return "require('..')";
    case "logout":
      return "require('..')";
    case "profile":
      return "require('..')";
    case "settings":
      return "require('..')";
  }

}

export const Options = (props) => {
  return (
    <TouchableOpacity>
      <Image source={setIcon(props.type)}></Image>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
}