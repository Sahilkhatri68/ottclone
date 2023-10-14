import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Explore from '../screens/Explore';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import {Text, View} from 'react-native';
const Tab = createBottomTabNavigator();

const BottomTab = ({}) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="explore" component={Explore} />
        <Tab.Screen name="search" component={Search} />
        <Tab.Screen name="profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTab;
