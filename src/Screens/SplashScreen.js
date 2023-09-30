import { View, Text, ImageBackground } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
const SplashScreen = () => {
  const navgation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navgation.replace("Login");
    }, 2450);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageBackground source={require("../../assets/Splash1.png")} >
        <Animatable.Text
          style={{ fontSize: 50, color: "white", fontWeight: "bold" }}
          animation="fadeInDownBig"
          duration={2000}
        >
        
        </Animatable.Text>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;
