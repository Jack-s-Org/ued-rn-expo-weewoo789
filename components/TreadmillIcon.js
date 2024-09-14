import * as React from "react";
import Svg, { Path } from "react-native-svg";

const TreadmillIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={51}
    height={50}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeWidth={4.167}
      d="M17.166 33.333 4.666 4.166h6.698M6.749 32.291 13 23.958m13.542-8.334H9.874m32.032 30.209H10.197A5.535 5.535 0 0 1 4.666 40.3v-5.645c0-1.26 1.104-2.23 2.344-2.073l35.437 4.427a4.44 4.44 0 0 1 3.886 4.396 4.423 4.423 0 0 1-4.427 4.427"
    />
  </Svg>
);
export default TreadmillIcon;
