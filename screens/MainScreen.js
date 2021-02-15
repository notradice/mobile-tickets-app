import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import Chance from "chance";

import { Entypo, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import { EditModal } from "../components/EditModal";

let chance = new Chance();

export const MainScreen = ({ navigation }) => {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [choosedCities, setChoosedCities] = useState({
    cityTo: "",
    cityFrom: "",
  });

  const changeCity = () => {
    setChoosedCities({
      cityTo: choosedCities.cityFrom,
      cityFrom: choosedCities.cityTo,
    });
  };

  const onCityChange = (value, type) =>
    setChoosedCities({
      ...choosedCities,
      [type]: value,
    });

  const disabled = !choosedCities.cityTo || !choosedCities.cityFrom;

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Entypo
          name="menu"
          size={35}
          color="black"
          onPress={() => navigation.toggleDrawer()}
        />
        <SimpleLineIcons
          name="settings"
          size={28}
          color="black"
          onPress={() => navigation.push("Account")}
        />
      </View>
      <ScrollView>
        <View>
          <View style={styles.titleWrapper}>
            <Text style={styles.titleSubtitle}>hi.</Text>

            <Text style={styles.titlesTitle}>Куда направляемся,</Text>
            <Text style={styles.titlesTitle}>
              {choosedCities.cityTo ? (
                <Text>в {choosedCities.cityTo}? Окей.</Text>
              ) : (
                <Text>может в {chance.country({ full: true })}?</Text>
              )}
            </Text>
          </View>

          <EditModal
            onCityChange={onCityChange}
            visible={modal}
            modalType={modalType}
            choosedCities={choosedCities}
            onCancel={() => setModal(false)}
          />

          <TouchableOpacity
            onPress={() => {
              setModal(true);
              setModalType("cityFrom");
            }}
            style={styles.choose}>
            <Text>
              {choosedCities.cityFrom ? choosedCities.cityFrom : "Откуда"}
            </Text>
            <MaterialIcons
              name="my-location"
              size={30}
              color="black"
              onPress={() => navigation.navigate("Search")}
              style={{
                flexDirection: "row",
                position: "absolute",
                top: "30%",
                right: "7%",
                color: "#BFCFDC",
              }}
            />
          </TouchableOpacity>

          <View style={styles.icons}>
            <MaterialIcons
              style={styles.icons}
              name="find-replace"
              color="grey"
              size={25}
              onPress={changeCity}
            />
          </View>

          <TouchableOpacity
            style={[styles.choose, { marginTop: 20 }]}
            onPress={() => {
              setModal(true);
              setModalType("cityTo");
            }}>
            <Text>{choosedCities.cityTo ? choosedCities.cityTo : "Куда"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyles}
            color="white"
            onPress={() => {
              navigation.navigate("Bookings");
            }}
            disabled={disabled}>
            <Text
              style={{
                color: "white",
                fontFamily: "Mont-Medium",
              }}>
              Смотреть варианты
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    paddingBottom: 60,
    paddingTop: 35,
  },
  titleWrapper: {
    paddingHorizontal: 30,
    paddingBottom: 40,
  },
  titleSubtitle: {
    fontSize: 32,
    paddingBottom: 12,
    fontFamily: "Mont-Bold",
  },
  titlesTitle: {
    fontSize: 24,
    paddingBottom: 5,
    fontFamily: "Mont-Medium",
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
  // buttonStyles: {
  //   backgroundColor: Platform.OS === "android" ? "transparent" : "#4E4E4E",
  //   borderRadius: 4,
  //   marginHorizontal: 30,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   height: 60,
  // },
  buttonStyles: {
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    marginTop: 30,
    marginHorizontal: 30,
    borderRadius: 4,
  },
  choose: {
    backgroundColor: "white",
    color: "black",
    alignItems: "flex-start",
    justifyContent: "center",
    height: 80,
    paddingLeft: 26,
    marginHorizontal: 30,
    borderRadius: 4,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#BFCFDC",
  },
  icons: {
    alignSelf: "center",
    color: "#BFCFDC",
  },
});
