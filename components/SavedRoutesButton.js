import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const SavedRoutesButton = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <Circle
      cx={15}
      cy={15}
      r={15}
      fill="#0079FF"
      transform="rotate(-180 15 15)"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M14.111 19.642 7 12.728 8.777 11 15 17.05 21.223 11 23 12.728l-7.111 6.914c-.236.23-.556.358-.889.358s-.653-.129-.889-.358"
      clipRule="evenodd"
    />
  </Svg>
);
export default SavedRoutesButton;
