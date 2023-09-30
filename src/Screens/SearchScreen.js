import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  FlatList,
} from "react-native";
import Card from "../Components/Card";
import { useNavigation, useRoute } from "@react-navigation/native";

const SearchScreen = () => {
  const [searchText, setsearchText] = useState("");
  const [Data, setData] = useState([]);

  const navgation = useNavigation();
  const searchNews = async (text) => {
    setsearchText(text);
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=c883d4f6f482404c897e27452fb8afaa&q=${text}`
    );

    const data = await res.json();
    setData(data.articles);
  };
  return (
    <SafeAreaView style={{ marginTop: 30 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          padding: 10,
          alignItems: "center",
          backgroundColor: "#e4181e",
        }}
      >
        <AntDesign
          name="arrowleft"
          size={24}
          color="white"
          onPress={() => navgation.goBack()}
        />
        <TextInput
          placeholderTextColor={"white"}
          style={{
            marginLeft: 20,
            color: "white",
            fontSize: 17,
            fontWeight: "600",
          }}
          placeholder="search your qurey"
          value={searchText}
          onChangeText={(text) => {
            searchNews(text);
          }}
        />
      </View>
      <View style={{ marginTop: 0 }}>
        <FlatList
          showsVerticlScrollIndicator={false}
          data={Data}
          renderItem={({ item, index }) => {
            return <Card item={item} key={index} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
