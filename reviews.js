import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const ReviewsScreen = () => {
  const navigation = useNavigation();

  // Dummy data for example reviews with timestamps
  const reviews = [
    { rating: 5, text: 'Excellent food and service! Highly recommended.', timestamp: '30 minutes ago' },
    { rating: 4, text: 'Good variety of options. Quick line times.', timestamp: '1 hour ago' },
    { rating: 3, timestamp: '3 hours ago' },
    { rating: 4, text: 'This is an example review', timestamp: '12 hours ago' },
    { rating: 5, text: 'This is an example review', timestamp: '1 day ago' },
  ];

  // Function to render star icons based on rating
  const renderRatingStars = (rating) => {
    const filledStarsCount = Math.min(rating, 5);
    const filledStars = Array.from({ length: filledStarsCount }, (_, index) => (
      <Icon key={`filled-${index}`} name="star" size={20} color="gold" style={styles.starIcon} />
    ));
    const emptyStarsCount = Math.max(5 - filledStarsCount, 0);
    const emptyStars = Array.from({ length: emptyStarsCount }, (_, index) => (
      <Icon key={`empty-${index}`} name="star-outline" size={20} color="gold" style={styles.starIcon} />
    ));
    return [...filledStars, ...emptyStars];
  };

  // Function to handle the "Explore More Dining Halls" button press
  const handleExploreMorePress = () => {
    navigation.navigate('Home'); // Update with the correct screen name
  };

  return (
    <ScrollView style={styles.container}>
      {/* Dining Hall Title */}
      <Text style={styles.title}>Ikenberry 57 North</Text>

      {/* Average Rating Section */}
      <View style={styles.averageRatingContainer}>
        <View style={styles.giantStarContainer}>
          <Text style={styles.giantStarRating}>4.0</Text>
        </View>
        <Text style={styles.subtitle}>Average Rating</Text>
      </View>

      {/* Subtitle: Reviews */}
      <Text style={styles.reviewsSubtitle}>Reviews</Text>

      {/* Example Reviews */}
      <View style={styles.reviewsContainer}>
        {reviews.map((review, index) => (
          <View key={index} style={styles.reviewItem}>
            {/* Profile Icon Rating */}
            <View style={styles.profileIconContainer}>
              <Icon name="account-circle" size={40} color="black" style={styles.profileIcon} />
              <View style={styles.ratingInfo}>
                <Text style={styles.nameText}>John Doe</Text>
                <View style={styles.starRatingContainer}>{renderRatingStars(review.rating)}</View>
              </View>
              <Text style={styles.timestamp}>{review.timestamp}</Text>
            </View>
            {/* Review Text */}
            <Text style={styles.reviewText}>{review.text}</Text>
          </View>
        ))}
      </View>

      {/* Explore More Dining Halls Button */}
      <TouchableOpacity
        style={styles.exploreMoreButton}
        onPress={handleExploreMorePress}
      >
        <Text style={styles.exploreMoreButtonText}>
          Explore More Dining Halls
          <Icon name="home" size={20} color="#007FFF" style={styles.homeIcon} />
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  giantStarContainer: {
    alignItems: 'center',
  },
  giantStarRating: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'gold',
  },
  subtitle: {
    fontSize: 16,
    color: 'black',
  },
  reviewsSubtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  profileIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    marginRight: 10,
  },
  ratingInfo: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  nameText: {
    fontSize: 14,
    color: 'black',
    marginBottom: 5,
  },
  starRatingContainer: {
    flexDirection: 'row',
  },
  starIcon: {
    marginRight: 5,
  },
  timestamp: {
    fontSize: 12,
    color: 'gray',
    marginLeft: 'auto',
  },
  averageRatingContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  reviewsContainer: {
    marginTop: 20,
  },
  reviewItem: {
    marginBottom: 20,
  },
  reviewText: {
    fontSize: 16,
    color: 'black',
  },
  exploreMoreButton: {
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'transparent',
  },
  exploreMoreButtonText: {
    fontSize: 18,
    color: '#007FFF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  homeIcon: {
    marginRight: 30,
  },
});

export default ReviewsScreen;
