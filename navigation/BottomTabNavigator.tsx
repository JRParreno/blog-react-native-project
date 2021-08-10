/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { PixelRatio, Platform } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/Home/HomeScreen';
import LoginScreen from '../screens/Profile/LoginScreen';
import RegisterScreen from '../screens/Profile/RegisterScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, HomeParamList, TabTwoParamList, NonAuthParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{
        activeTintColor: 'white', showLabel: false, keyboardHidesTabBar: true,
        style: {
          backgroundColor: '#262626',
          // paddingTop: Platform.OS === 'ios' ? 10 : 0,
          height: PixelRatio.getPixelSizeForLayoutSize(30),
          borderRadius: 20,
          position: 'absolute',
          right: 20,
          left: 20,
          bottom: 20,
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 0
        }
      }}

    >
      <BottomTab.Screen
        name="HomeScreen"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="person-circle-outline" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function TabOneNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home' }}
      />
    </HomeStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<NonAuthParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator screenOptions={{ headerShown: false }}>
      <TabTwoStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerTitle: 'Login' }}
      />
      <TabTwoStack.Screen
        name="Registration"
        component={RegisterScreen}
        options={{ headerTitle: 'Register' }}
      />
    </TabTwoStack.Navigator>
  );
}
