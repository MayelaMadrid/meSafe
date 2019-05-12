import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { ImageUser } from '../../components/ImageUser';
import { Options } from '../../components/Options';



export default class HambugerOptions extends Component {
  returnAuth = (val) => {
    if (val) {
      this.props.navigation.navigate('Auth');
    }
  }

  render() {
    return (
      <View style={styles.containerHambuger}>
        <ImageBackground source={require("../../../utils/img/Blood.png")} style={styles.containerWelcome}>
          <ImageUser type="big"></ImageUser>
          <View style={{ paddingRight: 35 }}>
            <Text style={styles.description}>Hola,</Text>
            <Text style={styles.nameUser}>Mayela Madrid!!</Text>
          </View>
        </ImageBackground>
        <ScrollView style={styles.containerOptions}>

          <Options style={{ flexGrow: 1 }} type="profile" title="Mi perfil"></Options>
          <Options style={{ flexGrow: 1 }} type="activity" title="Registro de actividad"></Options>
          <Options style={{ flexGrow: 1 }} type="settings" title="Configuraciones"></Options>
          <Options style={{ flexGrow: 1 }} type="logout" title="Cerrar Sesión" returnAuth={this.returnAuth}></Options>


        </ScrollView>


      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerHambuger: {
    flex: 1
  },
  containerWelcome: {
    flex: 0.5,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row"
  },
  containerOptions: {
    flex: 2,
    flexDirection: "column",

  },
  nameUser: {
    fontSize: 16,
    color: "white",
    fontFamily: 'Montserrat-Bold'
  },
  description: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 22,
    color: "#008deb",
    marginBottom: 10
  },
  descriptionCity: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 11,
    color: "#1c1c1c"
  }
});
