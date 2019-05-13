import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getReports, getReportsType } from "../../../api-redux/actions/reports"
import PublicacionHome from '../PublicacionHome';
import { Loading } from '../../components/Loading';

class Home extends Component {

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 5,
          marginLeft: "14%"
        }}
      />
    );
  };
  componentDidMount() {
    if (this.props.type === 0) {
      this.props.getReports();
    } else {
      this.props.getReportsType(this.props.type);
    }
  }
  render() {

    const type = this.props.type;
    let reports = undefined;
    let whiles;
    if (type === 0) {
      reports = this.props.reportsNow;
    }
    if (type === 1) {
      reports = this.props.reportsRo;
    }
    if (type === 2) {
      reports = this.props.reportsAs;
    }
    if (type === 3) {
      reports = this.props.reportsRe;
    }
    if (reports && !reports.success) {
      whiles = (<View>
        <Text>Sin resultados  :(</Text>
      </View>);
    }
    if (!reports) {
      whiles = (<Loading></Loading>)
    }

    return (
      <View style={{ backgroundColor: '#F9F8FD', flex: 1 }}>
        {reports && reports.success ?
          <View style={{ flex: 1, marginLeft: 35, marginTop: 5 }}>
            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{ borderRadius: 5 }}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              horizontal={false}
              data={reports.data}
              renderItem={({ item }) => <PublicacionHome navigation={this.props.navigation} style={{ borderRadius: 5 }} object={item} type={type}></PublicacionHome>}
              ItemSeparatorComponent={this.renderSeparator}
            /></View> : whiles}


      </View>

    );
  }
}

const mapStateToProps = state => {
  return {
    reportsNow: state.Api.Reports.reportsNow,
    reportsAs: state.Api.Reports.reportsAs,
    reportsRo: state.Api.Reports.reportsRo,
    reportsRe: state.Api.Reports.reportsRe
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getReports: () => {
      return getReports()(
        dispatch
      );
    },
    getReportsType: (type) => {
      return getReportsType(type)(
        dispatch
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

const styles = StyleSheet.create({
  header: {}
});
