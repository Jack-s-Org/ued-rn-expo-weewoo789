import React from "react";
import { View } from "react-native";

const Dots = ({ data, currentIndex }) => {
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
            backgroundColor: index === currentIndex ? "#000" : "#dadada",
          }}
        />
      ))}
    </View>
  );
};

export default Dots;
