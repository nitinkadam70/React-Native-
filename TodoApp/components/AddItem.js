import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddItem = ({ addItem }) => {
  const [text, setText] = useState('');

  //getting input value and set in state
  const onChange = (textValue) => setText(textValue);

  return (
    <View>
      <TextInput
        placeholder="Add Items..."
        style={styles.input}
        onChangeText={onChange}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => addItem(text)}
      >
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
    fontSize: 20,
  },
  btn: { backgroundColor: '#c2bad8', padding: 9, margin: 5 },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 500,
  },
});

export default AddItem;
