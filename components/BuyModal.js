import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Modal,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { onChange } from "react-native-reanimated";

const height = Dimensions.get("window").height;

export const BuyModal = ({ visible, onCancel }) => {
  return (
    <SafeAreaView>
      <Modal
        visible={visible}
        animationType="slide"
        presentationStyle="formSheet">
        <View
          style={{
            marginTop: height / 5,
            alignItems: "center",
          }}>
          <Image
            style={{
              width: 200,
              height: 200,
              marginBottom: 50,
            }}
            source={{
              uri:
                "https://images.vexels.com/media/users/3/157931/isolated/preview/604a0cadf94914c7ee6c6e552e9b4487-curved-check-mark-circle-icon-by-vexels.png",
            }}
          />

          <Text style={{ fontFamily: "Mont-Bold", fontSize: 25 }}>
            Спасибо за покупку
          </Text>
          <Text
            style={{
              fontFamily: "Mont-Medium",
              fontSize: 15,
              paddingTop: 15,
            }}>
            На вашу почту были отправлены билеты и инструкиця
          </Text>
          <TouchableOpacity style={styles.addCardButton} onPress={onCancel}>
            <Text style={{ color: "white" }}>Закрыть</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  addCardButton: {
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
    marginTop: 50,
    width: "50%",
  },
});
