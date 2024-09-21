import * as React from "react";
import Svg, { Path } from "react-native-svg";

const AreasToAvoidIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={39}
    fill="none"
    {...props}
  >
    <Path
      fill="#FF0060"
      d="m21 20 2.33 4h-4.65zm0-4-5.79 10H26.8zm0-6L10 29h22zm0 4 7.53 13H13.47z"
    />
  </Svg>
);
export default AreasToAvoidIcon;
