// Home.js
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const diningOptions = [
  { id: 1, name: '57 north at Ikenberry', servingTime: 'Serving till 10PM' },
  { id: 2, name: 'Caffeinator at Ikenberry', servingTime: 'Serving till 10PM' },
  { id: 3, name: 'Field of Greens at Lincoln/Allen', servingTime: 'Serving till 10PM' },
  { id: 4, name: 'ISR Dining Centre', servingTime: 'Serving till 10PM' },
];

const Login = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <TextInput placeholder="Username" style={{ height: 40, margin: 12, borderWidth: 1, padding: 10 }} />
      <TextInput placeholder="Password" secureTextEntry style={{ height: 40, margin: 12, borderWidth: 1, padding: 10 }} />
      <Button
        title="Log in"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};


export default Login;