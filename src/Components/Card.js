import React, { useState } from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import moment from "moment";

import { useNavigation, useRoute } from "@react-navigation/native";

const Card = ({ item }) => {
  const route = useRoute();
  const navgation = useNavigation();
  const [pressed, setpressed] = useState(false);
  // console.log(item.item.url);
  const toggle = () => {
    setpressed(!pressed);
  };

  return (
    <View
      style={{
        marginHorizontal: 15,
        marginTop: 10,
        backgroundColor: "white",
        borderRadius: 10,
      }}
    >
      <Pressable>
        <Image
          source={{
            uri: item.urlToImage
              ? item.urlToImage
              : "data:image/jpeg;base64,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",
          }}
          style={{
            width: "100%",
            height: 200,
            borderRadius: 10,
            resizeMode: "cover",
          }}
        />

        <View style={{ margin: 3 }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>{item.title}</Text>
          <Text style={{ fontSize: 14, marginTop: 5, color: "gray" }}>
            {item.description}
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginRight: 10,
              marginTop: 5,
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "700" }}>
              {item.author ? item.author : "Indian News"}
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "700" }}>
              {moment(item.publishedAt).utc().format("YYYY-MM-DD")}
            </Text>
          </View>
        </View>
        <Pressable
          onPress={() =>
            navgation.navigate("View", {
              url: item.url,
            })
          }
          style={{
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 10,
            backgroundColor: "#e4181e",
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "row",
            width: 120,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "600",
              width: 80,
            }}
          >
            Read More
          </Text>
          <AntDesign name="arrowright" size={20} color="white" />
        </Pressable>
        <Pressable
          style={{ position: "absolute", right: 0 }}
          onPress={() => {
            toggle();
          }}
        >
          {pressed ? (
            <AntDesign name="star" size={24} color="gold" />
          ) : (
            <AntDesign name="star" size={24} color="black" />
          )}
        </Pressable>

        <View style={{ position: "absolute", top: 172 }}>
          <Text
            style={{
              borderRadius: 10,
              paddingHorizontal: 6,
              paddingVertical: 3,
              color: "#e4181e",
              fontWeight: "600",
            }}
          >
            {item.source.name ? item.source.name : "Indian News"}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
