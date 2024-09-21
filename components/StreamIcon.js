import * as React from "react";
import Svg, { Path } from "react-native-svg";

const StreamIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill="#0079FF"
      d="M16.6 18.7a6.9 6.9 0 0 1 6.9-6.9h.6a.9.9 0 1 0 0-1.8h-.6a8.7 8.7 0 0 0-8.7 8.7v1.2a.9.9 0 0 1-.9.9h-3a.9.9 0 1 0 0 1.8h3a2.7 2.7 0 0 0 2.7-2.7zm7.5-3.6a3.9 3.9 0 0 0-3.9 3.9v1.2a5.7 5.7 0 0 1-5.7 5.7h-3.6a.9.9 0 1 1 0-1.8h3.6a3.9 3.9 0 0 0 3.9-3.9V19a5.7 5.7 0 0 1 5.7-5.7h4.2a.9.9 0 1 1 0 1.8zm.6 3.3a.9.9 0 0 0-.9.9v1.2a8.7 8.7 0 0 1-8.7 8.7h-.6a.9.9 0 1 1 0-1.8h.6a6.9 6.9 0 0 0 6.9-6.9v-1.2a2.7 2.7 0 0 1 2.7-2.7h3.6a.9.9 0 1 1 0 1.8z"
    />
  </Svg>
);
export default StreamIcon;
