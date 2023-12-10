// CaffinatorScreen.js
import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'; 
import FavoritesContext from './FavoritesContext';

const CaffinatorScreen = () => {
  const [selectedTab, setSelectedTab] = useState('Breakfast');
  const navigation = useNavigation();
  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);
  const handleFavoritePress = (foodText) => {
    const newItem = {
      title: foodText,
      hall: "Caffinator",
    };
    if (isFavorite(newItem)) {
      removeFavorite(newItem);
    } else {
      addFavorite(newItem);
    }
  }

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
  };

  const navigateToReviews = () => {
    navigation.navigate('Reviews');
  };

  // Function to get the current date in the "Month Day, Year" format
  const getCurrentDate = () => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
  };

  const handlePreviousDay = () => {
    // Handle logic for navigating to the previous day
    console.log('Previous day selected');
  };

  const handleNextDay = () => {
    // Handle logic for navigating to the next day
    console.log('Next day selected');
  };

  return (
    <View style={styles.container}>
      {<Image source={require('/Users/isabe/465_project/assets/caffinator.jpg')} style={styles.image} />}

      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>The Caffeinator</Text>
          
          {/* Check-In Box */}
          <TouchableOpacity style={styles.checkInBox} onPress={() => console.log('Check-in')}>
          </TouchableOpacity>
          <Text style={styles.checkInBoxText}>Check In</Text>
        </View>

        <Text style={styles.waitTime}>Wait Time: 15 minutes</Text>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>Address: 301 E. Gregory Drive, Champaign (2nd Floor)</Text>
        </View>

        <View style={styles.iconsRow}>
          {/* Google Maps Icon and Text */}
          <TouchableOpacity
            style={styles.mapsIconContainer}
            onPress={() => console.log('Open Google Maps')}
          >
            <Icon name="google-maps" size={30} color="red" style={styles.mapIcon} />
            <Text style={styles.mapText}>Get Directions</Text>
          </TouchableOpacity>

          {/* Review Button */}
          <TouchableOpacity
            style={styles.reviewButton}
            onPress={() => console.log('Navigate to reviews')}
          >
            <Icon name="star-outline" size={30} color="gold" />
            <Text style={styles.reviewButtonText}>Add Review</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.seeReviewsButton} onPress={navigateToReviews}>
            <Icon name="help-circle" size={30} color="black" style={styles.seeReviewsIcon} />
            <Text style={styles.seeReviewsText}>See Reviews</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.horizontalLine} />

        <View style={styles.dateTitleContainer}>
          <TouchableOpacity onPress={handlePreviousDay}>
            <Icon name="chevron-left" size={20} color="black" style={styles.arrowIcon} />
          </TouchableOpacity>
          <Text style={styles.dateTitle}>{getCurrentDate()}</Text>
          <TouchableOpacity onPress={handleNextDay}>
            <Icon name="chevron-right" size={20} color="black" style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.tabsAndFoodBar}>
          <View style={styles.tabsContainer}>
            <TouchableOpacity
              style={[styles.tab, selectedTab === 'Breakfast' && styles.selectedTab]}
              onPress={() => handleTabPress('Breakfast')}
            >
              <Text style={styles.tabText}>Breakfast</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, selectedTab === 'Lunch' && styles.selectedTab]}
              onPress={() => handleTabPress('Lunch')}
            >
              <Text style={styles.tabText}>Lunch</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, selectedTab === 'Dinner' && styles.selectedTab]}
              onPress={() => handleTabPress('Dinner')}
            >
              <Text style={styles.tabText}>Dinner</Text>
            </TouchableOpacity>
          </View>

          {/* Food List */}
          <ScrollView style={styles.foodList}>
            <View style={styles.foodItem}>
              <Text style={styles.foodText}>Blueberry Scone</Text>
              <TouchableOpacity onPress={() => handleFavoritePress('Blueberry Scone')}>
                <Icon 
                  name={isFavorite({ title: 'Blueberry Scone', hall: "Caffinator" }) ? "heart" : "heart-outline"} 
                  size={20} 
                  color="pink" 
                  style={styles.favoriteIcon} />
              </TouchableOpacity>
            </View>

            <View style={styles.foodItem}>
              <Text style={styles.foodText}>Sausage, Egg, and Cheese Sandwich</Text>
              <TouchableOpacity onPress={() => handleFavoritePress('Sausage, Egg, and Cheese Sandwich')}>
                <Icon 
                  name={isFavorite({ title: 'Sausage, Egg, and Cheese Sandwich', hall: "Caffinator" }) ? "heart" : "heart-outline"} 
                  size={20} 
                  color="pink" 
                  style={styles.favoriteIcon} />
              </TouchableOpacity>
            </View>

          </ScrollView>
        </View>

        <Text style={styles.menuTitle}>Menu</Text>

        <View style={styles.menuContainer}>
          {/* Menu Items */}
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Tomato Pesto Sandwich (V)</Text>
            <TouchableOpacity onPress={() => handleFavoritePress('Tomato Pesto Sandwich')}>
                <Icon 
                  name={isFavorite({ title: 'Tomato Pesto Sandwich', hall: "Caffinator" }) ? "heart" : "heart-outline"} 
                  size={20} 
                  color="pink" 
                  style={styles.favoriteIcon} />
            </TouchableOpacity>
          </View>

          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Sausage, Egg, & Cheese Sandwich</Text>
            <TouchableOpacity onPress={() => handleFavoritePress('Sausage, Egg, & Cheese Sandwich')}>
                <Icon 
                  name={isFavorite({ title: 'Sausage, Egg, & Cheese Sandwich', hall: "Caffinator" }) ? "heart" : "heart-outline"} 
                  size={20} 
                  color="pink" 
                  style={styles.favoriteIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Turkey and Cheese Sandwich</Text>
            <TouchableOpacity onPress={() => handleFavoritePress('Turkey and Cheese Sandwich')}>
                <Icon 
                  name={isFavorite({ title: 'Turkey and Cheese Sandwich', hall: "Caffinator" }) ? "heart" : "heart-outline"} 
                  size={20} 
                  color="pink" 
                  style={styles.favoriteIcon} />
            </TouchableOpacity>
          </View>

          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Avocado Toast (V)</Text>
            <TouchableOpacity onPress={() => handleFavoritePress('Avocado Toast')}>
                <Icon 
                  name={isFavorite({ title: 'Avocado Toast', hall: "Caffinator" }) ? "heart" : "heart-outline"} 
                  size={20} 
                  color="pink" 
                  style={styles.favoriteIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Fruit Smoothie</Text>
            <TouchableOpacity onPress={() => handleFavoritePress('Fruit Smoothie')}>
                <Icon 
                  name={isFavorite({ title: 'Fruit Smoothie', hall: "Caffinator" }) ? "heart" : "heart-outline"} 
                  size={20} 
                  color="pink" 
                  style={styles.favoriteIcon} />
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    image: {
      width: '100%',
      height: 200,
    },
    contentContainer: {
      width: '80%',
      alignItems: 'flex-start',
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 10,
      marginLeft: -20,
    },
    checkInContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      position: 'absolute',
      right: 30, 
      top: 10,
    },
    checkInBox: {
      width: 30,
      height: 30,
      borderWidth: 1,
      borderColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: -5,
      marginLeft: 100,
    },
    checkInBoxText: {
      fontSize: 12,
      color: 'black',
      marginBottom: -60,
      marginLeft: -40,
    },
    waitTime: {
      fontSize: 14,
      marginBottom: 10,
      marginLeft: -20,
    },
    addressContainer: {
      marginBottom: 10,
      width: '100%',
    },
    address: {
      fontSize: 14,
      marginBottom: 10,
      marginLeft: -20,
    },
    iconsRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10,
      width: '100%',
    },
    mapsIconContainer: {
      alignItems: 'center',
    },
    mapIcon: {
      marginLeft: 10,
    },
    mapText: {
      fontSize: 14,
      color: 'black',
    },
    reviewButton: {
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    reviewButtonText: {
      fontSize: 14,
      color: 'black',
    },
    seeReviewsButton: {
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    seeReviewsText: {
      fontSize: 14,
      color: 'black',
    },
    checkInContainer: {
      alignItems: 'center',
      marginTop: -30,
    },
    tabsAndFoodBar: {
      width: '100%',
      flexDirection: 'column',
    },
    tabsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#e0e0e0',
      borderRadius: 10,
      padding: 5,
      marginBottom: 10,
    },
    tab: {
      padding: 10,
      borderRadius: 5,
    },
    selectedTab: {
      backgroundColor: 'pink',
    },
    tabText: {
      fontSize: 14,
      color: 'black',
    },
    foodList: {
      flex: 1,
    },
    foodItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    foodText: {
      fontSize: 16,
      color: 'black',
    },
    favoriteIcon: {
      marginLeft: 10,
    },
    horizontalLine: {
      height: 1.5,
      width: '100%',
      backgroundColor: 'black',
      marginVertical: 10,
      borderRadius: 10,
    },
    menuTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    menuContainer: {
      width: '100%',
    },
    menuItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    menuItemText: {
      fontSize: 16,
      color: 'black',
    },
    dateTitleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 20,
    },
    dateTitle: {
      fontSize: 15,
      fontWeight: 'normal',
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 20,
    },
    arrowIcon: {
      marginHorizontal: 20,
      marginLeft: 25,
      marginRight: 0,
    },
  });
  
  export default CaffinatorScreen;
  
