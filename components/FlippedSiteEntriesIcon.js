import * as React from "react";
import Svg, { Path } from "react-native-svg";

const FlippedSiteEntiresIcon = (props) => (
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
      d="M28 19a1 1 0 0 0-1-1H15a3 3 0 0 1-3-3v-4a1 1 0 0 0-2 0v4a5 5 0 0 0 5 5h12a1 1 0 0 0 1-1"
      clipRule="evenodd"
    />
    <Path
      fill="#00DFA2"
      fillRule="evenodd"
      d="M27.707 19.707a1 1 0 0 0 0-1.414l-4-4a1 1 0 0 0-1.414 1.414L25.586 19l-3.293 3.293a1 1 0 1 0 1.414 1.414z"
      clipRule="evenodd"
    />
  </Svg>
);
export default FlippedSiteEntiresIcon;
