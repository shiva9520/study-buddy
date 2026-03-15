import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const { isSignedIn, isLoaded, signOut } = useAuth();

  if (!isSignedIn) {
    return <Redirect href={"/(tabs)"} />;
  }
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
    <View style={styles.container}>
      <Text className="bg-red-400 text-white text-2xl">
        Edit src/app/index.tsx to edit this scren.
      </Text>
      <Pressable className="bg-red-500 p-4" onPress={() => signOut}>
        <Text className="text-2xl">Sign Out</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
