import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableHighlight,
  Image, FlatList
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { QuantityBox } from '../../components/QuantityBox';
import PublicacionHome from '../PublicacionHome';
import { ImageUser } from "../../components/ImageUser"

const data = [{ name: 'Mayela Madrid', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Culiacan", type: "Asalto", gami: "3.8" }, { name: 'Diego Payan', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Barrancos", type: "Robo", gami: "4.6" }, { name: 'Peter Bonito', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Mi casa", type: "Asalto", gami: "4.6" }, { name: 'Mayela Madrid', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Culiacan", type: "Asalto", gami: "5.0" }, { name: 'Mayela Maddrid', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Isstesin", type: "Secuestro", gami: "3.6" }, { name: 'Mayela Madrid', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Culiacan", type: "Asalto", gami: "3.6" }, { name: 'Diego Payan', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Barrancos", type: "Robo", gami: "4.6" }, { name: 'Peter Bonito', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Mi casa", type: "Asalto", gami: "4.6" }, { name: 'Mayela Madrid', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Culiacan", type: "Asalto", gami: "5.0" }, { name: 'Mayela Maddrid', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Isstesin", type: "Secuestro", gami: "3.6" }];
export default class Profile extends Component {
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 15,
          marginLeft: "14%"
        }}
      />
    );
  };
  render() {

    return (
      <View style={styles.containerProfile}>
        <ImageBackground style={styles.linearGradient} source={require("../../../utils/img/Blood.png")}>
          <View style={styles.settingsPart}>
            <Image source={require("../../../utils/img/settings.png")} style={{ width: 25, height: 25 }} />
            <Text style={styles.nameUser}>Mi perfil</Text>
            <Image source={require("../../../utils/img/settings.png")} style={{ width: 25, height: 25 }}></Image>
          </View>
          <View style={{ flex: 3, justifyContent: "flex-end", alignItems: "center" }}>
            <ImageUser></ImageUser>
            <Text style={styles.nameUser}> Mi nombre</Text>
          </View>

          <View style={styles.quantityBox}>
            <QuantityBox quantity={10} title={"amigos"} ></QuantityBox>
            <QuantityBox quantity={20} title={"positivos"} ></QuantityBox>
            <QuantityBox quantity={50} title={"negativos"} ></QuantityBox>
          </View>
        </ImageBackground>
        <View style={{ flex: 2, marginLeft: 35 }}>
          <FlatList
            style={{ flex: 1 }}
            contentContainerStyle={{ borderRadius: 5 }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal={false}
            data={data}
            renderItem={({ item }) => <PublicacionHome style={{ borderRadius: 5 }} object={item} ></PublicacionHome>}
            ItemSeparatorComponent={this.renderSeparator}
          /></View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column"
  },
  containerProfile: {
    flex: 1
  },
  quantityBox: {
    flex: 2,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row"
  },
  settingsPart: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15

  },
  nameUser: {
    fontSize: 18,
    color: "white",
    fontFamily: 'Montserrat-Bold'
  },
})
