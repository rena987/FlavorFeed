// AddReview.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AddReview = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Add Review screen!</Text>
      {/* Add your review-related UI components and logic here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddReview;