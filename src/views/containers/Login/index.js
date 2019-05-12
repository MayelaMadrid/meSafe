import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableHighlight,
  ToastAndroid
} from 'react-native';
import { connect } from 'react-redux';
import { InputImage } from '../../components/InputImage';
import { login, token } from "../../../api-redux/actions/auth"

class Login extends Component {
  state = {
    count: 0,
    color: 'white',
    user: undefined,
    pass: undefined, auth: false
  };
  handleLogin = () => {
    let { user, pass } = this.state;
    if (user && pass) {
      this.props.onLogin(user, pass).then(() => {
        let auth = this.props.auth;

        if (auth && auth.success) {
          ToastAndroid.showWithGravityAndOffset(
            "Inicio de sesión correcto",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            50,
          );
          this.props.saveToken(auth.token);
          this.setState({ auth: true });
        } else {
          ToastAndroid.showWithGravityAndOffset(
            "El usuario o contraseña son incorrectos.",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            50,
          );
        }
      })
    }
    else {
      ToastAndroid.showWithGravityAndOffset(
        "Los campos no deben ir vacios.",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    }
  };
  handleChange = (type, value) => {
    this.setState({ [type]: value });
  }
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
    console.log(this.props.auth);
    if (this.state.auth) {
      this.props.navigation.navigate('App');
    }
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
          <InputImage type="user" handleChange={this.handleChange} />
          <InputImage type="pass" handleChange={this.handleChange} />
        </View>

        <View style={styles.viewButton}>
          <TouchableHighlight
            onShowUnderlay={this.onShowUnderlay}
            style={styles.button}
            onPress={this.handleLogin}
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
const mapStateToProps = state => {
  return {
    auth: state.Api.Auth.login
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLogin: (user, pass) => {
      return login(user, pass)(
        dispatch
      );
    },
    saveToken: value => {
      dispatch(token(value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

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
  },
  viewButton: {
    flex: 1.6,
    justifyContent: 'center'
  }
});
