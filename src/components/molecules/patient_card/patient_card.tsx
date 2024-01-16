import React, { useState } from "react";
import { TPatientType } from "../../../types/patient";
import Avatar from "../../atoms/avatar";
import { FeatherIcon } from "../../atoms/feather_icon";
import FieldValue from "../../atoms/field_value";
import { Tooltip } from "react-tooltip";

interface IPatientCardProps {
  patient: TPatientType;
  expanded?: boolean;
  setSelectedPatient: (patient: TPatientType) => void;
}

export default function PatientCard({ patient, expanded = false, setSelectedPatient }: IPatientCardProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(expanded);
  const onExpand = () => {
    setIsExpanded((prevState) => !prevState);
  };
  const onEditClick = () => {
    setSelectedPatient(patient);
  };
  const ellipsisStyle = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    width: isExpanded ? "100%" : "170px",
  };
  return (
    <div
      className={`flex flex-col self-start bg-slate-100 border border-gray-400 rounded-8 px-3 pt-2 shadow-md gap-4 overflow-hidden ${
        isExpanded ? "w-[80%]" : " w-[22%] min-h-40"
      }`}
    >
      <div className="flex items-center gap-3 cursor-pointer" onClick={onExpand}>
        <div className={`flex ${isExpanded ? "w-full" : "w-16"}`}>
          <Avatar imgUrl={patient.avatar} />
        </div>
        <span className="inline-block font-semibold text-green-800" style={ellipsisStyle}>
          {patient.name}
        </span>
        <div className={`flex justify-end p-1 ${isExpanded ? "w-full" : "w-16"}`}>
          <FeatherIcon name={isExpanded ? "ChevronLeft" : "ChevronRight"} size={24} className="hover:text-blue-300" />
        </div>
      </div>
      <div>
        <FieldValue fieldName="Created" displayValue={patient.createdAt} />
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
      <div className="flex w-full justify-end pb-2 pr-2">
        <FeatherIcon
          name="Edit"
          size={20}
          className="cursor-pointer hover:text-blue-300 focus:outline-none"
          data-tooltip-id="edit-tooltip"
          onClick={onEditClick}
        />
      </div>
      <Tooltip id="edit-tooltip" content="Edit Patient" className="!rounded-8" />
    </div>
  );
}
