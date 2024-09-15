import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { CollapsibleContainer } from "./CollapsibleContainer"; // Assuming this is where CollapsableContainer is
import SavedRoutesButton from "./SavedRoutesButton";

export const ListItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const onItemPress = () => {
    setExpanded(!expanded);
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={onItemPress}>
        <View>
          <ImageBackground
            source={require("@/assets/images/savedroutescontainer.png")}
            style={{ width: 300, height: 62 }}
          >
            <View
              style={{
                paddingHorizontal: 30,
                paddingVertical: 16,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                columnGap: 50,
              }}
            >
              <View>
                <Text style={styles.title}>Saved Routes</Text>
              </View>
              <SavedRoutesButton />
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>

      <CollapsibleContainer expanded={expanded}>
        <Text style={styles.details}>
          Running on familiar routes can never go wrong. Explore your selection
          of saved routes.
        </Text>
      </CollapsibleContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "TransformaSansSemiBold",
    fontSize: 18,
    backgroundColor: "transparent",
    color: "white",
  },

  details: {
    fontFamily: "TransformaSansMedium",
    fontSize: 14,
    backgroundColor: "transparent",
    color: "white",
  },
});
