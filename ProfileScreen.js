// screens/ProfileScreen.js
import React ,{ useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView ,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [showFriendsList, setShowFriendsList] = useState(false);
  const friends = [
    { id: '1', name: 'Alice Smith' },
    { id: '2', name: 'Bob Johnson' },
    { id: '3', name: 'Charlie Brown' },
    { id: '4', name: 'Dana White' },
    // ... more friend objects
  ];

  const navigateToOtherUserProfile = () => {
    navigation.navigate('OtherUserProfile'); // Replace with the actual screen name for other users
  };

  const renderFriend = ({ item }) => (
    <TouchableOpacity onPress={() => console.log('Navigate to friend profile')}>
      <Text style={styles.friendItem}>{item.name}</Text>
    </TouchableOpacity>
  );


  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="search for user..."
        onSubmitEditing={navigateToOtherUserProfile}
      />
      <View style={styles.profileSection}>
        <Icon name="account-circle-outline" size={80} style={styles.profileIcon} />
        <Text style={styles.username}>Your Username</Text>
        <TouchableOpacity onPress={() => setShowFriendsList(!showFriendsList)}>
          <Text style={styles.friendsCount}>4 Friends</Text>
        </TouchableOpacity>
        {showFriendsList && (
          <FlatList
            data={friends}
            renderItem={renderFriend}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </View>
      <View style={styles.preferencesSection}>
        <Text style={styles.preferencesTitle}>Preferences</Text>
        <TextInput style={styles.preferencesInput} placeholder="Vegetarian" />
        <TextInput style={styles.preferencesInput} placeholder="Gluten Free" />
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.favoritesSection}>
        <Text style={styles.favoritesTitle}>Favorites</Text>
        <Text style={styles.favoriteItem}>Stir Fry @ PAR Residence Hall</Text>
        <Text style={styles.favoriteItem}>Baked Cod @ LAR</Text>
        <Text style={styles.favoriteItem}>Yakisoba Noodles @ ISR</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    margin: 10,
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    fontSize: 16,
  },
  profileSection: {
    alignItems: 'center',
    margin: 10,
  },
  profileIcon: {
    margin: 10,
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  friendItem: {
    // Add styles for friend list items
    fontSize: 16,
    padding: 10,
    color: 'blue',
  },
  friendsCount: {
    fontSize: 16,
    color: '#666',
  },
  preferencesSection: {
    margin: 10,
  },
  preferencesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  preferencesInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  saveButton: {
    backgroundColor: '#0000ff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 5,
  },
  saveButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  favoritesSection: {
    margin: 10,
  },
  favoritesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  favoriteItem: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
});

export default ProfileScreen;
