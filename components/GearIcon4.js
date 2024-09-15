import * as React from "react";
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg";

const GearIcon4 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <Rect width={50} height={50} fill="#1E1E1E" fillOpacity={0.6} rx={6} />
    <Rect width={50} height={50} fill="url(#a)" fillOpacity={0.2} rx={6} />
    <Path
      fill="#fff"
      d="M38.406 15.25h-6.093v-1.219a3.656 3.656 0 0 0-3.657-3.656h-7.312a3.656 3.656 0 0 0-3.657 3.656v1.219h-6.093a2.44 2.44 0 0 0-2.438 2.438v19.5a2.437 2.437 0 0 0 2.438 2.437h26.812a2.44 2.44 0 0 0 2.438-2.437v-19.5a2.44 2.44 0 0 0-2.438-2.438m-18.281-1.219a1.22 1.22 0 0 1 1.219-1.219h7.312a1.22 1.22 0 0 1 1.219 1.22v1.218h-9.75zm18.281 23.157H11.594v-19.5h26.812zm-8.531-9.75a1.22 1.22 0 0 1-1.219 1.218H26.22v2.438a1.219 1.219 0 0 1-2.438 0v-2.438h-2.437a1.219 1.219 0 1 1 0-2.437h2.437V23.78a1.219 1.219 0 0 1 2.438 0v2.438h2.437a1.22 1.22 0 0 1 1.219 1.218"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={-6}
        x2={45.194}
        y1={53.774}
        y2={-2.982}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F6FA70" />
        <Stop offset={1} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default GearIcon4;
