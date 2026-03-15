import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Redirect href={"/(auth)"} />;
  }

  return (
    <View style={styles.container}>
      <Text className="bg-red-400 text-white text-2xl">
        Edit src/app/index.tsx to edit this scren.
      </Text>
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
