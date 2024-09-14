import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const NextIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <Rect width={30} height={30} fill="#0079FF" rx={15} />
    <Path
      fill="#fff"
      d="M22.707 15.707a1 1 0 0 0 0-1.414l-6.364-6.364a1 1 0 1 0-1.414 1.414L20.586 15l-5.657 5.657a1 1 0 0 0 1.414 1.414zM8 16h14v-2H8z"
    />
  </Svg>
);
export default NextIcon;
