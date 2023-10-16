import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthNav from './AuthNav';
const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={AuthNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;

const styles = StyleSheet.create({});
