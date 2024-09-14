import * as React from "react";
import Svg, { Path } from "react-native-svg";

const LibraryIcon = (props) => {
  const { color, width = 31, height = 30 } = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={31}
      height={30}
      fill="none"
      {...props}
    >
      <Path
        fill={color}
        fillRule="evenodd"
        d="M5.332 6.25a3.75 3.75 0 0 1 3.75-3.75h12.5a3.75 3.75 0 0 1 3.75 3.75v20.035c0 1.525-1.725 2.413-2.965 1.526l-7.035-5.025-7.035 5.025c-1.241.888-2.965 0-2.965-1.525zM9.082 5a1.25 1.25 0 0 0-1.25 1.25v18.821l6.41-4.579a1.875 1.875 0 0 1 2.18 0l6.41 4.58V6.25A1.25 1.25 0 0 0 21.582 5z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
export default LibraryIcon;
