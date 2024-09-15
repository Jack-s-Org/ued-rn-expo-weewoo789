import * as React from "react";
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg";

const GearIcon2 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={52}
    fill="none"
    {...props}
  >
    <Rect width={50} height={52} fill="#1E1E1E" fillOpacity={0.6} rx={6} />
    <Rect width={50} height={52} fill="url(#a)" fillOpacity={0.2} rx={6} />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="m27.5 27.25 1.25-2.5M15 18.5h6.782a1.25 1.25 0 0 1 1.08.62l1.33 2.279a3.75 3.75 0 0 0 2.37 1.758l5.845 1.393a5 5 0 0 1 3.843 4.863v2.837A1.25 1.25 0 0 1 35 33.5H15a1.25 1.25 0 0 1-1.25-1.25v-12.5A1.25 1.25 0 0 1 15 18.5"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M20 33.5v-1.25a5 5 0 0 0-5-5h-1.25M22.5 26l1.875-3.75"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={-6}
        x2={47.416}
        y1={55.925}
        y2={-1.017}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#00DFA2" />
        <Stop offset={1} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default GearIcon2;
