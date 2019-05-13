import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ImageUser } from '../../components/ImageUser';
import IconFA from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default class PublicacionHome extends Component {
  setIcon = (type) => {
    switch (type) {
      case "Reporte Ciudadano":
        return "alert-outline";
      case "Robo":
        return "kabaddi";
      case "Asalto":
        return "knife";

    }

  }
  setGami = (pos, neg) => {
    if (pos > neg) {
      return (
        <View style={{ borderRadius: 30, width: "100%", height: "42%", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <Text style={{
            color: "#5d5d5d",
            fontFamily: 'Montserrat-Bold', fontSize: 12, color: "blue"
          }}>
            {pos}
          </Text>
          <Icon name="thumbs-up" style={{ height: 15, width: 15, marginLeft: 5, color: "blue" }}></Icon>
        </View>);
    } else {
      return (
        <View style={{ borderRadius: 30, width: "100%", height: "42%", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <Text style={{
            color: "#5d5d5d",
            fontFamily: 'Montserrat-Bold', fontSize: 12, color: "red"

          }}>
            {neg}
          </Text>
          <Icon name="thumbs-down" style={{ color: "red", marginLeft: 5, height: 15, width: 15 }}></Icon>
        </View>);
    }
  }
  render() {
    const item = this.props.object;
    console.log(item);
    return (
      <TouchableOpacity onPress={() => {
        this.props.navigation.navigate('Report', {
          itemId: item.id
        });
      }}>
        <View style={{ width: "90%", height: 220, justifyContent: "center", alignItems: "center", borderRadius: 5 }}>
          <Image style={{ width: "100%", height: "60%" }} source={require('../../../utils/img/home.png')}></Image>
          <View style={{ backgroundColor: 'white', width: "100%", height: "40%", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <ImageUser type="small" />
            <View style={{ width: "50%", height: "100%", justifyContent: "space-around", alignItems: "flex-start", marginStart: 5 }}>
              <Text style={styles.nameUser}>
                {item.nombreUsuario}
              </Text>
              <Text numberOfLines={7} style={styles.description}>
                {item.descripcion}
              </Text>
              <Text style={styles.descriptionCity}>{item.latitud}</Text>
            </View>
            <View style={{ width: "20%", height: "100%", justifyContent: "space-evenly", alignItems: "center" }}>
              <View style={{ borderColor: "red", width: "100%", borderWidth: 1, borderRadius: 30, height: "38%", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <IconFA name={setIcon(item.tipoReporte)} style={{ height: 15, width: 15 }} />
                <Text style={{ fontSize: 11 }}>
                  {this.props.type}
                </Text>
              </View>

              {this.setGami(item.positivos, item.negativos)}

            </View>
          </View>

        </View>
      </TouchableOpacity>
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
