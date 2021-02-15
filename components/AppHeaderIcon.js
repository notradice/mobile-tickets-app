import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

export const AppHeaderIcon = (props) => (
  <HeaderButton
    {...props}
    iconSize={20}
    IconComponent={Ionicons}
    color={Platform.OS === "android" ? white : "black"}
  />
);
