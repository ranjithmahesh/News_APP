import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Header from "../Components/Header";
import Card from "../Components/Card";

const HomeScreen = () => {
  const [Data, setData] = useState([]);
  const [selected, setSelected] = useState(["Top Headlines"]);
  const [isLoading, setisLoading] = useState(false);

  const [Category, setCategory] = useState([
    { id: 1, name: "Top Headlines", catrgory: "general" },
    { id: 2, name: "Sports", catrgory: "sports" },
    { id: 3, name: "Business", catrgory: "business" },
    { id: 4, name: "Health", catrgory: "health" },
    { id: 5, name: "Science", catrgory: "science" },
    { id: 6, name: "Technology", catrgory: "technology" },
    { id: 7, name: "Science", catrgory: "science" },
    { id: 8, name: "Entertainment", catrgory: "entertainment" },
  ]);

  const getData2 = async (catrgory) => {
    setisLoading(true);
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=c883d4f6f482404c897e27452fb8afaa&category=${catrgory}`
    );

    const data = await res.json();
    setData(data.articles);
    setisLoading(false);
  };

  useEffect(() => {
    getData2("general");
  }, []);
  return (
    <>
      {isLoading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator color={"#db39c"} size={56} />
        </View>
      ) : (
        <SafeAreaView style={{ flex: 1 }}>
          <Header />
          <View style={{ margin:0 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {Category.map((item, i) => (
                <Pressable
                  key={i}
                  // onPress={() => {
                  //   setSelected(item.name);
                  //   getData2(Category[i].catrgory);
                  //   console.log(Category[i].catrgory);
                  // }}

                  onPress={() => {
                    setSelected(item.name);
                    getData2(item.catrgory);
                  }}
                  style={
                    selected.includes(item.name)
                      ? {
                          borderWidth: 1,
                          borderColor: "gray",
                          marginHorizontal: 5,
                          marginVertical: 10,
                          backgroundColor: "#e4181e",
                          padding: 5,
                          borderRadius: 5
                        }
                      : {
                          borderWidth: 1,
                          marginHorizontal: 5,
                          marginVertical: 10,
                          padding: 5,
                          borderRadius: 5,
                          backgroundColor: "lightgray",
                        }
                  }
                >
                  <Text
                    style={
                      selected.includes(item.name)
                        ? { fontSize: 17, color: "white", fontWeight: "600" }
                        : { fontSize: 17 }
                    }
                  >
                    {item.name}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>
           <View style={{ marginTop: 0 }}>
            <FlatList showsVerticlScrollIndicator={false}
              data={Data}
              renderItem={({item, index}) => {
                return <Card item={item} key={index} />;
              }}
            />
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
