import React from 'react';
import { FlatListComponent, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import Home from './Home';
import FavoritesScreen from './FavoritesScreen';
import ActivityScreen from './ActivityScreen';

const PostLoginTabs = () => {
    const navigation = useNavigation();
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: route.name == 'Home' ? false : true, 
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let iconSize = 20;
                    let iconColor = focused ? 'black' : 'gray';

                    if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Activity') {
                    iconName = focused ? 'ios-list' : 'ios-list-outline';
                    } else if (route.name === 'Favorites') {
                    iconName = focused ? 'heart' : 'heart-outline';
                    }

                    return <Ionicons name={iconName} size={iconSize} color={iconColor} />;
                },
                tabBarInactiveBackgroundColor: '#ddd',
                tabBarActiveBackgroundColor: '#ddd',
            })}
        >
            <Tab.Screen name="Home" component={Home} screenOptions={{ headerShown: false }}/>
            <Tab.Screen 
                name="Activity" 
                component={ActivityScreen}
                options={{
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ marginLeft: 10 }}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                    headerTitle: "Your Activity",
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#ddd', 
                    },
                }} />
            <Tab.Screen 
                name="Favorites" 
                component={FavoritesScreen}
                options={{
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ marginLeft: 10 }}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                    headerTitle: "Your Favorites",
                    headerTitleAlign: 'center', 
                    headerStyle: {
                        backgroundColor: '#ddd', 
                    },
                }}
            />
        </Tab.Navigator>

    );
  }

export default PostLoginTabs;