import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

function Header(props) {
  return (
    <View style={{ backgroundColor: '#F5FCFF' }}>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.right}>{props.children}</View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 26
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF'
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});

export default Header;
