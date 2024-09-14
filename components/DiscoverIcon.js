import * as React from "react";
import Svg, { Path } from "react-native-svg";

const DiscoverIcon = (props) => {
  const { color, width = 32, height = 32 } = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      fill="none"
      {...props}
    >
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 31c8.284 0 15-6.716 15-15S24.284 1 16 1 1 7.716 1 16s6.716 15 15 15"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.845 12.232 21 11l-1.232 6.155a3.33 3.33 0 0 1-2.613 2.615L11 21l1.232-6.155a3.33 3.33 0 0 1 2.613-2.613"
      />
    </Svg>
  );
};
export default DiscoverIcon;
