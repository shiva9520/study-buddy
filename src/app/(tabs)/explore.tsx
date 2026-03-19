import React from "react";
import { Text, View } from "react-native";
import { useAppContext } from "../contexts/AppProvider";

const explore = () => {
  const { channel } = useAppContext();
  return (
    <View>
      <Text>explore</Text>
    </View>
  );
};

export default explore;
