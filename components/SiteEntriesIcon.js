import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SiteEntriesIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={35}
    fill="none"
    {...props}
  >
    <Path
      fill="#00DFA2"
      fillRule="evenodd"
      d="M10 19a1 1 0 0 1 1-1h12a3 3 0 0 0 3-3v-4a1 1 0 0 1 2 0v4a5 5 0 0 1-5 5H11a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
    <Path
      fill="#00DFA2"
      fillRule="evenodd"
      d="M10.293 19.707a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L12.414 19l3.293 3.293a1 1 0 1 1-1.414 1.414z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SiteEntriesIcon;
