import { useAuth } from "@clerk/expo";
import React from "react";
import { Alert, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const profile = () => {
  const { signOut } = useAuth();
  const handleLogout = () => {
    Alert.alert("Confirm Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Logout",
        style: "destructive",
        onPress: () => signOut(),
      },
    ]);
  };
  return (
    <SafeAreaView>
      <Text>profile</Text>
      <Pressable className="bg-red-500 p-4" onPress={handleLogout}>
        <Text className="text-2xl">Sign Out</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default profile;
