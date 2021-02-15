import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { AddCard } from "../components/AddCard";

const banks = [
  { id: "1", name: "Bank 1" },
  { id: "2", name: "Bank 2" },
  { id: "3", name: "Bank 3" },
  { id: "4", name: "Bank 4" },
];

const onChange = (form) => console.log(form);

export const AccountScreen = ({ navigation }) => {
  // const [info, setInfo] = useState({
  //   number: "",
  //   name: "",
  //   cvc: "",
  //   day: "",
  //   month: "",
  //   year: "",
  // });

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View>
          <View style={styles.headerWrapper}>
            <Entypo
              name="menu"
              size={35}
              color="black"
              onPress={() => navigation.toggleDrawer()}
            />
            <Ionicons
              name="arrow-back"
              size={35}
              color="black"
              onPress={() => navigation.goBack()}
            />
          </View>
          <Text style={styles.titleSubtitle}>Добавьте способ оплаты:</Text>

          <AddCard />

          <View style={styles.paymentCardBack}></View>
          <TouchableOpacity style={styles.addCardButton}>
            <Text
              style={{
                color: "white",
                fontFamily: "Mont-Medium",
                fontSize: 15,
              }}>
              Добавить карту
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  titleWrapper: {
    paddingHorizontal: 30,
    paddingBottom: 58,
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingBottom: 50,
    paddingTop: 35,
  },
  oval: {
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: "#BFCFDC",
    paddingRight: 20,
    marginRight: 17,
  },

  titleSubtitle: {
    fontSize: 32,
    fontFamily: "Mont-Bold",
    paddingHorizontal: 30,
    paddingBottom: 36,
    paddingRight: 20,
  },
  addingCardForm: {
    flex: 1,
    marginHorizontal: 30,
  },
});
