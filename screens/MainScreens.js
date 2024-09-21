import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

import NewHomeScreen from "./NewHomeScreen";
import SignInScreen from "./SignInScreen";
import SelectRunScreen from "./SelectRunScreen";
import GetStartedScreen from "./GetStartedScreen";
import RouteLibraryScreen from "./RouteLibraryScreen";
import DiscoverRoutesScreen from "./DiscoverRoutesScreen";
import HomeIcon from "@/components/HomeIcon";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import { StyleSheet, Text, Image, ImageBackground, View } from "react-native";
import RunIcon from "@/components/RunIcon";
import DiscoverIcon from "@/components/DiscoverIcon";
import LibraryIcon from "@/components/LibraryIcon";
import CustomizeIcon from "@/components/CustomizeIcon";
import GeneralOverviewScreen from "./GeneralOverviewScreen";
import WhatToDoScreen from "./WhatToDoScreen";
import RouteAnalysisScreen from "./RouteAnalysisScreen";
import StartRunScreen from "./StartRunScreen";
import OnboardingScreen from "./OnboardingScreen";
import OnboardingScreen2 from "./OnboardingScreen2";

const MainStacks = createNativeStackNavigator();
// const SecondaryStacks = createNativeStackNavigator();
const RunStack = createNativeStackNavigator();
const OnboardStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const LibraryStack = createNativeStackNavigator();

const MainTabs = ({ navigation }) => {
  return (
    <View style={{ flex: 1, overflow: "hidden", backgroundColor: "#020B08" }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          color: "transparent",
          backgroundColor: "transparent",
          tabBarInactiveTintColor: "#FFFFFF",
          tabBarActiveTintColor: "#00DFA2",
          tabBarStyle: {
            backgroundColor: "#020B08",
            // backgroundColor: "#FF0060",
            height: 82,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
            paddingTop: 0,
            paddingBottom: 14,
            margin: 0,
            overflow: "hidden",
            paddingHorizontal: 10,
          },
          tabBarLabelStyle: {
            fontSize: 10,
            marginTop: -18,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={NewHomeScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              // <Ionicons name="home" size={size} color={color} />
              <HomeIcon
                name="home"
                size={size}
                color={focused ? "#00DFA2" : "#FFFFFF"}
              ></HomeIcon>
            ),
            tabBarLabel: "Home",
          }}
        />

        <Tab.Screen
          name="Discover"
          component={DiscoverRoutesScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              // <Ionicons name="home" size={size} color={color} />
              <DiscoverIcon
                name="discover"
                size={size}
                color={focused ? "#00DFA2" : "#FFFFFF"}
              ></DiscoverIcon>
            ),
            tabBarLabel: "Discover",
          }}
        />

        <Tab.Screen
          name="Run"
          component={RunStackScreens}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              // <Ionicons name="home" size={size} color={color} />
              <RunIcon
                name="run"
                size={size}
                color={focused ? "#00DFA2" : "#FFFFFF"}
              ></RunIcon>
            ),
            tabBarLabel: "Run",
          }}
        />

        <Tab.Screen
          name="Library"
          component={LibraryStackScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              // <Ionicons name="home" size={size} color={color} />
              <LibraryIcon
                name="library"
                size={size}
                color={focused ? "#00DFA2" : "#FFFFFF"}
              ></LibraryIcon>
            ),
            tabBarLabel: "Library",
          }}
        />

        <Tab.Screen
          name="Customize"
          component={RouteLibraryScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              // <Ionicons name="home" size={size} color={color} />
              <CustomizeIcon
                name="customize"
                size={size}
                color={focused ? "#00DFA2" : "#FFFFFF"}
              ></CustomizeIcon>
            ),
            tabBarLabel: "Customize",
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const MainScreens = () => {
  return (
    <MainStacks.Navigator>
      <MainStacks.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="NewHome"
        component={NewHomeScreen}
        options={{ animation: "fade_from_bottom", headerShown: false }}
      />
      <MainStacks.Screen
        name="SelectRun"
        component={RunStackScreens}
        options={{ animation: "fade_from_bottom", headerShown: false }}
      />
      <MainStacks.Screen
        name="GetStarted"
        component={RunStackScreens}
        options={{ animation: "fade_from_bottom", headerShown: false }}
      />
      <MainStacks.Screen
        name="RouteLibrary"
        component={LibraryStackScreen}
        options={{ animation: "fade_from_bottom", headerShown: false }}
      />
      <MainStacks.Screen
        name="DiscoverRoutes"
        component={DiscoverRoutesScreen}
        options={{ animation: "fade_from_bottom", headerShown: false }}
      />
      <MainStacks.Screen
        name="StartRun"
        component={StartRunScreen}
        options={{ animation: "fade_from_bottom", headerShown: false }}
      />

      <MainStacks.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ animation: "fade_from_bottom" }}
      />
    </MainStacks.Navigator>
  );
};

const RunStackScreens = () => {
  return (
    <RunStack.Navigator screenOptions={{ headerShown: false }}>
      <RunStack.Screen name="SelectRun" component={SelectRunScreen} />
      <RunStack.Screen name="GetStarted" component={GetStartedScreen} />
    </RunStack.Navigator>
  );
};

const LibraryStackScreen = () => {
  return (
    <LibraryStack.Navigator screenOptions={{ headerShown: false }}>
      <LibraryStack.Screen name="RouteLibrary" component={RouteLibraryScreen} />
      <LibraryStack.Screen
        name="GeneralOverview"
        component={GeneralOverviewScreen}
      />
      <LibraryStack.Screen
        name="RouteAnalysis"
        component={RouteAnalysisScreen}
      />
      <LibraryStack.Screen name="WhatToDo" component={WhatToDoScreen} />
    </LibraryStack.Navigator>
  );
};

export default MainScreens;
