import * as React from "react";
import Svg, { Path } from "react-native-svg";

const HomeIcon = (props) => {
  const { color, width = 30, height = 30 } = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      fill="none"
      {...props}
    >
      <Path
        fill={color}
        d="M25 12.5a1.25 1.25 0 0 0-2.5 0zm-17.5 0a1.25 1.25 0 0 0-2.5 0zm17.866 3.383a1.25 1.25 0 0 0 1.768-1.767zM15 3.75l.883-.884a1.25 1.25 0 0 0-1.767 0zM2.866 14.116a1.25 1.25 0 1 0 1.767 1.768zM8.75 27.5h12.5V25H8.75zM25 23.75V12.5h-2.5v11.25zm-17.5 0V12.5H5v11.25zm19.634-9.634-11.25-11.25-1.768 1.767 11.25 11.25zM14.116 2.866l-11.25 11.25 1.767 1.768 11.25-11.25zM21.25 27.5A3.75 3.75 0 0 0 25 23.75h-2.5A1.25 1.25 0 0 1 21.25 25zM8.75 25a1.25 1.25 0 0 1-1.25-1.25H5a3.75 3.75 0 0 0 3.75 3.75z"
      />
    </Svg>
  );
};
export default HomeIcon;
