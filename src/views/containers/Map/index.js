import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import MapView, { Marker, ProviderPropType } from 'react-native-maps';
import Geocode from "react-geocode";
import Geocoder from 'react-native-geocoding';


const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

class DefaultMarkers extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [], location: undefined
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = position;

        this.setState({ location });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: false, timeout: 10000 }
    );

  }

  onMapPress(e) {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          key: id++,
          color: randomColor(),
        },
      ],
    });

    Geocode.fromLatLng(e.nativeEvent.coordinate.latitude.toString(), e.nativeEvent.coordinate.longitude.toString()).then(
      response => {
        const address = response.results[0].formatted_address;
        console.log(address);
      },
      error => {
        console.error("hkhjk", error);
      }
    );
  }

  render() {
    const location = this.state.location;
    if (location) {
      const region = {
        latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0043,
        longitudeDelta: 0.0034
      }
      return (
        <View style={styles.container}>
          <MapView
            provider={this.props.provider}
            style={styles.map}
            initialRegion={region}
            onPress={(e) => this.onMapPress(e)}
          >
            {this.state.markers.map(marker => (
              <Marker
                key={marker.key}
                coordinate={marker.coordinate}
                pinColor={marker.color}
              />
            ))}
          </MapView>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => this.setState({ markers: [] })}
              style={styles.bubble}
            >
              <Text>Tap to create a marker of random color</Text>
            </TouchableOpacity>
          </View>
        </View >
      );
    } else {
      return <View><Text>not workin</Text></View>
    }
  }
}

DefaultMarkers.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

export default DefaultMarkers;