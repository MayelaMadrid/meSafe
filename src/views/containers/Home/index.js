import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Header from '../../components/Header';
import PublicacionHome from '../PublicacionHome';

export default class Home extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={{ backgroundColor: "#f6f6fe", flexGrow: 1, alignItems: "center" }}>
          <FlatList
            style={{ width: "100%" }}
            contentContainerStyle={{ alignItems: "center" }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={[{ name: 'Mayela Madrid', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Culiacan", type: "Asalto", gami: "3.6" }, { name: 'Diego Payan', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Barrancos", type: "Robo", gami: "4.6" }, { name: 'Peter Bonito', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Mi casa", type: "Asalto", gami: "4.6" }, { name: 'Mayela Madrid', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Culiacan", type: "Asalto", gami: "5.0" }, { name: 'Mayela Madrid', description: "jhkhcjkxhcjkhxzjkchzxjkhcxzjkchjkzhczjkxhcjkhcxjkhcjkzhx", place: "Isstesin", type: "Secuestro", gami: "3.6" }]}
            renderItem={({ item }) => <PublicacionHome object={item} ></PublicacionHome>}
          />

        </View>
      </View >
    );
  }
}
const styles = StyleSheet.create({
  header: {}
});
