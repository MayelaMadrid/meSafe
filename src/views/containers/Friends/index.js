import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import { FriendSuggest } from "../../components/FriendSuggest"
import Header from '../../components/Header';

const data = [{ name: 'Mayela Madrid', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Culiacan", type: "Asalto", gami: "3.8" }, { name: 'Diego Payan', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Barrancos", type: "Robo", gami: "4.6" }, { name: 'Peter Bonito', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Mi casa", type: "Asalto", gami: "4.6" }, { name: 'Mayela Madrid', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Culiacan", type: "Asalto", gami: "5.0" }, { name: 'Mayela Maddrid', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Isstesin", type: "Secuestro", gami: "3.6" }, { name: 'Mayela Madrid', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Culiacan", type: "Asalto", gami: "3.6" }, { name: 'Diego Payan', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Barrancos", type: "Robo", gami: "4.6" }, { name: 'Peter Bonito', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Mi casa", type: "Asalto", gami: "4.6" }, { name: 'Mayela Madrid', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Culiacan", type: "Asalto", gami: "5.0" }, { name: 'Mayela Maddrid', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Isstesin", type: "Secuestro", gami: "3.6" }];
export default class Friends extends Component {
  static navigationOptions = {
    headerTitle: <Header />,
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: "#f6f6fe", flex: 1, justifyContent: "center", alignContent: "center", borderBottomColor: "#cacaca", borderBottomWidth: 2, marginBottom: 20 }}>
          <FlatList
            style={{ flex: 1 }}
            ItemSeparatorComponent={() => (
              <View style={{ width: 5 }} />
            )}
            horizontal={true}
            data={data}
            renderItem={({ item }) => <FriendSuggest type="add" />}
          />
        </View>
        <View style={{ backgroundColor: "#f6f6fe", flex: 2, paddingStart: 20 }}>
          <FlatList
            style={{ flex: 1 }}
            ItemSeparatorComponent={() => (
              <View style={{ width: 55 }} />
            )}
            numColumns={2}
            data={data}
            renderItem={({ item }) => <View style={{ marginLeft: 20, marginBottom: 20 }}><FriendSuggest type="mine" /></View>}
          />
        </View>
      </View>

    );
  }
}
const styles = StyleSheet.create({

});
