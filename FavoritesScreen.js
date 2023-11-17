// FavoritesScreen.js
import React,  { useState } from 'react';
import {Modal, View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const favoritesData = [{
  id: '1',
  title: 'Orange Tempura Chicken',
  rating: '10.0',
  description: '@ Illinois Street Residence\nThursday, Lunch',
},
{
  id: '2',
  title: 'Waffle and Smoothie Bar',
  rating: '9.5',
  description: '@ Field of Greens\nTuesday, Breakfast',
},
{
  id: '3',
  title: 'Halal Italian Beef',
  rating: '9.4',
  description: '@ Ikenberry Dining Hall\nWednesday, Dinner',
},
{
  id: '4',
  title: 'Sky Garden (Stir-fry)',
  rating: '9.1',
  description: '@ PAR Dining Hall\nEveryday Lunch, DInner',
},
{
  id: '5',
  title: 'Chicken Parmesan',
  rating: '8.9',
  description: '@ PAR Dining Hall\nThursday, Dinner',
},
{
  id: '6',
  title: 'Chicken Parmesan',
  rating: '8.9',
  description: '@ PAR Dining Hall\nThursday, Dinner',
},
{
  id: '7',
  title: 'Chicken Parmesan',
  rating: '8.9',
  description: '@ PAR Dining Hall\nThursday, Dinner',
},
{
  id: '8',
  title: 'Chicken Parmesan',
  rating: '8.9',
  description: '@ PAR Dining Hall\nThursday, Dinner',
},
{
  id: '9',
  title: 'Chicken Parmesan',
  rating: '8.9',
  description: '@ PAR Dining Hall\nThursday, Dinner',
},
{
  id: '10',
  title: 'Chicken Parmesan',
  rating: '8.9',
  description: '@ PAR Dining Hall\nThursday, Dinner',
},
{
  id: '11',
  title: 'Chicken Parmesan',
  rating: '8.9',
  description: '@ PAR Dining Hall\nThursday, Dinner',
},
{
  id: '12',
  title: 'Chicken Parmesan',
  rating: '8.9',
  description: '@ PAR Dining Hall\nThursday, Dinner',
},
{
  id: '13',
  title: 'Chicken Parmesan',
  rating: '8.9',
  description: '@ PAR Dining Hall\nThursday, Dinner',
},
];

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
        data={favoritesData}
        renderItem={({ item }) => <Item id={item.id} title={item.title} rating={item.rating} />}
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
            {/* Your instructions here */}
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
    // Add other styling as needed
  },
});

export default FavoritesScreen;
