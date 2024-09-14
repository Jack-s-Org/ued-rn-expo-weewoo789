import React from "react";
import { Text, View, Image } from "react-native";

const Slide = ({ index, backgroundColor }) => {
  return (
    <View
      style={{
        // height: "100%",
        width: 242,
        height: 227,
        display: "flex",
        flexDirection: "row",
        columnGap: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor,
        alignSelf: "center",
      }}
    >
      <Text>{index}</Text>
    </View>
  );
};

export default Slide;
