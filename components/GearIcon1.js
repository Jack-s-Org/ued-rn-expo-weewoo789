import * as React from "react";
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg";

const GearIcon1 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={53}
    fill="none"
    {...props}
  >
    <Rect width={50} height={53} fill="#1E1E1E" fillOpacity={0.6} rx={6} />
    <Rect width={50} height={53} fill="url(#a)" fillOpacity={0.2} rx={6} />
    <Path
      fill="#fff"
      d="M25 16.5a4.375 4.375 0 0 0-4.375 4.375h2.5A1.875 1.875 0 1 1 25 22.75c-.687 0-1.25.563-1.25 1.25v2.188L13 34.25a1.25 1.25 0 0 0 .75 2.25h22.5a1.25 1.25 0 0 0 .75-2.25l-10.75-8.062v-1.125a4.375 4.375 0 0 0 3.125-4.188A4.375 4.375 0 0 0 25 16.5m0 11.875L32.5 34h-15z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={-6}
        x2={48.5}
        y1={57}
        y2={0}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0079FF" />
        <Stop offset={1} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default GearIcon1;
