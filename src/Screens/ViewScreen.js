import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { WebView } from "react-native-webview";
const ViewScreen = () => {
  const route = useRoute();

  return <WebView source={{ uri: route.params.url }} style={{ flex: 1 }} />;
};

export default ViewScreen;

const styles = StyleSheet.create({});
