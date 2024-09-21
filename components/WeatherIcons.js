import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const WeatherIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={43}
    height={45}
    fill="none"
    {...props}
  >
    <Path
      fill="#1E1E1E"
      d="M0 6a6 6 0 0 1 6-6h30.5a6 6 0 0 1 6 6v32.957a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6z"
    />
    <Path
      fill="url(#a)"
      fillOpacity={0.2}
      d="M0 6a6 6 0 0 1 6-6h30.5a6 6 0 0 1 6 6v32.957a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6z"
    />
    <Path
      fill="#fff"
      d="M12 25.478h10a1 1 0 1 1 0 2H12a1 1 0 0 1 0-2m13 0h5a1 1 0 1 1 0 2h-5a1 1 0 0 1 0-2m-15-3a5 5 0 0 1 5-5c1-2.35 3.3-4 6-4 3.43 0 6.24 2.66 6.5 6.03l.5-.03c2.19 0 3.97 1.76 4 4h-2a2 2 0 0 0-2-2h-2v-1a5 5 0 0 0-5-5c-2.5 0-4.55 1.82-4.94 4.19-.33-.12-.69-.19-1.06-.19a3 3 0 0 0-2.83 4H10.1zm2 7h2a1 1 0 1 1 0 2h-2a1 1 0 0 1 0-2m5 0h13a1 1 0 1 1 0 2H17a1 1 0 0 1 0-2"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={-5.1}
        x2={41.125}
        y1={48.349}
        y2={-0.095}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default WeatherIcon;
