import * as React from "react";
import Svg, { Path } from "react-native-svg";

const FacebookIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={51}
    height={50}
    fill="none"
    {...props}
  >
    <Path
      fill="#1877F2"
      d="M40.98 25c0-8.284-6.715-15-15-15s-15 6.716-15 15c0 7.487 5.486 13.693 12.657 14.818V29.336h-3.809V25h3.809v-3.305c0-3.76 2.24-5.836 5.665-5.836 1.642 0 3.358.293 3.358.293v3.692H30.77c-1.864 0-2.445 1.156-2.445 2.342V25h4.16l-.665 4.336h-3.495v10.482C35.495 38.693 40.98 32.487 40.98 25"
    />
    <Path
      fill="#fff"
      d="M31.82 29.336 32.483 25h-4.16v-2.814c0-1.186.581-2.342 2.445-2.342h1.891v-3.692s-1.716-.293-3.357-.293c-3.427 0-5.666 2.077-5.666 5.836V25h-3.809v4.336h3.809v10.482a15.1 15.1 0 0 0 4.687 0V29.336z"
    />
  </Svg>
);
export default FacebookIcon;
