import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from "./HomeScreen";
import NotificationsScreen from "./NotificationsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import MeScreen from "./MeScreen";
import DiscoverScreen from "./DiscoverScreen";
import AppDrawer from "./AppDrawer";
import SettingsScreen from "./SettingsScreen";
import AddScreen from "./AddScreen";
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

const MainStacks = createNativeStackNavigator();
// const SecondaryStacks = createNativeStackNavigator();
const RunStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const LibraryStack = createNativeStackNavigator();

const Empty = () => null;

// const getCommon = (Stack) => {
//   return [
//     <Stack.Screen
//       key="selectrun"
//       name="SelectRun"
//       component={SelectRunScreen}
//     />,
//     <Stack.Screen
//       key="getstarted"
//       name="GetStarted"
//       component={GetStartedScreen}
//     />,
//   ];
// };

// const Tab1 = () => {
//   const MainStack = createNativeStackNavigator();
//   const common = getCommon(Tab);

//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="selectrun" component={SelectRunScreen} />
//       {common}
//     </Tab.Navigator>
//   );
// };

// const Tab2 = () => {
//   const MainStack = createNativeStackNavigator();
//   const common = getCommon(Tab);

//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="getstarted" component={GetStartedScreen} />
//       {common}
//     </Tab.Navigator>
//   );
// };

const MainTabs = ({ navigation }) => {
  // const [unreadCount, setUnreadCount] = useState(3);
  return (
    // <AppDrawer navigation={navigation}>
    // {/* <SafeAreaView
    //   style={{
    //     height: "100%",
    //     flex: 1,
    //     backgroundColor: "red",
    //   }}
    // > */}
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
        {/* <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
              ),
              tabBarLabel: "Home",
            }}
          /> */}
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

        {/* <Tab.Screen
          name="Run"
          component={Tab1}
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
        /> */}

        {/* <Tab.Screen
          name="Run"
          component={Tab2}
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
        /> */}

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

        {/* <Tab.Screen
            name="Discover"
            component={DiscoverScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="search" size={size} color={color} />
              ),
              tabBarLabel: "Discover",
            }}
          /> */}

        {/* <Tab.Screen
        name="AddTab"
        component={Empty} // this is a workaround to show a full screen when this tab is pressed
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="add" size={36} color={color} />
          ),
          tabBarLabel: () => null,
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault(); // stop default navigation
            navigation.navigate("Add"); // manually navigate to the stack screen outside of the tab navigators
          },
        }}
      /> */}

        {/* <Tab.Screen
        name="Inbox"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbox" size={size} color={color} />
          ),
          tabBarLabel: "Inbox",
          // tabBarBadge: unreadCount,
        }}
        // listeners={{
        //   tabPress: () => {
        //     setUnreadCount(null);
        //   },
        // }}
      /> */}

        {/* <Tab.Screen
        name="SettingsDrawer"
        component={MeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
          tabBarLabel: "Me",
        }}
      /> */}
      </Tab.Navigator>
    </View>
    // {/* </SafeAreaView> */}
    // </AppDrawer>
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
      {/* <MainStacks.Screen
        name="Add"
        component={AddScreen}
        options={{ animation: "fade_from_bottom" }}
      />
      <MainStacks.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ animation: "fade_from_bottom" }}
      />   */}

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
      {/* <MainStacks.Screen
        name="GeneralOverview"
        component={LibraryStackScreen}
        options={{ animation: "fade_from_bottom", headerShown: false }}
      /> */}
      {/* <MainStacks.Screen
        name="WhatToDo"
        component={WhatToDoScreen}
        options={{ animation: "fade_from_bottom", headerShown: false }}
      /> */}
      {/* <MainStacks.Screen
        name="RouteAnalysis"
        component={LibraryStackScreen}
        options={{ animation: "fade_from_bottom", headerShown: false }}
      /> */}

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
