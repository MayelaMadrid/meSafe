import React, { Component, useState } from 'react';
import { Image, StyleSheet, View, TextInput, Text, Picker, Button } from 'react-native';
import DatePicker from 'react-native-datepicker'

import moment from "moment";


export const LabelInput = props => {
  return (
    <View style={{
      backgroundColor: "white",
      alignItems: 'center',
      justifyContent: "space-around",
      marginBottom: 5,
      flexDirection: 'row',
      color: 'black',
      borderRadius: 5,
      width: "90%", height: props.type === "area" ? "auto" : 60
    }}>
      <Text style={{
        color: "#008deb",
        fontFamily: 'Montserrat-Bold',
        width: "40%",
        fontSize: 15,
        textAlign: "right"
      }} >{props.title}:</Text>
      <TextInput
        multiline={props.type === "area" ? true : false}
        style={{
          width: "55%",
          fontSize: 16,
          color: 'black'
        }}
      />
    </View >
  );
};


export const DatePickerINput = props => {
  const [showDate, setShowDate] = useState("");
  return (
    <View style={{
      backgroundColor: "white",
      alignItems: 'center',
      justifyContent: "space-around",
      marginBottom: 5,
      flexDirection: 'row',
      color: 'black',
      borderRadius: 5,
      width: "90%", height: props.type === "area" ? "35%" : 60
    }}>
      <Text style={{
        color: "#008deb",
        fontFamily: 'Montserrat-Bold',
        width: "40%",
        fontSize: 15,
        textAlign: "center"
      }} >{props.title}:</Text>
      <DatePicker
        style={{ width: "58%", borderWidth: 0 }}
        date={showDate}
        mode="datetime"
        placeholder="select date"
        format="DD/MM/YYYY h:mm"
        minDate="25/08/2018"
        maxDate={moment(new Date()).format('DD/MM/YYYY h:mm')}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 30
          }
        }}
        onDateChange={(date) => { setShowDate(date) }}
      />
    </View>
  );
};

export const LugarInput = props => {
  const [showInput, setShowInput] = useState("");
  return (
    <View style={{
      backgroundColor: "white",
      alignItems: 'center',
      justifyContent: "space-around",
      marginBottom: 5,
      flexDirection: 'row',
      color: 'black',
      borderRadius: 5,
      width: "90%", height: props.type === "area" ? "35%" : 60
    }}>
      <Text style={{
        color: "#008deb",
        fontFamily: 'Montserrat-Bold',
        width: "40%",
        fontSize: 15,
        textAlign: "center"
      }} >{props.title}:</Text>
      <Picker
        selectedValue={showInput}
        style={{ width: "60%", }}
        onValueChange={(itemValue, itemIndex) =>
          setShowInput(itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>

    </View >
  );
};

const styles = StyleSheet.create({
  iptlogin: {
    backgroundColor: "white",
    alignItems: 'center',
    flexDirection: 'row',
    color: 'black',
    borderRadius: 5
  },

  svg: {

  }
});
