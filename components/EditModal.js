import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, Modal, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { DATA } from "../data";
import { DestIn } from "./DestIn";

const dest = [
  { id: "1", name: "Минск" },
  { id: "2", name: "Гомель" },
  { id: "3", name: "Брест" },
  { id: "4", name: "Витебск" },
  { id: "5", name: "Гродно" },
  { id: "6", name: "Москва" },
  { id: "7", name: "Польша" },
];

export const EditModal = ({
  visible,
  onCancel,
  onCityChange,
  modalType,
  choosedCities,
}) => {
  const chooseCity = (value) => {
    onCityChange(value, modalType);
    onCancel();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={false}
      presentationStyle="pageSheet">
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "white",
        }}>
        <Text style={styles.headerTitle}>
          {modalType === "cityTo" ? "Куда едем?" : "Откуда едем?"}
        </Text>

        <DestIn
          choosedCities={choosedCities[modalType]}
          chooseCity={chooseCity}
          data={dest}
        />

        <View style={styles.buttonStyles}>
          <TouchableOpacity onPress={onCancel}>
            <Text style={{ color: "white", fontFamily: "Mont-Medium" }}>
              Вернуться назад
            </Text>
          </TouchableOpacity>
          {/* <Button color="white" title="Вернуться назад" onPress={onCancel} /> */}
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    paddingVertical: 60,
    paddingLeft: 30,
    fontFamily: "Mont-Medium",
    fontSize: 24,
  },
  buttonStyles: {
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    marginHorizontal: 30,
    borderRadius: 4,
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    color: "white",
  },
});
