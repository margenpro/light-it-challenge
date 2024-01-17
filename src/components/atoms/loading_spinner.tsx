import React from "react";
import classNames from "classnames";

interface ILoadingSpinnerProps {
  size?: number;
  primaryColor?: string;
  secondaryColor?: string;
  className?: string;
}

export default function LoadingSpinner(props: ILoadingSpinnerProps) {
  const {size = 22, primaryColor = "#005E58", secondaryColor = "#A9ACC4", className} = props
  return (
    <svg
      className={classNames("animate-spin", className)}
      width={size}
      height={size}
      viewBox={`0 0 22 22`}
      fill="none"
    >
      <path
        d="M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
        stroke={secondaryColor}
        strokeWidth="2"
      />
      <path
        d="M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1"
        stroke={primaryColor}
        strokeWidth="2"
      />
    </svg>
  );
}
