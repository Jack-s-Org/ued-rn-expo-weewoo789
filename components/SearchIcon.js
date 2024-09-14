import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SearchIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="m19.486 20.155-6.262-6.263q-.75.64-1.725.99t-1.96.35q-2.403 0-4.066-1.663-1.665-1.664-1.664-4.065 0-2.403 1.662-4.067T9.535 3.77q2.4-.003 4.068 1.664 1.665 1.665 1.666 4.067 0 1.041-.37 2.017a5.5 5.5 0 0 1-.97 1.667l6.263 6.262zM9.54 14.23q1.989 0 3.36-1.37t1.37-3.36q0-1.992-1.37-3.36-1.371-1.37-3.36-1.37-1.99-.001-3.361 1.37T4.809 9.5q0 1.988 1.37 3.36 1.368 1.37 3.36 1.37"
    />
  </Svg>
);
export default SearchIcon;
