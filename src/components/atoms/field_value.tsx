import React from "react";

interface IFieldValueProps {
  fieldName: string;
  displayValue?: string;
  children?: React.ReactNode;
}

export default function FieldValue({ fieldName, displayValue, children }: IFieldValueProps) {
  const ellipsisStyle = { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: "160px" };
  return (
    <div className="flex w-full font-normal items-center text-sm gap-2">
      <div className="font-medium text-gray-400 w-[15%] mr-8">{fieldName}</div>
      {!displayValue ? null : <span className="inline-block text-neutral-800 w-[75%]" style={ellipsisStyle}>{displayValue}</span>}
      {!children ? null : <span className="inline-block" style={ellipsisStyle}> {children}</span>}
    </div>
  );
}
