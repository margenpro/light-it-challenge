import React from "react";

interface IFieldValueProps {
  fieldName: string;
  displayValue?: string;
  children?: React.ReactNode;
}

export default function FieldValue({ fieldName, displayValue, children }: IFieldValueProps) {
  return (
    <div className="flex w-full font-normal items-center text-sm gap-2">
      <div className="font-medium text-gray-400 w-[15%] mr-8">{fieldName}</div>
      {!displayValue ? null : <div className="text-neutral-800 w-[75%]">{displayValue}</div>}
      {!children ? null : <div className="w-[75%]"> {children}</div>}
    </div>
  );
}
