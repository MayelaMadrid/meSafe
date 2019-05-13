import React from 'react';
import { ProgressBarAndroid, AppRegistry, StyleSheet, View } from 'react-native';
export const Loading = () => {
  return (
    <View style={styles.container}>
      <ProgressBarAndroid color="blue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 10,
  },
});
