import React from "react";
import { TPatientType } from "../../../types/patient";
import moment from "moment";
import FieldValue from "../../atoms/field_value";

interface IPatientCardProps {
  patient: TPatientType;
}

export default function PatientCard({ patient }: IPatientCardProps) {
  return (
    <div className="flex flex-col justify-center bg-slate-100 border border-gray-400 rounded-8 px-3 py-2 shadow-md gap-2">
      <div className="flex p-2 text-lg text-green-800">{patient.name}</div>
      <div><FieldValue fieldName="Created Date" displayValue={patient.createdAt} /></div>
      <div><FieldValue fieldName="Website"><a href={patient.website}>{patient.website}</a></FieldValue></div>
    </div>
  );
}
