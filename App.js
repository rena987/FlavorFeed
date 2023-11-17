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
import Ikenberry57Screen from './Ikenberry57Screen';
import ReviewsScreen from './reviews';
import CaffinatorScreen from './Caffinator';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="PostLoginTabs" component={PostLoginTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="57 North" component={Ikenberry57Screen} />
        <Stack.Screen name="Reviews" component={ReviewsScreen} />
        <Stack.Screen name="Caffeinator" component={CaffinatorScreen} />

      </Stack.Navigator>
    </NavigationContainer>
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
