import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import PagerView from "react-native-pager-view";

export default function CardSwipe() {
  return (
    <PagerView style={styles.pagerView} initialPage={0}>
      <View key="1">
        <Text>First page</Text>
        <Image
          source={require("@/assets/images/pacecard.png")}
          style={{ width: 350, height: 180 }}
        />
      </View>
      <View key="2">
        <Text>Second page</Text>
        <Image
          source={require("@/assets/images/pacecard2.png")}
          style={{ width: 350, height: 180 }}
        />
      </View>
    </PagerView>
  );
}

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
});
