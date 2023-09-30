import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Header = () => {
  const navgation = useNavigation();

  return (
    <SafeAreaView >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
          marginHorizontal: 15,
          alignItems: "center",
          
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 600, color: "#e4181e" }}>
          Indian News
        </Text>
        <Pressable
          onPress={() => navgation.navigate("Search", console.log("pressed"))}
        >
          <AntDesign name="search1" size={24} color="black" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};


export default Header;

const styles = StyleSheet.create({});
