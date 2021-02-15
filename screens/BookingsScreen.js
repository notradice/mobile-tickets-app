import React from "react";
import { View, StyleSheet, Text, SafeAreaView, ScrollView } from "react-native";

import { Octicons, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { DATA } from "../data";
import { PostList } from "../components/PostList";
import { ListDestScreen } from "./ListDestScreen";
import { BottomNavigation } from "react-native-paper";

export const BookingsScreen = ({ navigation }) => {
  const openPostHandler = (post) => {
    navigation.navigate("Travel", {
      postId: post.id,
    });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <Ionicons
            name="md-arrow-back"
            size={35}
            color="black"
            onPress={() => navigation.push("Search")}
          />
          <SimpleLineIcons
            name="settings"
            size={28}
            color="black"
            onPress={() => navigation.push("Account")}
          />
        </View>
      </SafeAreaView>
      <PostList data={DATA} openPostHandler={openPostHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingBottom: 25,
    paddingTop: 35,
    backgroundColor: "white",
    shadowColor: "silver",
    shadowOpacity: 0.6,
    shadowRadius: 10,
  },
  titleWrapper: {
    paddingHorizontal: 30,
    paddingBottom: 58,
  },
  titleSubtitle: {
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 12,
  },
  titlesTitle: {
    fontSize: 24,
    paddingBottom: 5,
  },
  Destination: {
    paddingHorizontal: 30,
    paddingBottom: 51,
  },
  textarea: {
    borderWidth: 1,
    borderColor: "#BFCFDC",
    fontSize: 20,
    height: 56,
    borderRadius: 4,
    marginBottom: 14,
    paddingLeft: 26,
  },
  location: {
    position: "absolute",
    top: "20%",
    right: "5%",
    color: "grey",
  },
  buttonStyles: {
    borderRadius: 4,
    backgroundColor: "#4E4E4E",
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
  },
});
