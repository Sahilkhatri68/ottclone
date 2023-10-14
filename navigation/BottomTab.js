import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Explore from '../screens/Explore';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import {Dimensions, Text, View} from 'react-native';
const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const BottomTab = ({}) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveBackgroundColor: 'red',
          tabBarActiveTintColor: '#FFF',

          tabBarStyle: {
            backgroundColor: 'black',
            margin: 5,
            height: 70,
            borderTopWidth: 0,
          },
        }}>
        <Tab.Screen
          name="explore"
          component={Explore}
          options={{
            tabBarIcon: ({}) => (
              <AntDesign name="playcircleo" color="white" size={25} />
            ),
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="search"
          component={Search}
          options={{
            tabBarIcon: ({}) => <Icon name="search" color="white" size={25} />,
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="profile"
          component={Profile}
          options={{
            tabBarIcon: ({}) => (
              <AntDesign name="user" color="white" size={25} />
            ),
            tabBarShowLabel: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTab;
