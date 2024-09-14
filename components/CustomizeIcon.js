import * as React from "react";
import Svg, { Path } from "react-native-svg";

const CustomizeIcon = (props) => {
  const { color, width = 33, height = 32 } = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={33}
      height={32}
      fill="none"
      {...props}
    >
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m23.847 5.25 3.736 3.735M26.25 1.958 16.143 12.065a3.74 3.74 0 0 0-1.024 1.909l-.934 4.673 4.673-.935a3.73 3.73 0 0 0 1.91-1.022L30.875 6.583a3.27 3.27 0 1 0-4.626-4.625"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M28.303 22.177v5.294a3.53 3.53 0 0 1-3.53 3.53H5.361a3.53 3.53 0 0 1-3.529-3.53V8.059a3.53 3.53 0 0 1 3.53-3.53h5.294"
      />
    </Svg>
  );
};
export default CustomizeIcon;
