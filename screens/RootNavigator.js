import SignInScreen from "./SignInScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreens from "./MainScreens";
import OnboardingScreen from "./OnboardingScreen";
import NewHomeScreen from "./NewHomeScreen";
import SelectRunScreen from "./SelectRunScreen";
import GetStartedScreen from "./GetStartedScreen";
import RouteLibraryScreen from "./RouteLibraryScreen";
import GeneralOverviewScreen from "./GeneralOverviewScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} /> */}
        {/* <Stack.Screen name="SignIn" component={SignInScreen} /> */}
        <Stack.Screen name="Main" component={MainScreens} />
        {/* <Stack.Screen name="NewHome" component={NewHomeScreen} /> */}
        {/* <Stack.Screen name="SelectRun" component={SelectRunScreen} /> */}
        {/* <Stack.Screen name="GetStarted" component={GetStartedScreen} /> */}
        {/* <Stack.Screen name="RouteLibrary" component={RouteLibraryScreen} /> */}
        {/* <Stack.Screen
          name="GeneralOverview"
          component={GeneralOverviewScreen}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
