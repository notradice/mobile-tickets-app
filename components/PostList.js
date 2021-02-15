import React from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Post } from "./Post";

export const PostList = ({ data, openPostHandler }) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={(post) => post.id.toString()}
      renderItem={({ item }) => (
        <Post post={item} openPostHandler={openPostHandler} />
      )}
    />
  );
};
