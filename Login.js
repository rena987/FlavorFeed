
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
  const handleLoginPress = () => {
    // TODO: Validate credentials
    navigation.navigate('PostLoginTabs');
    navigation.reset({
        index: 0,
        routes: [{ name: 'PostLoginTabs' }],
      });
  };

  return (
    <View style={styles.container}>
      {/*<Image source={require('/Users/ananyaagarwal_1/FlavorFeed/logo.jpg')} style={styles.logo}/>*/}

      <Text style={styles.title}>FlavorFeed</Text>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>or login using</Text>
      <View style={styles.socialIcons}>
        <FontAwesome name="google" size={24} style={styles.icon} />
        <FontAwesome name="apple" size={24} style={styles.icon} />
        <FontAwesome name="twitter" size={24} style={styles.icon} />
        <FontAwesome name="facebook" size={24} style={styles.icon} />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>forgot password?</Text>
      </TouchableOpacity>
    </View>
     
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
  },
  loginButton: {
    width: '100%',
    backgroundColor: 'black', 
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    marginVertical: 20,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  icon: {
    marginHorizontal: 10,
  },
  forgotPassword: {
    color: 'blue',
    marginBottom: 20, // Add space below the forgot password link
  },
  logo: {
    width: 150, // Set the width of your logo
    height: 150, // Set the height of your logo
    resizeMode: 'contain', // This ensures the aspect ratio is kept without distortion
    marginBottom: 20, // Optional: adds some space below your logo
  },
});

export default LoginScreen;
