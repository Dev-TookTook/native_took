import React from "react";
import { View, Text } from "react-native";
import "./global.css"; // CSS 파일 가져오기

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-blue-600 font-bold text-3xl">Welcome to NativeWind!</Text>
    </View>
  );
}
