import React from "react";
import { useState } from "react";
import { Keyboard } from "react-native";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  keyboard,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export const Dest = ({ dest, chooseCity, choosedCities }) => {
  const isActive = choosedCities === dest.name;

  return (
    <TouchableOpacity activeOpacity={0.2} onPress={() => chooseCity(dest.name)}>
      <View>
        <View
          style={[
            styles.list,
            {
              backgroundColor: isActive ? "#ffdee5" : "white",
            },
          ]}>
          <Text style={styles.text}>{dest.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  list: {
    height: 80,
    borderRadius: 4,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 17,
    borderWidth: 1,
    borderColor: "#BFCFDC",
    marginHorizontal: 30,
    paddingHorizontal: 30,
  },
  text: {
    fontFamily: "Mont-Medium",
    fontSize: 17,
  },
});
