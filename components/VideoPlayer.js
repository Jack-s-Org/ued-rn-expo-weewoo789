import * as React from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { Video, ResizeMode } from "expo-av";

export default function VideoPlayer() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={StyleSheet.absoluteFill}
        // source={{
        //   uri: "https://v1.pinimg.com/videos/mc/720p/ae/c0/e8/aec0e87f56074dfc887ac23c68ec937d.mp4",
        //   //   uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        // }}
        source={require("@/assets/videos/stroke.mp4")}
        useNativeControls={false}
        resizeMode={ResizeMode.COVER}
        isLooping
        onFullscreenUpdate
        shouldPlay={true}
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View>
        {/* <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        /> */}
      </View>

      {/* <Text style={{ color: "red" }}>Hello</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
});
