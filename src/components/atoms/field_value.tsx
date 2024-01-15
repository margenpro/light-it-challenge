import React from "react";

interface IFieldValueProps {
  fieldName: string;
  displayValue?: string;
  children?: React.ReactNode;
}

export default function FieldValue({ fieldName, displayValue, children }: IFieldValueProps) {
  return (
    <div className="flex w-full font-normal items-center gap-1 text-sm">
      <div className="font-medium text-gray-400">{fieldName}</div>
      {!displayValue ? null : <div className="text-neutral-800">{displayValue}</div>}
      {!children ? null : children}
    </div>
  );
}
