import {
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  Image,
  View,
  Pressable,
  TextInput,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { StackActions } from "@react-navigation/native";
import { useState } from "react";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import GoogleIcon from "@/components/GoogleIcon";
import AppleIcon from "@/components/AppleIcon";
import FacebookIcon from "@/components/FacebookIcon";

const SignInScreen = ({ navigation }) => {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  return (
    // <SafeAreaProvider>
    <View style={{ height: "100%" }}>
      <ImageBackground
        source={require("@/assets/images/background.png")}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Text
          style={{
            backgroundColor: "transparent",
            fontSize: 48,
            fontFamily: "TransformaMixSemiBold",
            color: "white",

            textAlign: "center",
          }}
        >
          Just Run
        </Text>

        <View>
          <View>
            <Image
              source={require("@/assets/images/loginframe.png")}
              style={[styles.loginframe]}
            />

            <View style={{ marginTop: -200, zIndex: 1 }}>
              {/* <LinearGradient colors={["#00DFA2", "#1E1E1E"]}> */}
              <View>
                <ImageBackground
                  source={require("@/assets/images/textinput.png")}
                  resizeMode="contain"
                  style={{
                    width: 262,
                    height: 50,
                    justifyContent: "center",
                    // alignItems: "center",
                    alignSelf: "center",
                    marginTop: 18,
                  }}
                >
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeUsername}
                    value={username}
                    placeholder="Username"
                    placeholderTextColor={"white"}
                    keyboardType="default"
                  />
                </ImageBackground>
              </View>
              {/* </LinearGradient> */}
              <View>
                <ImageBackground
                  source={require("@/assets/images/textinput.png")}
                  resizeMode="contain"
                  style={{
                    width: 262,
                    height: 50,
                    justifyContent: "center",
                    // alignItems: "center",
                    alignSelf: "center",
                    marginTop: 18,
                  }}
                >
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangePassword}
                    value={password}
                    placeholder="Password"
                    placeholderTextColor={"white"}
                    keyboardType="default"
                  />
                </ImageBackground>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                marginTop: 10,
                marginBottom: 24,
                columnGap: 20,
              }}
            >
              <Pressable>
                <ImageBackground
                  source={require("@/assets/images/buttonframe.png")}
                  style={{
                    width: 78,
                    height: 38,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      backgroundColor: "transparent",
                      fontSize: 12,
                      fontFamily: "TransformaSansMedium",
                      color: "white",
                    }}
                  >
                    Sign Up
                  </Text>
                </ImageBackground>
              </Pressable>

              <Pressable>
                <ImageBackground
                  source={require("@/assets/images/buttonframe.png")}
                  style={{
                    width: 78,
                    height: 38,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      backgroundColor: "transparent",
                      fontSize: 12,
                      fontFamily: "TransformaSansMedium",
                      color: "white",
                    }}
                    onPress={() => {
                      navigation.navigate("Main", {
                        screen: "Home",
                      });
                      // Fallback to navigate if goBack is not possible
                    }}
                  >
                    Log In
                  </Text>
                </ImageBackground>
              </Pressable>
            </View>
          </View>
          <Text
            style={{
              backgroundColor: "transparent",
              fontSize: 10,
              fontFamily: "TransformaSansSemiBold",
              color: "#00DFA2",
              textAlign: "center",
              // marginTop: 4,
            }}
          >
            Forgot Password?
          </Text>

          <Text
            style={{
              backgroundColor: "transparent",
              fontSize: 14,
              fontFamily: "TransformaSansBold",
              color: "white",
              textAlign: "center",
              marginTop: 24,
            }}
          >
            OR
          </Text>
          <View>
            <Image
              source={require("@/assets/images/loginoptionsframe.png")}
              style={[styles.loginoptionsframe]}
            />

            <Text
              style={{
                backgroundColor: "transparent",
                fontSize: 12,
                fontFamily: "TransformaSansSemiBold",
                color: "white",
                textAlign: "center",
                marginTop: -90,
                // position: "absolute",
                zIndex: 1,
              }}
            >
              Log In/Sign Up using:
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <GoogleIcon />
              <AppleIcon />
              <FacebookIcon />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
    // </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: 78,
    borderRadius: 20,
    backgroundColor: "#1E1E1E",
    display: "flex",
    marginVertical: 20,
    borderBottomColor: "#00DFA2",
    borderBottomWidth: 1,
    borderCurve: 2,
  },

  loginframe: {
    alignItems: "center",
    justifyContent: "center",
    display: "block",
    alignSelf: "center",
    marginTop: 50,
    // position: "absolute",
  },

  loginoptionsframe: {
    alignItems: "center",
    justifyContent: "center",
    display: "block",
    alignSelf: "center",
    marginTop: 24,
    resizeMode: "cover",

    // position: "absolute",
  },

  input: {
    height: 50,
    // marginTop: 18,
    // borderWidth: 1,
    paddingLeft: 22,
    color: "white",
    fontFamily: "TransformaSansSemiBold",
    fontSize: 12,
    backgroundColor: "transpaarent",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    // borderColor: "white",
    borderRadius: 20,
    width: 262,
  },
});

export default SignInScreen;
