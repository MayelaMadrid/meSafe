import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity
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
    <SafeAreaView style={{ backgroundColor: '#008deb', height: 60 }}>
      {showInput ? (
        <View style={styles.containerHome}>
          <SearchInput getBack={sendBack} />
        </View>
      ) : (
        <View style={styles.containerHome}>
          <Image
            style={styles.logos}
            source={require('../../../utils/img/home-icon-silhouette.png')}
          />
          <View style={styles.logoHome}>
            <Text style={styles.meHome}> me</Text>
            <Text style={styles.safeHome}>Safe </Text>
            <View style={{}}>
              <Image
                style={styles.logos}
                source={require('../../../utils/img/placeholder.png')}
              />
            </View>
          </View>
          <TouchableOpacity onPress={searchResults}>
            <Image
              style={styles.logos}
              source={require('../../../utils/img/magnifier2.png')}
            />
          </TouchableOpacity>
        </View>
      )}
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
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  logoHome: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  meHome: {
    fontSize: 22,
    color: 'white',
    fontFamily: 'Montserrat-Bold'
  },
  safeHome: {
    textAlign: 'center',
    fontWeight: '400',
    color: 'white',
    fontSize: 22,
    fontFamily: 'Montserrat-Regular'
  }
});

export default Header;
