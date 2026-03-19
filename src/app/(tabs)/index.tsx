import * as Sentry from "@sentry/react-native";
import React from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";
const index = () => {
  return (
    <SafeAreaView>
      <Text>index</Text>
      <Button
        title="Try!"
        onPress={() => {
          Sentry.captureException(new Error("First error"));
        }}
      />
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
