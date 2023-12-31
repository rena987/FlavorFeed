// Home.js
import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const diningOptions = [
  { id: 1, name: '57 North at Ikenberry', servingTime: 'Serving till 10PM' },
  { id: 2, name: 'Caffeinator at Ikenberry', servingTime: 'Serving till 4PM' },
  { id: 3, name: 'Field of Greens at Lincoln/Allen', servingTime: 'Serving till 10PM' },
  { id: 4, name: 'ISR Dining Centre', servingTime: 'Serving till 10PM' },
  { id: 5, name: 'PAR Dining Centre', servingTime: 'Serving till 12AM' },
  { id: 6, name: 'LAR Dining Centre', servingTime: 'Serving till 10PM' },
  { id: 7, name: 'FAR Dining Centre', servingTime: 'Serving till 12AM' },
];

const Home = () => {
  const navigation = useNavigation();

  const navigateToProfile = () => {
    navigation.navigate('Profile');
  };

  const navigateToCaffinatorScreen = () => {
    navigation.navigate('Caffeinator');
  };

  const navigateToIkenberryScreen = () => {
    navigation.navigate('57 North');
  };

  const navigateToFavorites = () => {
    navigation.navigate('Favorites');
  };

  const navigateToReviews = () => {
    navigation.navigate('Reviews');
  };

  const navigateToAddReview = () => {
    navigation.navigate('Add Review');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Residence Dining Halls</Text>
        <View style={styles.secondPartHeader}>
          <Text style={styles.headerDate}>Friday, December 1</Text>
          <View style={styles.rightPartOfSecondHeader}>
            <TouchableOpacity onPress={navigateToProfile} style={styles.profileButton}>
              <Icon name="account-circle-outline" size={30} style={styles.profileIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.listOfDiningHalls}>
        <ScrollView style={styles.scrollView}>
          {diningOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={styles.listItem}
              onPress={() => {
                if (option.name === '57 North at Ikenberry') {
                  navigateToIkenberryScreen();
                } else if (option.name === 'Caffeinator at Ikenberry') {
                  navigateToCaffinatorScreen();
                }
              }}
            >
              <Icon name="silverware" size={24} color="green" style={styles.listIcon} />
              <View style={styles.listTextContainer}>
                <Text style={styles.listItemTitle}>{option.name}</Text>
                <View style={styles.servingTime}>
                  <Icon name="clock-outline" size={24} style={styles.clockIcon} />
                  <Text style={styles.listItemSubtitle}>{option.servingTime}</Text>
                </View>
              </View>
              <Icon name="chevron-right" size={24} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  profileButton: {
    marginLeft: 100,
    left: 83,
  },
  filterButton: {
    alignItems: 'right',
    left: 130,
  },
  container: {
    flex: 1,
    paddingTop: 20,
    flexDirection: 'column',
  },
  
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'left',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  secondPartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightPartOfSecondHeader: {
    flexDirection: 'row',
  },
  listOfDiningHalls: {
    flex: 1,
  },
  headerTitle: {
    paddingBottom: 10,
    fontSize: 30,
    fontWeight: '400',
  },
  headerDate: {
    paddingTop: 5,
    fontSize: 16,
    fontWeight: '300',
  },
  servingTime: {
    paddingTop: 8,
    flexDirection: 'row',
  },
  scrollView: {
    backgroundColor: '#fff',
  },
  listItem: {
    flexDirection: 'row',
    padding: 25,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  listIcon: {
    marginRight: 15,
  },
  clockIcon: {
    opacity: 0.5,
    marginRight: 5,
  },
  listTextContainer: {
    flex: 1,
  },
  listItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  listItemSubtitle: {
    paddingTop: 2,
    fontSize: 14,
    color: '#666',
  },
});

export default Home;
