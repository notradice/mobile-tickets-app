import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { ListDestScreen } from "../screens/ListDestScreen";
import SwipeView from "react-native-swipeview";

export const Post = ({ post, openPostHandler }) => {
  return (
    <TouchableOpacity activeOpacity={0.4} onPress={() => openPostHandler(post)}>
      <View style={styles.component}>
        <View style={styles.oval}></View>
        <View style={styles.nameTime}>
          <Text style={styles.textName}>{post.name}</Text>
          <Text>{post.time}</Text>
        </View>
        <Text style={styles.price}>{post.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  oval: {
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: "#BFCFDC",
    paddingRight: 20,
    marginRight: 17,
  },
  component: {
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
  textH1: {
    fontSize: 24,
    paddingLeft: 31,
    paddingBottom: 5,
  },
  nameTime: {
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  price: {
    paddingLeft: 30,
    fontSize: 20,
    fontWeight: "600",
  },
  textName: {
    fontWeight: "600",
    paddingBottom: 5,
  },
});
