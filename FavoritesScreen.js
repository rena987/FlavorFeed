// FavoritesScreen.js
import React,  { useState, useContext } from 'react';
import {Modal, View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import FavoritesContext from './FavoritesContext';

const Item = ({ id, title, rating }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{id}</Text>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.ratingContainer}>
      <Text style={styles.rating}>{rating}</Text>
      <Icon name="star" size={20} color="#FFD700" />
    </View>
  </View>
);

const FavoritesScreen = () => {
  const { favorites } = useContext(FavoritesContext);

  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => setModalVisible(true)} style={{ marginRight: 10 }}>
          <Icon name="information-outline" size={24} color="black"/>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={({ item }) => <Item id={item.id} title={item.title} />}
        keyExtractor={item => item.id}
        style={styles.favoritesScreen}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}>
              <Icon name="close" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.modalText}>How to use this screen:</Text>
            <Text style={styles.instructionsText}>
              Here are some instructions on how to use the favorites feature...
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginRight: 4,
    fontSize: 16,
  },centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  instructionsText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default FavoritesScreen;
