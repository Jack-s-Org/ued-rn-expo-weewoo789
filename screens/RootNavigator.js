import SignInScreen from "./SignInScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreens from "./MainScreens";
import OnboardingScreen from "./OnboardingScreen";
import OnboardingScreen2 from "./OnboardingScreen2";
import OnboardingScreen3 from "./OnboardingScreen3";
import NewHomeScreen from "./NewHomeScreen";
import SelectRunScreen from "./SelectRunScreen";
import GetStartedScreen from "./GetStartedScreen";
import RouteLibraryScreen from "./RouteLibraryScreen";
import GeneralOverviewScreen from "./GeneralOverviewScreen";
import WhatToDoScreen from "./WhatToDoScreen";
import RouteAnalysisScreen from "./RouteAnalysisScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="OnboardingScreen2" component={OnboardingScreen2} />
        <Stack.Screen name="OnboardingScreen3" component={OnboardingScreen3} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Main" component={MainScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
