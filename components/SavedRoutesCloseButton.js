import * as React from "react";

const SavedRoutesCloseButton = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <circle cx={15} cy={15} r={15} fill="#0079FF" />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M15.889 10.358 23 17.272 21.223 19 15 12.95 8.778 19 7 17.272l7.111-6.914c.236-.23.556-.358.889-.358s.653.129.889.358"
      clipRule="evenodd"
    />
  </svg>
);
export default SavedRoutesCloseButton;
