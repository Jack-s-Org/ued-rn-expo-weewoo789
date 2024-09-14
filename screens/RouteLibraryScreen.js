import {
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  Image,
  View,
  Pressable,
  ScrollView,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import BackIcon from "@/components/BackIcon";
import SearchIcon from "@/components/SearchIcon";

const RouteLibraryScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ height: "100%" }}>
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
                <BackIcon></BackIcon>
              </View>

              <View>
                <Text
                  style={{
                    fontFamily: "TransformaMixSemiBold",
                    fontSize: 28,
                    backgroundColor: "transparent",
                    color: "white",
                    textAlign: "center",
                    width: 255,
                  }}
                >
                  Route Library
                </Text>
              </View>
            </View>
          </ImageBackground>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: -22,
            }}
          >
            <ImageBackground
              source={require("@/assets/images/searchbar.png")}
              style={{ width: 326, height: 40, alignItems: "center" }}
            >
              <View
                style={{
                  flexDirection: "row",
                  columnGap: 70,
                  paddingHorizontal: 20,
                  paddingVertical: 8,
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <View>
                  <Text
                    style={{
                      fontFamily: "TransformaSansMedium",
                      fontSize: 14,
                      backgroundColor: "transparent",
                      color: "white",
                    }}
                  >
                    Search route from library
                  </Text>
                </View>
                <SearchIcon></SearchIcon>
              </View>
            </ImageBackground>
          </View>

          <ScrollView style={{ paddingBottom: 40, marginTop: 24 }}>
            <View style={{ flexDirection: "column", rowGap: 10 }}>
              <View style={styles.card}>
                <ImageBackground
                  source={require("@/assets/images/bukitkiarapeakcard.png")}
                  style={{ width: 350, height: 165 }}
                >
                  <View style={styles.cardtext}>
                    <View>
                      <Text style={styles.locationtitle}>Bukit Kiara Peak</Text>
                    </View>
                    <View>
                      <Text style={styles.locationdetail}>
                        Bukit Kiara Forest Reserve . 5.6 km
                      </Text>
                    </View>
                  </View>
                </ImageBackground>
              </View>

              <View style={styles.card}>
                <ImageBackground
                  source={require("@/assets/images/sribintanghillcard.png")}
                  style={{ width: 350, height: 165 }}
                >
                  <View style={styles.cardtext}>
                    <View>
                      <Text style={styles.locationtitle}>Sri Bintang Hill</Text>
                    </View>
                    <View>
                      <Text style={styles.locationdetail}>
                        Bukit Seri Bintang . 2.3 km
                      </Text>
                    </View>
                  </View>
                </ImageBackground>
              </View>

              <View style={styles.card}>
                <ImageBackground
                  source={require("@/assets/images/desaparkcitycard.png")}
                  style={{ width: 350, height: 165 }}
                >
                  <View style={styles.cardtext}>
                    <View>
                      <Text style={styles.locationtitle}>Desa Park City</Text>
                    </View>
                    <View>
                      <Text style={styles.locationdetail}>
                        The Central Park . 3.4 km
                      </Text>
                    </View>
                  </View>
                </ImageBackground>
              </View>

              <View style={styles.card}>
                <ImageBackground
                  source={require("@/assets/images/bukitgasingcard.png")}
                  style={{ width: 350, height: 165 }}
                >
                  <View style={styles.cardtext}>
                    <View>
                      <Text style={styles.locationtitle}>
                        Bukit Gasing Loop
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.locationdetail}>
                        Bukit Gasing . 3.9 km
                      </Text>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  locationtitle: {
    fontFamily: "TransformaMixSemiBold",
    fontSize: 22,
    backgroundColor: "transparent",
    color: "white",
  },

  card: {
    justifyContent: "center",
    alignItems: "center",
  },

  locationdetail: {
    fontFamily: "TransformaSansMedium",
    fontSize: 12,
    backgroundColor: "transparent",
    color: "white",
  },

  cardtext: {
    flexDirection: "column",
    rowGap: 0,
    paddingHorizontal: 30,
    position: "absolute",
    bottom: 0,
    paddingVertical: 20,
  },
});

export default RouteLibraryScreen;
