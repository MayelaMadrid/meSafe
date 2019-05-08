import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import FriendSuggest from "../../components/FriendSuggest"

const data = [{ name: 'Mayela Madrid', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Culiacan", type: "Asalto", gami: "3.8" }, { name: 'Diego Payan', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Barrancos", type: "Robo", gami: "4.6" }, { name: 'Peter Bonito', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Mi casa", type: "Asalto", gami: "4.6" }, { name: 'Mayela Madrid', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Culiacan", type: "Asalto", gami: "5.0" }, { name: 'Mayela Maddrid', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Isstesin", type: "Secuestro", gami: "3.6" }, { name: 'Mayela Madrid', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Culiacan", type: "Asalto", gami: "3.6" }, { name: 'Diego Payan', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Barrancos", type: "Robo", gami: "4.6" }, { name: 'Peter Bonito', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Mi casa", type: "Asalto", gami: "4.6" }, { name: 'Mayela Madrid', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Culiacan", type: "Asalto", gami: "5.0" }, { name: 'Mayela Maddrid', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Isstesin", type: "Secuestro", gami: "3.6" }];
export default class Friends extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: "#f6f6fe", flex: 1 }}>
          <FlatList
            style={{ flex: 1, marginStart: 35, marginTop: 10, paddingRight: 50 }}
            ItemSeparatorComponent={() => (
              <View style={{ width: 5 }} />
            )}
            data={data}
            renderItem={({ item }) => <FriendSuggest type="add" />} horizontal={true}
          />
        </View>
        <View style={{ backgroundColor: "#f6f6fe", flex: 2 }}>
          <FlatList
            style={{ width: "100%", marginStart: 35, height: "25%", marginTop: 10, paddingRight: 50 }}
            ItemSeparatorComponent={() => (
              <View style={{ width: 5 }} />
            )}
            numColumns={2}
            data={data}
            renderItem={({ item }) => <FriendSuggest type="mine" />}
          />
        </View>
      </View>

    );
  }
}
const styles = StyleSheet.create({

});
