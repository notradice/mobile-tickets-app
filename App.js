import React, { useState, useEffect, useRef } from "react";
import { View, ActivityIndicator } from "react-native";
import { AppNavigation } from "./navigation/AppNavigation";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { SafeAreaView } from "react-navigation";

export async function loadApplication() {
  await Font.loadAsync({
    "Mont-Bold": require("../parking/assets/fonts/Montserrat-Bold.ttf"),
    "Mont-Medium": require("../parking/assets/fonts/Montserrat-Medium.ttf"),
  });
}

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={(err) => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

  if (loading) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="silver" />
      </SafeAreaView>
    );
  }

  return (
    // <SafeAreaView style={{ flex: 1 }}>
    <View
      style={{
        flex: 1,
        paddingTop: 50,
      }}>
      <StatusBar style="black" />
      <AppNavigation />
    </View>
    // </SafeAreaView>
  );
}
