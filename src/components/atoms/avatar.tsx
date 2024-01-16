import React from "react";

interface IAvatarProps {
  imgUrl?: string;
  size?: number;
}

export default function Avatar({ imgUrl, size = 40 }: IAvatarProps) {
  const defaultImgUrl = imgUrl ? imgUrl : "https://static-00.iconduck.com/assets.00/avatar-default-icon-1975x2048-2mpk4u9k.png";
  return <img src={defaultImgUrl} alt="avatar" className={`rounded-full shadow-lg`} style={{ width: `${size}px` }} />;
}
