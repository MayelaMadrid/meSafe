import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, Image, ScrollView, Button, Dimensions } from 'react-native';
import { QuantityBox } from '../../components/QuantityBox';


const data = [{ nombre: "https://facebook.github.io/react/logo-og.png" }, { nombre: "https://i.pinimg.com/564x/a6/11/27/a6112736b22d00b628ae6680c50922c0.jpg" }, { nombre: "https://i.pinimg.com/564x/d1/df/80/d1df802197eb931e29592ce4915f7cf2.jpg" }];

export default class Report extends Component {
  constructor() {
    super();

    this.state = { orientation: '' }
  }

  getOrientation = () => {
    console.log(Dimensions.get('window').width)
    if (this.refs.rootView) {
      if (Dimensions.get('window').width < Dimensions.get('window').height) {
        this.setState({ orientation: 'portrait' });
      }
      else {
        this.setState({ orientation: 'landscape' });
      }
    }
  }

  componentDidMount() {
    this.getOrientation();

    Dimensions.addEventListener('change', () => {
      this.getOrientation();
    });
  }
  render() {
    console.log(this.state.orientation)
    return (
      <View ref="rootView" style={styles.container}>
        <View style={{ backgroundColor: "#F9F8FD", flex: 2, justifyItems: "center", alignItems: "center" }}>
          <ScrollView style={{ flex: 1 }}>
            <FlatList
              style={{ flex: 1, marginRight: 15, marginLeft: 15 }}
              ItemSeparatorComponent={() => (
                <View style={{ width: 8 }} />
              )}
              horizontal={true}
              data={data}
              renderItem={({ item }) => <Image style={{
                width: 300, height: 400, borderRadius: 5, shadowColor: '#000',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.75,
                shadowRadius: 2,
                elevation: 10
              }} source={{ uri: item.nombre }} />}
            />
          </ScrollView>

        </View>
        <View style={{ flex: 1, backgroundColor: "#F9F8FD", justifyContent: "center", alignItems: "center" }}>
          <View style={{
            backgroundColor: "white", width: "85%", height: this.state.orientation == 'portrait' ? "125%" : "160%", marginBottom: 95, borderRadius: 5, shadowColor: '#000',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.75,
            shadowRadius: 2,
            elevation: 10,
            justifyContent: "space-between",
            padding: 10
          }} >
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={styles.nameUser}>Quien lo subio</Text>
              <View style={{ borderColor: "red", width: 100, borderWidth: 1, borderRadius: 30, height: 30, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Image source={require('../../../utils/img/fighting.png')} style={{ height: 15, width: 15, borderRadius: 35 }} ></Image>
                <Text style={{ fontSize: 11 }}>
                  Asalto
              </Text>
              </View>
            </View>
            <Text adjustsFontSizeToFit={true} style={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim pariatur veritatis repudiandae aut minus porro magni, temporibus fuga! Reprehenderit cupiditate enim aliquam molestias corrupti temporibus necessitatibus eum, deserunt nisi!</Text>
            <View style={{ justifyContent: "space-evenly", flexDirection: "row" }}>
              <QuantityBox title="negativos" quantity="2" color="red" ></QuantityBox>
              <QuantityBox title="positivos" quantity="20" color="blue"></QuantityBox>
            </View>
            <Button
              title="Ver Mapa"
              color="#008deb"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>

        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    paddingTop: 10
  },
  nameUser: {
    fontSize: 16,
    color: "#008deb",
    fontFamily: 'Montserrat-Bold'
  },
  description: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: "#5d5d5d",
    marginBottom: 10
  }
});
