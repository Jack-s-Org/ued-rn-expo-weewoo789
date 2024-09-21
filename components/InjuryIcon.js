import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const InjuryIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={43}
    height={46}
    fill="none"
    {...props}
  >
    <Path
      fill="#1E1E1E"
      d="M.5 6.957a6 6 0 0 1 6-6h30a6 6 0 0 1 6 6v33a6 6 0 0 1-6 6h-30a6 6 0 0 1-6-6z"
    />
    <Path
      fill="url(#a)"
      fillOpacity={0.2}
      d="M.5 6.957a6 6 0 0 1 6-6h30a6 6 0 0 1 6 6v33a6 6 0 0 1-6 6h-30a6 6 0 0 1-6-6z"
    />
    <Path
      fill="#fff"
      d="M17.5 17.457c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4m9 16h1c1.1 0 2-.9 2-2v-4.78c0-1.12-.61-2.15-1.61-2.66-.43-.22-.89-.43-1.39-.62zm-4.66-5 2.66-5.67c-.93-.21-1.93-.33-3-.33-2.53 0-4.71.7-6.39 1.56a2.97 2.97 0 0 0-1.61 2.66v6.78h2.34c-.22-.45-.34-.96-.34-1.5 0-1.93 1.57-3.5 3.5-3.5zm-2.34 5 1.41-3H19c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={-4.541}
        x2={41.753}
        y1={49.353}
        y2={1.452}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default InjuryIcon;
