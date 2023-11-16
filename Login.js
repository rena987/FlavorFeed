// // Home.js
// import React from 'react';
// import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// const diningOptions = [
//   { id: 1, name: '57 north at Ikenberry', servingTime: 'Serving till 10PM' },
//   { id: 2, name: 'Caffeinator at Ikenberry', servingTime: 'Serving till 10PM' },
//   { id: 3, name: 'Field of Greens at Lincoln/Allen', servingTime: 'Serving till 10PM' },
//   { id: 4, name: 'ISR Dining Centre', servingTime: 'Serving till 10PM' },
// ];

// const Login = ({navigation}) => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Login Screen</Text>
//       <TextInput placeholder="Username" style={{ height: 40, margin: 12, borderWidth: 1, padding: 10 }} />
//       <TextInput placeholder="Password" secureTextEntry style={{ height: 40, margin: 12, borderWidth: 1, padding: 10 }} />
//       <Button
//         title="Log in"
//         onPress={() => navigation.navigate('Home')}
//       />
//     </View>
//   );
// };


// export default Login;
// screens/LoginScreen.js
// screens/LoginScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
  const handleLoginPress = () => {
    // TODO: Validate credentials
    navigation.navigate('Home'); // Navigate to the Home screen after pressing the Login button
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
    backgroundColor: 'black', // Adjust the color to match your design
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
});

export default LoginScreen;
