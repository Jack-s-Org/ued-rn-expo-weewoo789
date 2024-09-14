import React from "react";
import { View } from "react-native";

const HeartRateDots = ({ data, currentIndex }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        // position: "absolute",
        // zIndex: 10,
      }}
    >
      {data.map((_, index) => (
        <View
          key={index}
          style={{
            height: 6,
            width: 6,
            marginRight: 8,
            borderRadius: 20,
            backgroundColor: index === currentIndex ? "#FFC1D8" : "#fff",
          }}
        />
      ))}
    </View>
  );
};

export default HeartRateDots;
