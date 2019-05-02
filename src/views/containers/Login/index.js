import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableHighlight
} from 'react-native';
import { InputImage } from '../../components/InputImage';
export default class Login extends Component {
  state = {
    count: 0,
    color: 'white'
  };
  onPress = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  onShowUnderlay = () => {
    this.setState({
      color: '#0071bc'
    });
  };
  onHideUnderlay = () => {
    this.setState({
      color: 'white'
    });
  };
  render() {
    const style = { color: this.state.color };
    const combineStyles = StyleSheet.flatten([styles.txtButton, style]);

    return (
      <ImageBackground
        source={require('../../../utils/img/login_city.jpeg')}
        style={styles.container}
      >
        <View style={styles.logo}>
          <Text style={styles.welcome}> me</Text>
          <Text style={styles.instructions}>Safe </Text>
        </View>
        <View style={styles.containerIpt}>
          <InputImage type="user" />
          <InputImage type="pass" />
        </View>

        <View style={{ flex: 1.6, justifyContent: 'center' }}>
          <TouchableHighlight
            onShowUnderlay={this.onShowUnderlay}
            style={styles.button}
            onPress={this.onPress}
            underlayColor="white"
            onHideUnderlay={this.onHideUnderlay}
          >
            <Text style={combineStyles}>Iniciar Sesión</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  txtButton: {
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold'
  },

  containerIpt: {
    flex: 1.5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0071bc',
    padding: 10,
    width: 300,
    height: 55,
    fontFamily: 'Montserrat-SemiBold',
    borderRadius: 5
  },
  logo: {
    flex: 1.5,

    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  container: {
    flex: 1,
    width: 400,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 45,
    textAlign: 'center',
    color: '#0071bc',
    fontFamily: 'Montserrat-ExtraBold',
    textShadowColor: 'rgba(255, 255, 255, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  instructions: {
    textAlign: 'center',
    fontWeight: '400',
    color: 'white',
    fontSize: 45,
    fontFamily: 'Montserrat-SemiBold'
  }
});
