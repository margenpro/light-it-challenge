import React, { useState } from "react";
import { TPatientType } from "../../../types/patient";
import FieldValue from "../../atoms/field_value";
import Avatar from "../../atoms/avatar";
import { FeatherIcon } from "../../atoms/feather_icon";

interface IPatientCardProps {
  patient: TPatientType;
  expanded?: boolean;
}

export default function PatientCard({ patient, expanded = false }: IPatientCardProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(expanded);
  const onExpand = () => {
    setIsExpanded((prevState) => !prevState);
  };
  return (
    <div
      className={`flex flex-col self-start bg-slate-100 border border-gray-400 rounded-8 px-3 py-2 shadow-md gap-2 overflow-hidden ${
        isExpanded ? "w-[80%]" : " w-1/5 h-1/4"
      }`}
    >
      <div className="flex items-center gap-3 cursor-pointer" onClick={onExpand}>
        <div className="flex w-[15%]">
          <Avatar imgUrl={patient.avatar} />
        </div>
        <div className="flex w-[75%] font-semibold text-green-800">{patient.name}</div>
        <div className="flex w-[10%] justify-end p-1">
          <FeatherIcon name={isExpanded ? "ChevronLeft" : "ChevronRight"} size={24} className="hover:text-blue-300" />
        </div>
      </div>
      <div>
        <FieldValue fieldName="Created Date" displayValue={patient.createdAt} />
      </div>
      <div>
        <FieldValue fieldName="Website">
          <a href={patient.website}>{patient.website}</a>
        </FieldValue>
      </div>
      {!isExpanded ? null : (
        <div>
          <div>
            <FieldValue fieldName="Description">
              <p>{patient.description}</p>
            </FieldValue>
          </div>
        </div>
      )}
    </div>
  );
}
