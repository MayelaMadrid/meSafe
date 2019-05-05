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
    <View style={{ width: "65%", height: "66%" }}>
      <View style={styles.containerInput}>
        <Image
          source={require('../../../utils/img/magnifier.png')}
          style={{ width: 15, height: 15, marginLeft: 12 }}
        />
        <TextInput
          style={{ height: 40, width: "80%", paddingLeft: 22, backgroundColor: "#f6f6fe" }}
          placeholder="Busqueda"
        />
        <TouchableOpacity style={{ marginEnd: 7 }} >
          <Image
            source={require('../../../utils/img/clear.png')}
            style={{ width: 14, height: 14 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerInput: {
    flexDirection: 'row',
    backgroundColor: "#f6f6fe",
    flex: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "space-evenly"
  }
});

export default SearchInput;
