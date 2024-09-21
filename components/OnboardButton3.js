import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const OnboardButton3 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={62}
    height={62}
    fill="none"
    {...props}
  >
    <Rect width={62} height={62} fill="#0079FF" rx={31} />
    <Path
      fill="#F1EFDA"
      d="M44.292 34.558c-1.7 0-3.405.058-5.097-.007-7.744-.328-15.488-.686-23.224-1.065-.868-.044-1.728-.204-2.581-.386-.635-.132-1.167-.474-1.101-1.24.065-.758.634-1.043 1.283-1.043 2.727.015 5.454.015 8.181.132 6.264.27 12.527.598 18.85.765-.256-.116-.511-.24-.774-.35-1.524-.634-3.055-1.261-4.579-1.903a3.5 3.5 0 0 1-.75-.43c-.438-.328-.446-.605-.395-.853.073-.387.372-.467.802-.445.27.015.584 0 .854.088 3.682 1.232 7.357 2.471 11.025 3.74.459.16.911.409 1.29.708.955.75.758 2.056-.35 2.53q-4.713 2-9.428 3.988c-.211.088-.306.139-.656.197-.306.051-.678-.226-.81-.467-.102-.19.015-.663.197-.816.343-.285.795-.467 1.225-.627 1.816-.686 3.639-1.35 5.462-2.02.204-.073.4-.175.605-.255.24-.132.394-.197-.03-.24"
    />
  </Svg>
);
export default OnboardButton3;
