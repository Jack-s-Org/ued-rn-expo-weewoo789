import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const CustomizeRouteCloseButton = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <Circle cx={15} cy={15} r={15} fill="#FF0060" />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M15.889 10.358 23 17.272 21.223 19 15 12.95 8.778 19 7 17.272l7.111-6.914c.236-.23.556-.358.889-.358s.653.129.889.358"
      clipRule="evenodd"
    />
  </Svg>
);
export default CustomizeRouteCloseButton;
