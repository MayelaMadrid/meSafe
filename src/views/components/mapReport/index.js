import { Marker } from 'react-native-maps';


const MapReport = () => {
  const
  return (
    <MapView
      region={this.state.region}
      onRegionChange={this.onRegionChange}
    >
      <Marker
        coordinate={marker.latlng}
        title={"holi"}
        description={"pa que es to"}
      />
    </MapView>
  );


}
