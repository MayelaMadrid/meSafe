import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity, ImageBackground
} from 'react-native';
import SearchInput from '../searchInput/searchInput';

function Header(props) {
  const [showInput, setShowInput] = useState(false);
  const searchResults = () => {
    setShowInput(true);
  };
  const sendBack = back => {
    setShowInput(false);
  };
  return (
    <SafeAreaView style={{ backgroundColor: 'white', height: 60 }}>

      <View style={styles.containerHome}>
        <View style={styles.logoHome}>
          <View style={styles.containerLetter}>
            <Text style={styles.meHome}> me</Text>
            <Text style={styles.safeHome}>Safe </Text>
            <Image
              source={require('../../../utils/img/placeholder2.png')}
              style={{ width: 15, height: 15, marginRight: 15 }}
            />
          </View>
          <SearchInput getBack={sendBack} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logos: {
    width: 30,
    height: 50,
    padding: 0,
    resizeMode: 'contain'
  },
  containerHome: {
    flex: 1,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  containerLetter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoHome: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'

  },
  meHome: {
    fontSize: 20,
    color: '#008deb',
    fontFamily: 'Montserrat-Bold'
  },
  safeHome: {
    textAlign: 'center',
    fontWeight: '400',
    color: '#008deb',
    fontSize: 20,
    fontFamily: 'Montserrat-Regular'
  }
});

export default Header;
