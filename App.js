import * as React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Login from './Login';
import ProfileScreen from './ProfileScreen';
import PostLoginTabs from './PostLoginTabs';
import CaffinatorScreen from './Caffinator';
import Ikenberry57Screen from './Ikenberry57Screen';
import ReviewsScreen from './reviews';
import AddReview from './AddReview'; 
import { FavoritesProvider } from './FavoritesContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="PostLoginTabs" component={PostLoginTabs} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="57 North" component={Ikenberry57Screen} />
          <Stack.Screen name="Reviews" component={ReviewsScreen} />
          <Stack.Screen name="Caffeinator" component={CaffinatorScreen} />
          <Stack.Screen name="Add Review" component={AddReview} /> 
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
