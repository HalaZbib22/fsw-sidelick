import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ImageBackground,
  FlatList,
  View,
  Image,
  Text,
  Button,
  Pressable,
} from "react-native";
import { BlurView } from "expo-blur";
import JoinButton from "./JoinButton";
import SignIn from "./SignIn";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const COLORS = { Primary: "#ff8400", white: "#fff" };

const OnBoardingScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../assets/dog-walker.png")}
    >
      <Image source={require("../assets/LOGO.png")} style={[styles.logo, {height: height * 0.25}]} resizeMode="contain" />
      <View style={[styles.container, { marginBottom: height * 0.25}]}>
        <BlurView intensity={15} tint="light" style={styles.blurContainer}>
          <Text style={styles.text}>Too tired to walk your dog?</Text>
          <Text style={styles.text}>Let us help you!</Text>
          <JoinButton />
          <View>
            <Pressable onPress={() => navigation.navigate("SignIn")}>
              <Text style={styles.subtext}>
                Already a member?
                <Text style={{ color: "orange" }}>
                  {" "}
                  Sign in
                </Text>
              </Text>
            </Pressable>
          </View>
        </BlurView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo:{
    width: '40%',
    justifyContent: 'flex-start',
    paddingVerl: 10,
  },
  text: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 1,
    marginTop: 5,
    textAlign: "center",
  },
  subtext: {
    color: COLORS.white,
    fontSize: 14,
    letterSpacing: 0.5,
    textAlign: "center",
  },
  blurContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: "80%",
  },
});
export default OnBoardingScreen;
