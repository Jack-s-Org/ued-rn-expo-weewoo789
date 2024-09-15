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
import { useNavigation } from "@react-navigation/native";

const DiscoverRoutesScreen = () => {
  const navigation = useNavigation();
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
                <BackIcon onPress={() => navigation.goBack()}></BackIcon>
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
                  Discover Routes
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
                    Search by city or trail
                  </Text>
                </View>
                <SearchIcon></SearchIcon>
              </View>
            </ImageBackground>
          </View>

          <View
            style={{
              flexDirection: "row",
              columnGap: 12,
              paddingHorizontal: 20,
              paddingTop: 20,
              paddingBottom: 24,
            }}
          >
            <View>
              <ImageBackground
                source={require("@/assets/images/buttonframe.png")}
                style={{
                  width: 78,
                  height: 38,
                  justifyContent: "center",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <Text style={styles.buttontext}>Beginner</Text>
              </ImageBackground>
            </View>

            <View>
              <ImageBackground
                source={require("@/assets/images/buttonframe.png")}
                style={{
                  width: 78,
                  height: 38,
                  justifyContent: "center",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <Text style={styles.buttontext}>Casual</Text>
              </ImageBackground>
            </View>

            <View>
              <ImageBackground
                source={require("@/assets/images/buttonframe.png")}
                style={{
                  width: 78,
                  height: 38,
                  justifyContent: "center",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <Text style={styles.buttontext}>Amateur</Text>
              </ImageBackground>
            </View>

            <View>
              <ImageBackground
                source={require("@/assets/images/buttonframe.png")}
                style={{
                  width: 78,
                  height: 38,
                  justifyContent: "center",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <Text style={styles.buttontext}>Expert</Text>
              </ImageBackground>
            </View>
          </View>

          <ScrollView>
            <View style={{ paddingHorizontal: 20 }}>
              <View>
                <Text style={styles.categorytext}>Popular</Text>
              </View>

              <ScrollView horizontal>
                <View
                  style={{
                    flexDirection: "row",
                    columnGap: 10,
                    paddingVertical: 14,
                  }}
                >
                  <View>
                    <Image
                      source={require("@/assets/images/popular1.png")}
                      style={{ width: 148, height: 206 }}
                    />
                  </View>
                  <View>
                    <Image
                      source={require("@/assets/images/popular2.png")}
                      style={{ width: 148, height: 206 }}
                    />
                  </View>
                  <View>
                    <Image
                      source={require("@/assets/images/popular3.png")}
                      style={{ width: 148, height: 206 }}
                    />
                  </View>
                </View>
              </ScrollView>
            </View>

            <View style={{ paddingHorizontal: 20, paddingTop: 22 }}>
              <Text style={styles.categorytext}>New</Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                rowGap: 10,
                paddingVertical: 14,
              }}
            >
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

  buttontext: {
    fontFamily: "TransformaSansMedium",
    fontSize: 12,
    color: "white",
    backgroundColor: "transparent",
  },

  categorytext: {
    fontFamily: "TransformaMixSemiBold",
    fontSize: 20,
    color: "white",
    backgroundColor: "transparent",
  },
});

export default DiscoverRoutesScreen;
