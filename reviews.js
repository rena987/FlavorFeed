import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ReviewsScreen = () => {
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
    const filledStars = Array.from({ length: rating }, (_, index) => (
      <Icon key={index} name="star" size={20} color="gold" style={styles.starIcon} />
    ));
    const emptyStars = Array.from({ length: 5 - rating }, (_, index) => (
      <Icon key={index} name="star-outline" size={20} color="gold" style={styles.starIcon} />
    ));
    return [...filledStars, ...emptyStars];
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
});

export default ReviewsScreen;



