import React from "react";
import data from "../hooks/mock.json"
import PatientCard from "./molecules/patient_card/patient_card";

export default function MainContainer() {
  return (
    <div
      className="flex flex-col h-screen w-full gap-4"
    >
      <div className= "flex h-1/6 items-center justify-center border border-gray-400 rounded-4 p-4">Header</div>
      <div className= "flex flex-wrap h-4/6 items-center justify-center border border-gray-400 rounded-4 p-4 gap-2">{data.map(patient => <PatientCard patient={patient} key={patient.id} />)}</div>
      <div className= "flex h-1/6 items-end justify-center border border-gray-400 rounded-4 p-4">Disclamer text</div>
    </div>
  );
}
