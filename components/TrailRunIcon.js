import * as React from "react";
import Svg, { Path } from "react-native-svg";

const TrailRunIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3.125}
      d="m27.096 31.803 4.41-6.542m0 0 .524-.771a3.41 3.41 0 0 1 5.96.488l5.408 11.543c1.117 2.38-.562 5.146-3.118 5.146H9.72c-2.55 0-4.229-2.75-3.127-5.13l12.1-26.166a3.419 3.419 0 0 1 6.281.063z"
    />
  </Svg>
);
export default TrailRunIcon;
