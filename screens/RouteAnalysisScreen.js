import React, { useState, useRef } from "react";
import {
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  Image,
  View,
  Pressable,
  ScrollView,
  Animated,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import BackIcon from "@/components/BackIcon";
import SearchIcon from "@/components/SearchIcon";
import OverviewCarousel from "@/components/OverviewCarousel";
import SwipeableCarouselParallaxHorizontal from "@/components/SwipeableCarousel";
import NextIcon from "@/components/NextIcon";
import NonVisibleIcon from "@/components/NonVisibleIcon";
import UnevenSurfaceIcon from "@/components/UnevenSurfaceIcon";
import AreasToAvoidIcon from "@/components/AreasToAvoidIcon";
import StreamIcon from "@/components/StreamIcon";
import SiteEntriesIcon from "@/components/SiteEntriesIcon";
import FlippedSiteEntiresIcon from "@/components/FlippedSiteEntriesIcon";
import VisibleIcon from "@/components/VisibleIcons";
import WeatherIcon from "@/components/WeatherIcons";
import InjuryIcon from "@/components/InjuryIcon";
import MosquitoIcon from "@/components/MosquitoIcon";
import WeatherExpanded from "@/components/WeatherExpanded";
import InjuryExpanded from "@/components/InjuryExpanded";
import MosquitoExpanded from "../components/MosquitoExpanded";
import { useNavigation } from "@react-navigation/native";

const GeneralOverviewScreen = () => {
  const [unevenVisible, setUnevenVisible] = useState(false);
  const [avoidVisible, setAvoidVisible] = useState(false);
  const [streamVisible, setStreamVisible] = useState(false);
  const [siteVisible, setSiteVisible] = useState(false);
  const [iconsVisible, setIconsVisible] = useState(true);
  const [weatherExpanded, setWeatherExpanded] = useState(true);
  const [injuryExpanded, setInjuryExpanded] = useState(true);
  const [mosquitoExpanded, setMosquitoExpanded] = useState(true);

  // Toggle visibility function
  const unevenVisibility = () => {
    setUnevenVisible(!unevenVisible);
  };

  const avoidVisibility = () => {
    setAvoidVisible(!avoidVisible);
  };

  const streamVisibility = () => {
    setStreamVisible(!streamVisible);
  };

  const siteVisibility = () => {
    setSiteVisible(!siteVisible);
  };

  const iconsVisibility = () => {
    setIconsVisible(!iconsVisible);
  };

  // const weatherExpand = () => {
  //   setWeatherExpanded(!weatherExpanded);
  // };

  const hideUnevenVisibility = () => {
    if (unevenVisible) {
      setUnevenVisible(false);
    }
  };

  const hideAvoidVisibility = () => {
    if (avoidVisible) {
      setAvoidVisible(false);
    }
  };

  const hideStreamVisibility = () => {
    if (streamVisible) {
      setStreamVisible(false);
    }
  };

  const hideSiteVisibility = () => {
    if (siteVisible) {
      setSiteVisible(false);
    }
  };

  const hideIconsVisibility = () => {
    if (iconsVisible) {
      setIconsVisible(false);
    }
  };

  const weatherAnimX = useRef(new Animated.Value(0)).current;
  const weatherAnimY = useRef(new Animated.Value(0)).current;

  const injuryAnimX = useRef(new Animated.Value(0)).current;
  const injuryAnimY = useRef(new Animated.Value(0)).current;

  const mosquitoAnimX = useRef(new Animated.Value(0)).current;
  const mosquitoAnimY = useRef(new Animated.Value(0)).current;

  // Function to handle animation when an icon is clicked
  const handleAnimation = (animX, animY, toX, toY) => {
    Animated.parallel([
      Animated.spring(animX, {
        toValue: toX,
        useNativeDriver: true,
      }),
      Animated.spring(animY, {
        toValue: toY,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const toggleWeatherAnim = () => {
    const currentX = weatherAnimX.__getValue();
    const currentY = weatherAnimY.__getValue();

    if (currentX === 0 && currentY === 0) {
      handleAnimation(weatherAnimX, weatherAnimY, -154, 0);
      setWeatherExpanded(false);
    } else {
      handleAnimation(weatherAnimX, weatherAnimY, 0, 0);
      setWeatherExpanded(true);
    }
  };

  const toggleInjuryAnim = () => {
    const currentX = weatherAnimX.__getValue();
    const currentY = weatherAnimY.__getValue();

    if (currentX === 0 && currentY === 0) {
      handleAnimation(injuryAnimX, injuryAnimY, -150, 0);
      setInjuryExpanded(false);
    } else {
      handleAnimation(injuryAnimX, injuryAnimY, 0, 0);
      setInjuryExpanded(true);
    }
  };

  const toggleMosquitoAnim = () => {
    const currentX = weatherAnimX.__getValue();
    const currentY = weatherAnimY.__getValue();

    if (currentX === 0 && currentY === 0) {
      handleAnimation(mosquitoAnimX, mosquitoAnimY, -154, 0);
      setMosquitoExpanded(false);
    } else {
      handleAnimation(mosquitoAnimX, mosquitoAnimY, 0, 0);
      setMosquitoExpanded(true);
    }
  };

  const navigation = useNavigation();

  return (
    // <SafeAreaProvider>
    <View style={{ height: "100%" }}>
      <ImageBackground
        source={require("@/assets/images/background.png")}
        resizeMode="cover"
        style={{
          flex: 1,
          // justifyContent: "center",
          height: "100%",
        }}
      >
        <ImageBackground
          source={require("@/assets/images/smalltopframe.png")}
          style={{
            top: 0,
            width: 390,
            height: 166,
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 20,
              columnGap: 20,
              // justifyContent: "center",
              marginBottom: 6,
              marginTop: 26,
              top: -14,
              // backgroundColor: "red",
              // paddingTop: 0,
            }}
          >
            <View>
              <BackIcon
                onPress={() => {
                  navigation.goBack();
                }}
              ></BackIcon>
            </View>

            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text
                style={{
                  fontFamily: "TransformaMixSemiBold",
                  fontSize: 28,
                  backgroundColor: "transparent",
                  color: "white",
                  textAlign: "center",
                  width: 250,
                }}
              >
                Route Analysis
              </Text>
            </View>
            <View>
              <NextIcon
                onPress={() => {
                  navigation.navigate("Library", {
                    screen: "WhatToDo",
                  });
                }}
              ></NextIcon>
            </View>
          </View>
        </ImageBackground>

        <Pressable
          onPress={() => {
            hideUnevenVisibility();
            hideAvoidVisibility();
            hideStreamVisibility();
            hideSiteVisibility();
          }}
          style={{ flex: 1 }}
        >
          <View>
            <ImageBackground
              source={require("@/assets/images/routeanalysismap.png")}
              style={{
                width: 390,
                height: 844,
                // justifyContent: "center",
                alignSelf: "center",
                top: -160,
              }}
            >
              <View>
                <View>
                  <Pressable
                    onPress={() => {
                      iconsVisibility();
                      hideIconsVisibility();
                    }}
                  >
                    <View
                      style={{ paddingTop: 180, paddingLeft: 20, width: 40 }}
                    >
                      {iconsVisible ? <NonVisibleIcon /> : <VisibleIcon />}
                    </View>
                  </Pressable>
                </View>

                <View
                  style={{
                    flexDirection: "column",
                    rowGap: 6,
                    zIndex: 10,
                    marginLeft: 324,
                    marginTop: -46,
                    // backgroundColor: "red",
                  }}
                >
                  <Pressable onPress={toggleWeatherAnim}>
                    <Animated.View
                      style={{
                        transform: [
                          { translateX: weatherAnimX },
                          { translateY: weatherAnimY },
                        ],
                      }}
                    >
                      {weatherExpanded ? <WeatherIcon /> : <WeatherExpanded />}
                      {/* <WeatherIcon /> */}
                    </Animated.View>
                  </Pressable>

                  <Pressable onPress={toggleInjuryAnim}>
                    <Animated.View
                      style={{
                        transform: [
                          { translateX: injuryAnimX },
                          { translateY: injuryAnimY },
                        ],
                      }}
                    >
                      {injuryExpanded ? <InjuryIcon /> : <InjuryExpanded />}
                    </Animated.View>
                  </Pressable>

                  <Pressable onPress={toggleMosquitoAnim}>
                    <Animated.View
                      style={{
                        transform: [
                          { translateX: mosquitoAnimX },
                          { translateY: mosquitoAnimY },
                        ],
                      }}
                    >
                      {mosquitoExpanded ? (
                        <MosquitoIcon />
                      ) : (
                        <MosquitoExpanded />
                      )}
                    </Animated.View>
                  </Pressable>
                </View>
              </View>

              <Pressable onPress={unevenVisibility}>
                <View
                  style={{
                    marginTop: -44,
                    alignSelf: "center",
                    // position: "absolute",
                    left: -28,
                    // zIndex: 50,
                    // backgroundColor: "red",
                    display: iconsVisible ? "flex" : "none",
                  }}
                >
                  <UnevenSurfaceIcon />
                </View>
              </Pressable>

              <Pressable onPress={avoidVisibility}>
                <View
                  style={{
                    marginTop: 92,
                    alignSelf: "center",
                    left: -8,
                    display: iconsVisible ? "flex" : "none",
                  }}
                >
                  <AreasToAvoidIcon />
                </View>
              </Pressable>

              <Pressable onPress={unevenVisibility}>
                <View
                  style={{
                    marginTop: 18,
                    alignSelf: "center",
                    left: -36,
                    display: iconsVisible ? "flex" : "none",
                  }}
                >
                  <UnevenSurfaceIcon />
                </View>
              </Pressable>

              <Pressable onPress={unevenVisibility}>
                <View
                  style={{
                    marginTop: 18,
                    alignSelf: "center",
                    left: -12,
                    display: iconsVisible ? "flex" : "none",
                  }}
                >
                  <UnevenSurfaceIcon />
                </View>
              </Pressable>

              <Pressable onPress={avoidVisibility}>
                <View
                  style={{
                    marginTop: 10,
                    alignSelf: "center",
                    left: 56,
                    display: iconsVisible ? "flex" : "none",
                  }}
                >
                  <AreasToAvoidIcon />
                </View>
              </Pressable>

              <Pressable onPress={streamVisibility}>
                <View
                  style={{
                    marginTop: -4,
                    alignSelf: "center",
                    left: 96,
                    display: iconsVisible ? "flex" : "none",
                  }}
                >
                  <StreamIcon />
                </View>
              </Pressable>

              <Pressable onPress={siteVisibility}>
                <View
                  style={{
                    marginTop: 2,
                    alignSelf: "center",
                    left: 136,
                    display: iconsVisible ? "flex" : "none",
                  }}
                >
                  <SiteEntriesIcon />
                </View>
              </Pressable>

              <Pressable onPress={siteVisibility}>
                <View
                  style={{
                    marginTop: -38,
                    alignSelf: "center",
                    left: 36,
                    display: iconsVisible ? "flex" : "none",
                  }}
                >
                  <FlippedSiteEntiresIcon />
                </View>
              </Pressable>

              {unevenVisible && (
                <>
                  {/* Dimmer Overlay */}
                  <View
                    style={{
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      backgroundColor: "rgba(0, 0, 0, 0.3)", // Adjust opacity to dim the background
                      zIndex: 9, // Ensure the dimmer is behind the icon
                    }}
                  />
                  <View
                    style={{
                      display: unevenVisible ? "flex" : "none",
                      zIndex: 10,
                      top: 0,
                      bottom: 0,
                      alignSelf: "center",
                      marginTop: -340,
                    }}
                  >
                    <Image
                      source={require("@/assets/images/unevensurface.png")}
                      style={{ width: 146, height: 144 }}
                    />
                  </View>
                </>
              )}

              {avoidVisible && (
                <>
                  {/* Dimmer Overlay */}
                  <View
                    style={{
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      backgroundColor: "rgba(0, 0, 0, 0.3)", // Adjust opacity to dim the background
                      zIndex: 9, // Ensure the dimmer is behind the icon
                    }}
                  />
                  <View
                    style={{
                      display: avoidVisible ? "flex" : "none",
                      zIndex: 10,
                      top: 0,
                      bottom: 0,
                      alignSelf: "center",
                      marginTop: -340,
                    }}
                  >
                    <Image
                      source={require("@/assets/images/areastoavoid.png")}
                      style={{ width: 146, height: 144 }}
                    />
                  </View>
                </>
              )}

              {streamVisible && (
                <>
                  {/* Dimmer Overlay */}
                  <View
                    style={{
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      backgroundColor: "rgba(0, 0, 0, 0.3)", // Adjust opacity to dim the background
                      zIndex: 9, // Ensure the dimmer is behind the icon
                    }}
                  />
                  <View
                    style={{
                      display: streamVisible ? "flex" : "none",
                      zIndex: 10,
                      top: 0,
                      bottom: 0,
                      alignSelf: "center",
                      marginTop: -340,
                    }}
                  >
                    <Image
                      source={require("@/assets/images/stream.png")}
                      style={{ width: 146, height: 144 }}
                    />
                  </View>
                </>
              )}

              {siteVisible && (
                <>
                  {/* Dimmer Overlay */}
                  <View
                    style={{
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      backgroundColor: "rgba(0, 0, 0, 0.3)", // Adjust opacity to dim the background
                      zIndex: 9, // Ensure the dimmer is behind the icon
                    }}
                  />
                  <View
                    style={{
                      display: siteVisible ? "flex" : "none",
                      zIndex: 10,
                      top: 0,
                      bottom: 0,
                      alignSelf: "center",
                      marginTop: -340,
                    }}
                  >
                    <Image
                      source={require("@/assets/images/siteentries.png")}
                      style={{ width: 180, height: 166 }}
                    />
                  </View>
                </>
              )}
            </ImageBackground>
          </View>
        </Pressable>
      </ImageBackground>
    </View>
    // </SafeAreaProvider>
  );
};

export default GeneralOverviewScreen;
