import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native";
import { Dest } from "../components/Dest";

export const DestIn = ({ data, chooseCity, choosedCities }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(dest) => dest.id}
      renderItem={({ item }) => (
        <Dest
          choosedCities={choosedCities}
          chooseCity={chooseCity}
          dest={item}
        />
      )}
    />
  );
};
