import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getReports } from "../../../api-redux/actions/reports"
import PublicacionHome from '../PublicacionHome';

const data = [{ name: 'Mayela Madrid', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Culiacan", type: "Asalto", gami: "3.8" }, { name: 'Diego Payan', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Barrancos", type: "Robo", gami: "4.6" }, { name: 'Peter Bonito', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Mi casa", type: "Asalto", gami: "4.6" }, { name: 'Mayela Madrid', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Culiacan", type: "Asalto", gami: "5.0" }, { name: 'Mayela Maddrid', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Isstesin", type: "Secuestro", gami: "3.6" }, { name: 'Mayela Madrid', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Culiacan", type: "Asalto", gami: "3.6" }, { name: 'Diego Payan', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Barrancos", type: "Robo", gami: "4.6" }, { name: 'Peter Bonito', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Mi casa", type: "Asalto", gami: "4.6" }, { name: 'Mayela Madrid', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Culiacan", type: "Asalto", gami: "5.0" }, { name: 'Mayela Maddrid', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Isstesin", type: "Secuestro", gami: "3.6" }];
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
    this.props.getReport(this.props.type);
  }
  render() {
    const reports = this.props.reports;
    return (
      <View style={{ backgroundColor: '#F9F8FD', flex: 1 }}>


        {<View style={{ flex: 1, marginLeft: 35, marginTop: 5 }}>
          <FlatList
            style={{ flex: 1 }}
            contentContainerStyle={{ borderRadius: 5 }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal={false}
            data={reports}
            renderItem={({ item }) => <PublicacionHome style={{ borderRadius: 5 }} object={item} ></PublicacionHome>}
            ItemSeparatorComponent={this.renderSeparator}
          /></View>}


      </View>

    );
  }
}

const mapStateToProps = state => {
  return {
    reports: state.Api.Reports.reports
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getReport: (type) => {
      return getReports(type)(
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
