import React from 'react';
import { View, Text, Image, Button, ScrollView, FlatList, Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { LabelInput } from "../../components/labelInput"
import { LugarInput } from "../../components/labelInput"
import { DatePickerINput } from "../../components/labelInput"
import MapView, { Marker } from 'react-native-maps';



export default class App extends React.Component {
  state = {
    photo: [], x: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }, latitude: "", longiude: "", location: ""
  };

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        const { photo } = this.state;
        let photos = photo.concat(response)
        this.setState({ photo: photos });
      }
    });
  };
  handleTakePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchCamera(options, response => {
      if (response.uri) {
        const { photo } = this.state;
        let photos = photo.concat(response)

        this.setState({ photo: photos });
      }
    });
  };
  render() {
    const { photo } = this.state;
    const region = {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    };
    return (

      <View style={{ backgroundColor: "#F9F8FD", flex: 1 }}>
        <ScrollView style={{ backgroundColor: "#F9F8FD", flex: 1 }} >
          <View style={{ flex: 3 }}>
            <ScrollView>
              {photo.length > 0 ?
                <FlatList
                  style={{ flex: 1, marginRight: 15, marginLeft: 15 }}
                  ItemSeparatorComponent={() => (
                    <View style={{ width: 8 }} />
                  )}
                  horizontal={true}
                  data={photo}
                  renderItem={({ item }) =>
                    <Image
                      source={{ uri: item.uri }}
                      style={{ width: 350, height: 280, borderRadius: 5, marginTop: 5 }}
                    />}
                /> : <View style={{ flex: 1, justifyContent: "center", alignItems: "center", borderRadius: 1000, backgroundColor: "white", alignSelf: "center", width: 300, height: 280 }}>
                  <Image style={{ width: 200, height: 200 }} source={require("../../../utils/img/camera.png")} ></Image>
                </View>}
            </ScrollView>
          </View>


          <View style={{ flex: 1, paddingTop: 35, }}>
            <View style={{ backgroundColor: "#F9F8FD", flexDirection: "row", justifyContent: "space-evenly", flex: 1, marginBottom: 10 }}>
              <Button title="Escoger foto" onPress={this.handleChoosePhoto} />
              <Button title="Tomar la foto" onPress={this.handleTakePhoto} />
            </View>
            <View style={{ flex: 1, alignItems: "center" }}
            >
              <LabelInput title="Descripción" type="area"></LabelInput>
              <LugarInput title="Tipo Suceso" ></LugarInput>
              <LugarInput title="Lugar"></LugarInput>
              <DatePickerINput title="Fecha"></DatePickerINput>
            </View>
          </View>
        </ScrollView>
        {/* <MapView initialRegion={region} style={{ width: 400, height: 400 }}>
          <Marker draggable
            coordinate={this.state.x}
            onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
          />
        </MapView> */}
      </View>


    );
  }
}