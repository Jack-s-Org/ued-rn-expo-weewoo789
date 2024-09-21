import * as React from "react";
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg";

const NonVisibleIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Rect width={40} height={40} fill="#1E1E1E" rx={6} />
    <Rect width={40} height={40} fill="url(#a)" fillOpacity={0.2} rx={6} />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M27.107 13.76a.625.625 0 0 0-.883-.883L12.89 26.21a.626.626 0 1 0 .884.883l2.529-2.529c1.098.507 2.356.838 3.696.838 2.181 0 4.143-.876 5.556-1.961.709-.543 1.29-1.147 1.696-1.733.4-.577.664-1.182.664-1.723 0-.54-.264-1.146-.664-1.722-.407-.587-.987-1.19-1.696-1.733a10 10 0 0 0-.716-.5zm-4.5 4.502-.917.915a1.875 1.875 0 0 1-2.5 2.5l-.916.916a3.125 3.125 0 0 0 4.33-4.33"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      d="M20.557 16.91a.22.22 0 0 0 .192-.058l1.625-1.625a.203.203 0 0 0-.087-.34 8.5 8.5 0 0 0-2.288-.319c-2.182 0-4.144.876-5.557 1.961-.708.544-1.29 1.147-1.697 1.733-.4.577-.663 1.182-.663 1.723 0 .54.264 1.146.663 1.722a7.8 7.8 0 0 0 1.394 1.491.205.205 0 0 0 .276-.014l2.45-2.45a.22.22 0 0 0 .059-.192 3.126 3.126 0 0 1 3.633-3.633"
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
export default NonVisibleIcon;
