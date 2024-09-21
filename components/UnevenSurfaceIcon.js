import * as React from "react";
import Svg, { Path } from "react-native-svg";

const UnevenSurfaceIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={41}
    height={41}
    fill="none"
    {...props}
  >
    <Path
      fill="#F6FA70"
      d="M20.5 10a10.5 10.5 0 1 1 0 21 10.5 10.5 0 0 1 0-21m0 4.5a1.37 1.37 0 0 0-1.365 1.494l.547 6.009a.822.822 0 0 0 1.636 0l.545-6.009A1.37 1.37 0 0 0 20.5 14.5m0 12a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4"
    />
  </Svg>
);
export default UnevenSurfaceIcon;
