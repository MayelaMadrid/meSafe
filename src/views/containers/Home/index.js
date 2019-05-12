import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Header from '../../components/Header';
import PublicacionHome from '../PublicacionHome';
import { FriendSuggest } from '../../components/FriendSuggest';

const data = [{ name: 'Mayela Madrid', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Culiacan", type: "Asalto", gami: "3.8" }, { name: 'Diego Payan', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Barrancos", type: "Robo", gami: "4.6" }, { name: 'Peter Bonito', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Mi casa", type: "Asalto", gami: "4.6" }, { name: 'Mayela Madrid', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Culiacan", type: "Asalto", gami: "5.0" }, { name: 'Mayela Maddrid', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Isstesin", type: "Secuestro", gami: "3.6" }, { name: 'Mayela Madrid', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Culiacan", type: "Asalto", gami: "3.6" }, { name: 'Diego Payan', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Barrancos", type: "Robo", gami: "4.6" }, { name: 'Peter Bonito', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Mi casa", type: "Asalto", gami: "4.6" }, { name: 'Mayela Madrid', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Culiacan", type: "Asalto", gami: "5.0" }, { name: 'Mayela Maddrid', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Isstesin", type: "Secuestro", gami: "3.6" }];
export default class Home extends Component {

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
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>


        <View style={{ flex: 1, marginLeft: 35, marginTop: 5 }}>
          <FlatList
            style={{ flex: 1 }}
            contentContainerStyle={{ borderRadius: 5 }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal={false}
            data={data}
            renderItem={({ item }) => <PublicacionHome style={{ borderRadius: 5 }} object={item} ></PublicacionHome>}
            ItemSeparatorComponent={this.renderSeparator}
          /></View>


      </View>

    );
  }
}
const styles = StyleSheet.create({
  header: {}
});
