import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Alert } from 'react-native';
import Header from './components/Header';
import uuid from 'react-native-uuid';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    { id: uuid.v4(), text: 'Milk' },
    { id: uuid.v4(), text: 'Bread' },
    { id: uuid.v4(), text: 'Juice' },
    { id: uuid.v4(), text: 'Eggs' },
  ]);

  //Delete Item Function
  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  //Add Item Function
  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', { text: 'Ok' });
    } else {
      setItems((prevItems) => {
        return [{ id: uuid.v4(), text }, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header title={'Shopping List'} />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, //display:flex by defualt row not column
    paddingTop: 25,
  },
});

export default App;
