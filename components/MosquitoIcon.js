import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const MosquitoIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={43}
    height={46}
    fill="none"
    {...props}
  >
    <Path
      fill="#1E1E1E"
      d="M0 6.957a6 6 0 0 1 6-6h30.5a6 6 0 0 1 6 6v33a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6z"
    />
    <Path
      fill="url(#a)"
      fillOpacity={0.2}
      d="M0 6.957a6 6 0 0 1 6-6h30.5a6 6 0 0 1 6 6v33a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6z"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M21.25 12.206a.625.625 0 0 1 .626.625v4.104c.456.345.853 1.06 1.14 2.012l1.672-1.592V15.54a.62.62 0 0 1 .193-.453l2.188-2.083a.625.625 0 1 1 .862.905l-1.993 1.899v1.815a.63.63 0 0 1-.194.453l-2.188 2.083a.6.6 0 0 1-.233.14q.055.339.094.697l9.015 1.21c.281 1.042-.17 3.125-4.231 3.125-2.764 0-4.117-1.35-4.7-2.674a15 15 0 0 1-.104 1.741l3.438 3.236a.63.63 0 0 1 .184.582l-.45 2.187 1.822.857a.627.627 0 0 1-.055 1.153.62.62 0 0 1-.478-.022l-2.266-1.067a.625.625 0 0 1-.346-.691l.479-2.327-2.595-2.442a8 8 0 0 1-.346 1.074l1.2 1.363a.63.63 0 0 1 .123.617l-.786 2.284 1.673 2.535a.625.625 0 0 1-1.043.689l-1.843-2.792a.62.62 0 0 1-.07-.548l.768-2.23-.692-.786c-.265.29-.558.45-.864.45s-.599-.16-.865-.451l-.692.786.767 2.231a.63.63 0 0 1-.07.548l-1.842 2.792a.625.625 0 1 1-1.043-.689l1.673-2.535-.786-2.284a.63.63 0 0 1 .123-.617l1.201-1.364a8 8 0 0 1-.346-1.074l-2.595 2.443.478 2.327a.625.625 0 0 1-.345.692L14.64 32.39a.625.625 0 1 1-.532-1.13l1.821-.858-.45-2.187a.62.62 0 0 1 .184-.58l3.44-3.238A15 15 0 0 1 19 22.654c-.581 1.324-1.934 2.677-4.702 2.677-4.061 0-4.512-2.083-4.23-3.125l9.017-1.21q.04-.358.094-.696a.6.6 0 0 1-.235-.141l-2.188-2.083a.63.63 0 0 1-.193-.453v-1.815l-1.994-1.9a.625.625 0 1 1 .862-.904l2.188 2.083a.63.63 0 0 1 .194.453v1.815l1.672 1.593c.288-.953.684-1.669 1.14-2.014v-4.103a.625.625 0 0 1 .626-.625m-9.766 11.118c.254.283.969.757 2.814.757 1.697 0 2.6-.59 3.103-1.191a3 3 0 0 0 .31-.449l-6.263.84zm19.532 0c-.254.282-.968.757-2.814.757-1.696 0-2.6-.591-3.103-1.192q-.173-.21-.309-.448l6.262.84zm-8.764-.713c0 1.52-.237 2.84-.578 3.733-.15.394-.3.656-.423.813-.123-.157-.274-.419-.423-.812-.341-.894-.578-2.214-.578-3.733s.237-2.84.578-3.734c.15-.392.3-.655.423-.811.122.156.274.419.423.811.341.895.578 2.213.578 3.733"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={-5.1}
        x2={41.171}
        y1={49.353}
        y2={0.906}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default MosquitoIcon;
