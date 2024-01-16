import React from "react";

import {ArrowLeft, ArrowRight, ChevronUp, ChevronDown, ChevronRight, ChevronLeft} from "react-feather";


const icons = {
  ArrowLeft,
  ArrowRight,
  ChevronUp,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
};

export type IconName = keyof typeof icons;

interface IFeatherIconProps {
  name: IconName;
  color?: string;
  fill?: string;
  onClick?: () => void;
  size: number;
  strokeWidth?: number;
  strokeDasharray?: string;
  strokeLineCap?: "butt" | "square" | "round" | "imherit";
  className?: string;
}

export function FeatherIcon({ name, ...iconProps }: IFeatherIconProps) {
  const Icon = icons[name];
  return <Icon {...iconProps} />;
}
