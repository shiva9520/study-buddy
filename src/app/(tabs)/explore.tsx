import React from "react";
import { Text, View } from "react-native";
import { useAppContext } from "../contexts/AppProvider";

const explore = () => {
  const { channel } = useAppContext();
  return (
    <View className="flex-1 bg-background">
      <Text className="text-white">explore</Text>
    </View>
  );
};

export default explore;
