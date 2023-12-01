// AddReview.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Alert } from 'react-native';

const AddReview = () => {
  const [reviewText, setReviewText] = useState('');
  const [waitTime, setWaitTime] = useState('');
  const [overallRating, setOverallRating] = useState(0);

  const handleRatingPress = (rating) => {
    setOverallRating(rating);

  
  };

  const handleSubmitReview = () => {
    // Add logic to submit the review
    if (reviewText.trim() !== '' && waitTime.trim() !== '' && overallRating > 0) {
      //console.log('Review Submitted!');

      // Show a success message using Alert
      Alert.alert('Success', 'Review submitted successfully!', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    } else {
      // Show an error message if any required field is empty
      Alert.alert('Error', 'Please fill in all required fields.', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    }
  };


  return (
    <View style={styles.container}>
      <Image source={require('./57.jpg')} style={styles.ikenberryImage} />
      <Text style={styles.imageTitle}>Ikenberry 57 Dining Hall</Text>

      <TextInput
        style={styles.reviewTextInput}
        placeholder="Write a review here"
        multiline
        value={reviewText}
        onChangeText={(text) => setReviewText(text)}
      />

      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((index) => (
          <TouchableOpacity key={index} onPress={() => handleRatingPress(index)}>
            <Icon
              name={index <= overallRating ? 'star' : 'star-outline'}
              size={30}
              color="#FFD700" 
              style={styles.starIcon}
            />
          </TouchableOpacity>
        ))}
        <Text style={styles.ratingLabel}>Overall Rating</Text>
      </View>

      <View style={styles.waitTimeContainer}>
        <TextInput
          style={styles.waitTimeInput}
          placeholder="minutes"
          keyboardType="numeric"
          value={waitTime}
          onChangeText={(text) => setWaitTime(text)}
        />
        <Text style={styles.waitTimeLabel}>Wait Time</Text>
      </View>

      <TouchableOpacity style={styles.addContainer} onPress={() => console.log('Add Photos')}>
        <View style={styles.plusIconCircle}>
          <Icon name="plus" size={30} color="black" style={styles.plusIcon} />
        </View>
        <Text style={styles.addLabel}>Add Photos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.addContainer} onPress={() => console.log('Add Notes')}>
        <View style={styles.plusIconCircle}>
          <Icon name="plus" size={30} color="black" style={styles.plusIcon} />
        </View>
        <Text style={styles.addLabel}>Add Notes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmitReview}>
        <Text style={styles.submitButtonText}>Submit Review</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'flex-start', 
  },
  ikenberryImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  ikenberryImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  imageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 0,
    marginLeft: 70,
    marginBottom: 15,
  },
  reviewTextInput: {
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 20,
    padding: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  starIcon: {
    marginRight: 5,
  },
  ratingLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
  waitTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  waitTimeInput: {
    width: '50%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
  },
  waitTimeLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
  addContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  plusIconCircle: {
    backgroundColor: '#909090',
    borderRadius: 20,
    padding: 5,
    marginRight: 10,
  },
  plusIcon: {
    color: 'black',
    align: 'left',
  },
  addLabel: {
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#007FFF',
    padding: 15,
    borderRadius: 10,
    marginLeft: 100,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddReview;

