// ActivityScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const activitiesData = [
    
  {
    id: '1',
    user: 'Serena Behera',
    action: 'reviewed',
    target: 'PAR Dining Hall',
    timestamp: '2023-03-01T12:00:00.000Z'
  },
  {
    id: '2',
    user: 'Ananya Agarwal',
    action: 'reviewed',
    target: 'IKE Dining Hall',
    timestamp: '2023-03-01T13:00:00.000Z'
  },
  {
    id: '3',
    user: 'Ananya Agarwal',
    action: 'reviewed',
    target: 'ISR Dining Hall',
    timestamp: '2023-03-01T14:00:00.000Z'
  },
  {
    id: '4',
    user: 'Isabel Alvar',
    action: 'favorited',
    target: 'Salad @ LAR Dining Hall',
    timestamp: '2023-03-01T15:00:00.000Z'
  },
  {
    id: '5',
    user: 'Isabel Alvar',
    action: 'reviewed',
    target: 'LAR Dining Hall',
    timestamp: '2023-03-01T16:00:00.000Z'
  },
];

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const ActivityItem = ({ item }) => (
    <View style={styles.activityItem}>
        <View>
            <Icon name="account-circle-outline" size={50} style={styles.profileIcon} />
         </View>
        <View style={styles.rightSide}>
            <Text style={styles.activityText}>
                {item.user} <Text style={{ fontWeight: 'normal' }}>{item.action}</Text> {item.target}
            </Text>
            <Text style={styles.timestamp}>{formatDate(item.timestamp)}</Text>
        </View>
    </View>
  );

const ActivityScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={activitiesData}
        renderItem={ActivityItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  activityItem: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  profileIcon: {
    marginRight: 10
  }
});


export default ActivityScreen;
