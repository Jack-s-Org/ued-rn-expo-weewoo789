import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const BackIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <Rect
      width={30}
      height={30}
      fill="#0079FF"
      rx={15}
      transform="matrix(-1 0 0 1 30 0)"
    />
    <Path
      fill="#fff"
      d="M7.293 15.707a1 1 0 0 1 0-1.414l6.364-6.364a1 1 0 1 1 1.414 1.414L9.414 15l5.657 5.657a1 1 0 0 1-1.414 1.414zM22 16H8v-2h14z"
    />
  </Svg>
);
export default BackIcon;
