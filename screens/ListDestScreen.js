import React, { useState } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { Ionicons, SimpleLineIcons, AntDesign } from "@expo/vector-icons";
import { DATA } from "../data";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { BuyModal } from "../components/BuyModal";

export const ListDestScreen = ({ navigation }) => {
  const [buyModal, setBuyModal] = useState(false);

  const [viewMode, setViewMode] = useState(null);
  const [onePrice, setOnePrice] = useState(0);

  const [counterAdults, setCounterAdults] = useState(0);
  const [counterKids, setCounterKids] = useState(0);

  const postId = navigation.getParam("postId");
  const post = DATA.find((p) => p.id === postId);

  const dicrement = () => {
    if (counterKids <= 0) return;
    setCounterKids(counterKids - 1);
  };

  const dicrementAdult = () => {
    if (!counterAdults) return;
    setCounterAdults(counterAdults - 1);
  };

  let price = (
    <View style={{ flexDirection: "row" }}>
      <Text style={styles.containerData}>
        Стоимость билета:
        {post.price * (counterAdults + counterKids / 2) + onePrice}$
      </Text>
      <Text style={styles.containerData}>Время в пути: {post.time}</Text>
    </View>
  );

  return (
    <ScrollView backgroundColor="white">
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <Ionicons
            name="md-arrow-back"
            size={35}
            color="black"
            onPress={() => navigation.goBack()}
          />
          <SimpleLineIcons
            name="settings"
            size={28}
            color="black"
            onPress={() => navigation.push("Account")}
          />
        </View>
        <View style={styles.mainContainer}>
          <Text
            style={[
              styles.containerData,
              {
                fontFamily: "Mont-Bold",
                fontSize: 25,
              },
            ]}>
            {post.name}
          </Text>
          {price}
        </View>
        <Text
          style={{
            paddingHorizontal: 30,
            fontFamily: "Mont-Bold",
            fontSize: 25,
            paddingTop: 20,
            paddingBottom: 40,
          }}>
          Билеты:
        </Text>
        <View style={{ marginBottom: 35 }}>
          <View
            style={{
              backgroundColor: "#F5F7FA",
              width: 350,
              height: 330,
              paddingHorizontal: 30,
              paddingTop: 30,
              justifyContent: "center",
              alignSelf: "center",
            }}>
            <View style={styles.listOfTickets}>
              <Text
                style={{
                  fontFamily: "Mont-Bold",
                  fontSize: 16,
                  paddingBottom: 21,
                }}>
                Билеты
              </Text>
              <View style={styles.lineStyle}>
                <View>
                  <Text>Взрослые</Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}>
                  <View style={styles.oval}>
                    <AntDesign
                      name="plus"
                      size={20}
                      onPress={() => setCounterAdults(counterAdults + 1)}
                    />
                  </View>
                  <Text>{counterAdults}</Text>
                  <View style={styles.oval}>
                    <AntDesign
                      name="minus"
                      size={20}
                      onPress={dicrementAdult}
                    />
                  </View>
                </View>
              </View>

              <View style={styles.lineStyle}>
                <View>
                  <Text>Дети</Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}>
                  <View style={styles.oval}>
                    <AntDesign
                      name="plus"
                      size={20}
                      onPress={() => setCounterKids(counterKids + 1)}
                    />
                  </View>
                  <Text>{counterKids}</Text>
                  <View style={styles.oval}>
                    <AntDesign name="minus" size={20} onPress={dicrement} />
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.listOfTickets}>
              <Text
                style={{
                  fontFamily: "Mont-Bold",
                  fontSize: 16,
                  paddingBottom: 21,
                }}>
                Пропуск
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingBottom: 10,
                }}>
                <Text
                  style={{ color: viewMode == "chart" ? "green" : "silver" }}>
                  Дневной (24 часа)
                </Text>
                <TouchableOpacity
                  activeOpacity={0.3}
                  style={{
                    backgroundColor: viewMode == "chart" ? "#BFCFDC" : null,
                    borderRadius: 20,
                    padding: 10,
                  }}
                  onPress={() => {
                    setViewMode("chart");
                    setOnePrice(20);
                  }}
                  onLongPress={() => {
                    setViewMode("null");
                    setOnePrice(0);
                  }}>
                  <Text>{viewMode == "chart" ? "Выбрано" : "Выбрать"}</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                <Text
                  style={{ color: viewMode == "list" ? "green" : "silver" }}>
                  На месяц
                </Text>
                <TouchableOpacity
                  activeOpacity={0.3}
                  style={{
                    backgroundColor: viewMode == "list" ? "#BFCFDC" : null,
                    borderRadius: 20,
                    padding: 10,
                  }}
                  onPress={() => {
                    setViewMode("list");
                    setOnePrice(50);
                  }}
                  onLongPress={() => {
                    setViewMode("null");
                    setOnePrice(0);
                  }}>
                  <Text>{viewMode == "list" ? "Выбрано" : "Выбрать"}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row", width: "100%" }}>
          <TouchableOpacity
            style={styles.buttonBack}
            onPress={() => navigation.goBack()}>
            <Text style={{ color: "white" }}>Назад</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={counterAdults === 0}
            style={[
              styles.buttonBack1,
              { backgroundColor: counterAdults === 0 ? "silver" : "green" },
            ]}
            onPress={() => setBuyModal(true)}>
            <Text style={{ color: "white" }}>Купить</Text>
          </TouchableOpacity>
        </View>
        <BuyModal visible={buyModal} onCancel={() => setBuyModal(false)} />
      </View>
    </ScrollView>
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
    paddingBottom: 50,
    paddingTop: 35,
  },
  mainContainer: {
    marginBottom: 20,
    paddingHorizontal: 30,
    alignItems: "center",
  },
  containerData: {
    paddingBottom: 20,
    paddingRight: 20,
  },
  buttonBack: {
    shadowColor: "blue",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    backgroundColor: "orange",
    width: Dimensions.get("window").width / 2,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    alignSelf: "center",
  },
  buttonBack1: {
    shadowColor: "blue",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    width: Dimensions.get("window").width / 2,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    alignSelf: "center",
  },
  listOfTickets: {
    paddingBottom: 36,
  },
  textPadding: {
    paddingTop: 10,
  },
  oval: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: "#BFCFDC",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  lineStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 14,
  },
});
