// Home.js
import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const diningOptions = [
  { id: 1, name: '57 north at Ikenberry', servingTime: 'Serving till 10PM' },
  { id: 2, name: 'Caffeinator at Ikenberry', servingTime: 'Serving till 10PM' },
  { id: 3, name: 'Field of Greens at Lincoln/Allen', servingTime: 'Serving till 10PM' },
  { id: 4, name: 'ISR Dining Centre', servingTime: 'Serving till 10PM' },
];

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Residence Hall Dining</Text>
        <Text style={styles.headerDate}>Friday, October 10</Text>
      </View>
      <View>
        <ScrollView style={styles.scrollView}>
            {diningOptions.map((option) => (
            <TouchableOpacity key={option.id} style={styles.listItem}>
                <Icon name="silverware" size={24} style={styles.listIcon} />
                <View style={styles.listTextContainer}>
                <Text style={styles.listItemTitle}>{option.name}</Text>
                <Text style={styles.listItemSubtitle}>{option.servingTime}</Text>
                </View>
                <Icon name="chevron-right" size={24} />
            </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <Icon name="home-outline" size={24} />
        <Icon name="chart-timeline-variant" size={24} />
        <Icon name="heart-outline" size={24} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingVertical: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerDate: {
    fontSize: 16,
    color: '#666',
  },
  scrollView: {
    backgroundColor: '#fff',
  },
  listItem: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  listIcon: {
    marginRight: 15,
  },
  listTextContainer: {
    flex: 1,
  },
  listItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  listItemSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});

export default Home;