import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, Image, ScrollView, Button, Dimensions } from 'react-native';
import { QuantityBox } from '../../components/QuantityBox';
import { getReportById } from "../../../api-redux/actions/reports";
import { connect } from 'react-redux';
import Geocode from "react-geocode";
import moment from "moment";
import { Loading } from '../../components/Loading';
const data = [{ nombre: "https://facebook.github.io/react/logo-og.png" }, { nombre: "https://i.pinimg.com/564x/a6/11/27/a6112736b22d00b628ae6680c50922c0.jpg" }, { nombre: "https://i.pinimg.com/564x/d1/df/80/d1df802197eb931e29592ce4915f7cf2.jpg" }];

class Report extends Component {
  constructor() {
    super();

    this.state = { orientation: '', loading: true }
  }

  getOrientation = () => {
    if (this.refs.rootView) {
      if (Dimensions.get('window').width < Dimensions.get('window').height) {
        this.setState({ orientation: 'portrait' });
      }
      else {
        this.setState({ orientation: 'landscape' });
      }
    }
  }
  getAddres = (lat, lon) => {
    let address;
    if (lat && lon) {
      Geocode.fromLatLng(lat.toString(), lon.toString()).then(
        response => {
          address = response.results[0].formatted_address;
        },
        error => {
          address = "no disponible";
          console.log("hkhjk", error);
        }
      );
      return address;
    }
  }

  componentDidMount() {
    this.props.getReportById(this.props.navigation.state.params.itemId).then(() => {
      this.setState({ loading: false });
    });

    this.getOrientation();

    Dimensions.addEventListener('change', () => {
      this.getOrientation();
    });
  }
  render() {
    let whiles;
    let report = this.props.report;

    if (report && !report.success) {
      whiles = (<View>
        <Text>Sin resultados  :(</Text>
      </View>);
    }
    if ((this.state.loading && report) || (this.state.loading && !report)) {
      whiles = (<Loading></Loading>)
    }
    console.log(report);
    return (
      <View style={{ flex: 1 }}>
        {report && report.success && !this.state.loading ?
          <ScrollView ref="rootView" style={styles.container}>

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
                backgroundColor: "white", width: "90%", height: this.state.orientation == 'portrait' ? "115%" : "160%", marginBottom: 55, borderRadius: 5, shadowColor: '#000',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.75,
                shadowRadius: 2,
                elevation: 10,
                justifyContent: "space-evenly",
                padding: 10
              }} >
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Text style={styles.nameUser}>{report.data["0"].nombreUsuario}</Text>
                  <View style={{ borderColor: "red", width: 100, borderWidth: 1, borderRadius: 30, height: 30, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Image source={require('../../../utils/img/fighting.png')} style={{ height: 15, width: 15, borderRadius: 35 }} ></Image>
                    <Text style={{ fontSize: 11 }}>
                      {report.data["0"].tipoReporte}
                    </Text>
                  </View>
                </View>
                <Text adjustsFontSizeToFit={true} style={styles.description}>{moment(report.data["0"].fecha).format('LLL')}</Text>
                <Text adjustsFontSizeToFit={true} style={styles.description}>{report.data["0"].descripcion}</Text>
                <Text adjustsFontSizeToFit={true} style={styles.description}>{this.getAddres(report.data["0"].latitud, report.data["0"].longitud)}</Text>
                <View style={{ justifyContent: "space-evenly", flexDirection: "row" }}>
                  <QuantityBox title="negativos" quantity={report.data["0"].negativos} color="red" ></QuantityBox>
                  <QuantityBox title="positivos" quantity={report.data["0"].positivos} color="blue"></QuantityBox>
                </View>
                <Button
                  title="Ver Mapa"
                  color="#008deb"
                  accessibilityLabel="Learn more about this purple button"
                />
              </View>

            </View>
          </ScrollView > : whiles
        }
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    report: state.Api.Reports.reportById
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getReportById: (id) => {
      return getReportById(id)(
        dispatch
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Report);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    paddingTop: 10
  },
  nameUser: {
    fontSize: 15,
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
