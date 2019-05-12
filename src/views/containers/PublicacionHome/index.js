import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { ImageUser } from '../../components/ImageUser';


export default class PublicacionHome extends Component {

  render() {
    const item = this.props.object;
    return (
      <View style={{ backgroundColor: 'pink', width: "90%", height: 220, justifyContent: "center", alignItems: "center", borderRadius: 5 }}>
        <Image style={{ width: "100%", height: "60%" }} source={require('../../../utils/img/home.png')}></Image>
        <View style={{ backgroundColor: 'white', width: "100%", height: "40%", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <ImageUser type="small" />
          <View style={{ width: "50%", height: "100%", justifyContent: "space-around", alignItems: "flex-start", marginStart: 5 }}>
            <Text style={styles.nameUser}>
              {item.name}
            </Text>
            <Text numberOfLines={7} style={styles.description}>
              {item.description}
            </Text>
            <Text style={styles.descriptionCity}>{item.place}</Text>
          </View>
          <View style={{ width: "20%", height: "100%", justifyContent: "space-evenly", alignItems: "center" }}>
            <View style={{ borderColor: "red", width: "100%", borderWidth: 1, borderRadius: 30, height: "38%", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <Image source={require('../../../utils/img/fighting.png')} style={{ height: 15, width: 15, borderRadius: 35 }} ></Image>
              <Text style={{ fontSize: 11 }}>
                {item.type}
              </Text>
            </View>
            <View style={{ borderRadius: 30, width: "100%", height: "42%", justifyContent: "center", alignItems: "center" }}>
              <Text style={{
                color: "#5d5d5d",
                fontFamily: 'Montserrat-Bold', fontSize: 12
              }}>
                {item.gami}
              </Text>
              <Image source={require('../../../utils/img/reliability3.png')} style={{ height: 20, width: 20 }} ></Image>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  nameUser: {
    fontSize: 16,
    color: "#008deb",
    fontFamily: 'Montserrat-Bold'
  },
  description: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: "#5d5d5d"
  },
  descriptionCity: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 11,
    color: "#1c1c1c"
  }
});
