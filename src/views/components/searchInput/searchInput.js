import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

function SearchInput(props) {
  const getBack = () => {
    props.getBack(true);
  };
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={getBack}>
        <Image
          source={require('../../../utils/img/left-arrow.png')}
          style={{ width: 20, height: 20 }}
        />
      </TouchableOpacity>
      <TextInput
        style={{ height: 40, width: 260, backgroundColor: 'white' }}
        placeholder="Busqueda"
      />
      <TouchableOpacity>
        <Image
          source={require('../../../utils/img/clear.png')}
          style={{ width: 20, height: 20 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logos: {
    width: 10,
    height: 20,
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

export default SearchInput;
