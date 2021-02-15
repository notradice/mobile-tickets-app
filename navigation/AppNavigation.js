import React from "react";
import { View } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { MainScreen } from "../screens/MainScreen";
import { BookingsScreen } from "../screens/BookingsScreen";
import { AccountScreen } from "../screens/AccountScreen";
import { ListDestScreen } from "../screens/ListDestScreen";

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const NavigatorOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#fff",
    },
    headerTintColor: "black",
    headerShown: false,
    gestureEnabled: false,
  },
};

const MainNavigation = createStackNavigator(
  {
    Search: MainScreen,
    Travel: ListDestScreen,
  },
  NavigatorOptions
);

const AccountNavigation = createStackNavigator(
  {
    Account: AccountScreen,
    Travel: ListDestScreen,
  },
  NavigatorOptions
);

const BookingsNavigation = createStackNavigator(
  {
    Bookings: BookingsScreen,
    Travel: ListDestScreen,
  },
  NavigatorOptions
);

const bottomTabsConfig = {
  Search: {
    screen: MainNavigation,
    navigationOptions: {
      tabBarLabel: "Поиск",
      tabBarIcon: (info) => (
        <FontAwesome name="circle" size={25} color={info.tintColor} />
      ),
      barStyle: {
        backgroundColor: "#7D67EC",
      },
    },
  },
  Bookings: {
    screen: BookingsNavigation,
    navigationOptions: {
      tabBarLabel: "Билеты",
      tabBarIcon: (info) => (
        <FontAwesome name="circle" size={25} color={info.tintColor} />
      ),
      barStyle: {
        backgroundColor: "orange",
      },
      activeColor: "white",
      inActiveColor: "grey",
    },
  },
  Account: {
    screen: AccountNavigation,
    navigationOptions: {
      tabBarLabel: "Профиль",
      tabBarIcon: (info) => (
        <FontAwesome name="circle" size={25} color={info.tintColor} />
      ),
      barStyle: {
        backgroundColor: "#DB1D4B",
      },
    },
  },
};

const BottomNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(bottomTabsConfig, {
        activeTintColor: "#fff",
        shifting: false,
      })
    : createBottomTabNavigator(bottomTabsConfig, {
        tabBarOptions: {
          activeTintColor: "#FF4773",
          inactiveTintColor: "grey",
        },
      });

const MainNavigator = createDrawerNavigator(
  {
    Search: {
      screen: BottomNavigator,
      navigationOptions: {
        drawerLabel: "Поиск",
        drawerIcon: <Ionicons name="ios-search" size={22} />,
      },
    },
    Bookings: {
      screen: BookingsNavigation,
      navigationOptions: {
        drawerLabel: "Бронирования",
        drawerIcon: <Ionicons name="ios-bookmark" size={22} />,
      },
    },
    Account: {
      screen: AccountNavigation,
      navigationOptions: {
        drawerLabel: "Профиль",
        drawerIcon: <MaterialCommunityIcons name="account" size={22} />,
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: "black",
      labelStyle: {
        fontSize: 25,
      },
    },
  }
);

export const AppNavigation = createAppContainer(MainNavigator);
