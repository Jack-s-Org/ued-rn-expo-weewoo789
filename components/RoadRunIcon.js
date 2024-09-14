import * as React from "react";
import Svg, { Path } from "react-native-svg";

const RoadRunIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={51}
    height={50}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M13 6.25a2.083 2.083 0 0 0-4.166 0v37.5a2.083 2.083 0 1 0 4.167 0zm29.167 0a2.083 2.083 0 0 0-4.166 0v37.5a2.083 2.083 0 1 0 4.166 0zm-14.583 0a2.083 2.083 0 0 0-4.167 0v6.25a2.083 2.083 0 1 0 4.167 0zm-4.167 21.874a2.083 2.083 0 1 0 4.167 0v-6.25a2.083 2.083 0 0 0-4.167 0zm0 9.375a2.083 2.083 0 0 1 4.167 0v6.25a2.083 2.083 0 1 1-4.167 0z"
    />
  </Svg>
);
export default RoadRunIcon;
