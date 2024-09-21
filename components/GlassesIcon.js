import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const GlassesIcon = (props) => (
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
      d="M33 15.5h-.681a5 5 0 0 0-1-.449c-1.1-.364-2.553-.551-4.319-.551s-3.219.188-4.316.551c-.879.293-1.266.617-1.39.742a3 3 0 0 0-2.586 0c-.125-.125-.512-.449-1.39-.742-1.1-.364-2.552-.551-4.318-.551s-3.219.188-4.316.551a5 5 0 0 0-1 .449H7a1 1 0 0 0 0 2h.01c.063 2.841.403 4.549 1.133 5.764a4.17 4.17 0 0 0 1.994 1.75c.765.328 1.702.487 2.863.487 1.51 0 3.655-.232 4.858-2.235.604-1.01.943-2.356 1.075-4.408A1 1 0 0 0 19 18.5a1 1 0 0 1 2 0 1 1 0 0 0 .067.357c.132 2.052.47 3.399 1.075 4.407a4.17 4.17 0 0 0 1.995 1.75c.765.328 1.702.487 2.863.487 1.51 0 3.655-.232 4.858-2.235.729-1.216 1.07-2.923 1.131-5.765H33a1 1 0 0 0 0-2z"
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
export default GlassesIcon;
