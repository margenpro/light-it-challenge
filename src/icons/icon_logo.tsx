import React, { memo } from "react";
import { IconProps } from ".";

export default memo(function Icon(props: IconProps): React.ReactElement {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 401.000000 401.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,401.000000) scale(0.100000,-0.100000)"
        fill={props.fill ?? "#000000"}
        stroke={props.color ?? "none"}
      ></g>
    </svg>
  );
});
