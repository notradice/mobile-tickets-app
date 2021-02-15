import React, { useState } from "react";
import { Image } from "react-native";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { Entypo, Feather, Ionicons } from "@expo/vector-icons";

import RNPickerSelect from "react-native-picker-select";
import { TextInputMask } from "react-native-masked-text";

export const AddCard = () => {
  const [info, setInfo] = useState({
    id: Date.now().toString(),
    number: "1234567800000000",
    name: "Alex",
    cvc: "123",
    day: "",
    month: "",
    year: "",
  });

  const [addedCards, setAddedCards] = useState([]);
  const [selectedCardNumber, setSelectedCardNumber] = useState(null);

  const onChangeInput = (value, type) =>
    setInfo({
      ...info,
      [type]: value,
    });

  const validate = () => {
    if (info.cvc.length < 3) {
      Alert.alert("Ошибка", "Укажите правильный код карты");
      return false;
    }

    if (info.number.length < 16) {
      Alert.alert("Ошибка", "Укажите правильный номер карты");
      return false;
    }
    return true;
  };

  const deleteCard = (id) => {
    const filteredCards = addedCards.filter((card) => card.id !== id);
    setAddedCards(filteredCards);
  };

  const addCard = () => {
    const isValidate = validate();
    if (!isValidate) {
      return;
    }

    const cards = [...addedCards];
    cards.push(info);
    setAddedCards(cards);
    setInfo({
      number: "",
      name: "",
      cvc: "",
      day: "",
      month: "",
      year: "",
    });
    setSelectedCardNumber(info.number);
  };
  return (
    <View style={styles.addingCardForm}>
      <View style={styles.shadowCardForm}>
        <View style={styles.formAddCardInfoRow}>
          <Text style={styles.textInputStyle}>Номер карты:</Text>
          <Text style={styles.textInputStyle}>CVC:</Text>
        </View>
        <View style={styles.formAddCardInfoRow}>
          <TextInputMask
            type={"credit-card"}
            options={{
              obfuscated: false,
              issuer: "visa-or-mastercard",
            }}
            onChangeText={(val) => onChangeInput(val, "number")}
            value={info.number}
            keyboardType="number-pad"
            maxLength={16}
            style={{
              backgroundColor: "#f0f0f0",
              width: "70%",
              height: 50,
              borderRadius: 5,
              paddingLeft: 10,
              paddingRight: 8,
            }}
            placeholder="Введите номер карты"></TextInputMask>

          <TextInput
            onChangeText={(val) => onChangeInput(val, "cvc")}
            value={info.cvc}
            keyboardType="number-pad"
            maxLength={3}
            style={{
              backgroundColor: "#f0f0f0",
              width: "21%",
              height: 50,
              borderRadius: 5,
              paddingLeft: 10,
              paddingRight: 8,
            }}
            placeholder="Код"></TextInput>
        </View>

        <View style={styles.formAddCardInfoColumn}>
          <Text style={styles.textInputStyle}>Имя держателя карты:</Text>
          <TextInput
            onChangeText={(val) => onChangeInput(val, "name")}
            value={info.name}
            autoCorrect={false}
            autoCapitalize="characters"
            maxLength={31}
            style={{
              backgroundColor: "#f0f0f0",
              width: "100%",
              height: 50,
              borderRadius: 5,
              paddingLeft: 10,
              paddingRight: 8,
            }}
            placeholder="Введите Имя держателя карты"></TextInput>
        </View>

        <View style={styles.formAddCardInfoColumn}>
          <Text style={styles.textInputStyle}>Срок действия:</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginBottom: 20,
            }}>
            <View
              style={{
                backgroundColor: "#f0f0f0",
                width: 100,
                height: 50,
                marginLeft: -10,
                borderRadius: 5,
                paddingLeft: 10,
                alignItems: "center",
                justifyContent: "center",
              }}>
              <RNPickerSelect
                onValueChange={(val) => onChangeInput(val, "day")}
                placeholder={{ label: "День", day: null }}
                items={[
                  { label: "1", value: "1" },
                  { label: "2", value: "2" },
                  { label: "3", value: "3" },
                  { label: "4", value: "4" },
                  { label: "5", value: "5" },
                ]}
              />
            </View>
            <View
              style={{
                backgroundColor: "#f0f0f0",
                width: 100,
                height: 50,
                borderRadius: 5,
                paddingLeft: 10,
                alignItems: "center",
                justifyContent: "center",
              }}>
              <RNPickerSelect
                onValueChange={(val) => onChangeInput(val, "month")}
                placeholder={{ label: "Месяц", month: null }}
                items={[
                  { label: "Январь", value: "Январь" },
                  { label: "Ферваль", value: "Ферваль" },
                  { label: "Март", value: "Март" },
                  { label: "Апрель", value: "Апрель" },
                  { label: "Май", value: "Май" },
                  { label: "Июнь", value: "Июнь" },
                  { label: "Июль", value: "Июль" },
                  { label: "Август", value: "Август" },
                  { label: "Сентябрь", value: "Сентябрь" },
                  { label: "Октябрь", value: "Октябрь" },
                  { label: "Ноябрь", value: "Ноябрь" },
                  { label: "Декабрь", value: "Декабрь" },
                ]}
              />
            </View>
            <View
              style={{
                backgroundColor: "#f0f0f0",
                width: 100,
                height: 50,
                borderRadius: 5,
                paddingLeft: 10,
                marginRight: -10,
                alignItems: "center",
                justifyContent: "center",
              }}>
              <RNPickerSelect
                onValueChange={(val) => onChangeInput(val, "year")}
                placeholder={{ label: "Год", year: null }}
                items={[
                  { label: "2021", value: "2021" },
                  { label: "2022", value: "2022" },
                  { label: "2023", value: "2023" },
                  { label: "2024", value: "2024" },
                  { label: "2025", value: "2025" },
                ]}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.paymentCardBack}></View>
      <TouchableOpacity onPress={addCard} style={styles.addCardButton1}>
        <Text
          style={{
            color: "white",
            fontFamily: "Mont-Medium",
            fontSize: 15,
          }}>
          Добавить карту
        </Text>
      </TouchableOpacity>

      <View>
        <Text style={styles.myCardsView}>Добавленные карты:</Text>

        {addedCards.length ? (
          addedCards.map((card, index) => (
            <View style={styles.addedCardView}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingHorizontal: 10,
                }}>
                <Image
                  resizeMode="contain"
                  style={{ width: 35, height: 35 }}
                  source={{
                    uri:
                      "https://icons-for-free.com/iconfiles/png/512/card+credit+card+debit+card+master+card+icon-1320184902079563557.png",
                  }}
                />
                <Text style={{ fontFamily: "Mont-Bold", fontSize: 15 }}>
                  {card.number}
                </Text>
                <View
                  style={{
                    width: "25%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}>
                  <Ionicons
                    color={
                      selectedCardNumber === card.number ? "green" : "black"
                    }
                    size="35"
                    name={
                      selectedCardNumber === card.number
                        ? "radio-button-on"
                        : "radio-button-off"
                    }
                    onPress={() => setSelectedCardNumber(card.number)}
                  />
                  <Feather
                    name="x"
                    size="35"
                    onPress={() => deleteCard(card.id)}
                  />
                </View>
              </View>
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontFamily: "Mont-Medium",
                  fontSize: 10,
                }}>
                Срок действия карты: {card.day} {card.month} {card.year}
              </Text>
            </View>
          ))
        ) : (
          <Text
            style={{
              fontFamily: "Mont-Medium",
              fontSize: 14,
              paddingTop: 15,
            }}>
            Вы еще не добавили карту – заполните данные и покупайте билеты в 1
            клик
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addingCardForm: {
    flex: 1,
    marginHorizontal: 30,
  },
  shadowCardForm: {
    backgroundColor: "#EC336B",
    paddingHorizontal: 18,
    borderRadius: 12,
    shadowColor: "#EC336B",
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  addCardButton1: {
    shadowColor: "blue",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    backgroundColor: "blue",
    width: "100%",
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    alignSelf: "center",
  },

  formAddCardInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  formAddCardInfoColumn: {
    justifyContent: "space-between",
  },
  textInputStyle: {
    fontSize: 16,
    color: "white",
    fontFamily: "Mont-Bold",
    paddingTop: 14,
    paddingBottom: 20,
  },
  addCardButton: {
    backgroundColor: "blue",
    width: "100%",
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    alignSelf: "center",
  },
  myCardsView: {
    fontFamily: "Mont-Bold",
    marginTop: 48,
    fontSize: 24,
  },
  addedCardView: {
    marginTop: 10,
    paddingLeft: 10,
    borderRadius: 5,
    paddingVertical: 20,
    shadowColor: "blue",
    shadowOpacity: 0.4,
    shadowRadius: 15,
  },
});
