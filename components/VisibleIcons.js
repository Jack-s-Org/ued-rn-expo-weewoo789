import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const VisibleIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill="#1E1E1E"
      d="M0 6a6 6 0 0 1 6-6h28a6 6 0 0 1 6 6v28a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6z"
    />
    <Path
      fill="url(#a)"
      fillOpacity={0.2}
      d="M0 6a6 6 0 0 1 6-6h28a6 6 0 0 1 6 6v28a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6z"
    />
    <Path
      fill="#fff"
      d="M20 17.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0 6.667a4.167 4.167 0 1 1 0-8.334 4.167 4.167 0 0 1 0 8.334m0-10.417c-4.166 0-7.725 2.592-9.166 6.25 1.441 3.658 5 6.25 9.166 6.25s7.725-2.592 9.167-6.25c-1.442-3.658-5-6.25-9.167-6.25"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={-4.8}
        x2={36.156}
        y1={43.019}
        y2={-2.385}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default VisibleIcon;
