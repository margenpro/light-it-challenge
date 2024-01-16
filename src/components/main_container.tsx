import React, { useState } from "react";
import data from "../hooks/mock.json";
import PatientCard from "./molecules/patient_card/patient_card";
import { Button } from "./atoms/button";
import CreatePatient from "./organisms/create_patient";
import { TPatientType } from "../types/patient";
import PatientsContainer from "./organisms/patients_container/patients_container";

export default function MainContainer() {
  const [patientsData, setPatientsData] = useState<TPatientType[]>(data);
  const [isCreatePatientOpen, setIsCreatePatientOpen] = useState<boolean>(false);
  const onOpenAddPatient = () => {
    setIsCreatePatientOpen(true);
  };
  const onCloseAddPatient = () => {
    setIsCreatePatientOpen(false);
  };

  const savePatient = (updatedPatient: TPatientType) => {
    let updatedData = patientsData;
    const isNewPatient = !!!patientsData.find((patient) => patient.id === updatedPatient.id);
    if (isNewPatient) {
      updatedData.unshift(updatedPatient);
    }
    setPatientsData(updatedData.map((patient) => (patient.id === updatedPatient.id ? updatedPatient : patient)));
  };


  return (
    <div className="flex flex-col h-screen w-full gap-4">
      <div className="flex h-[10%] items-center justify-center p-4"></div>
      <div className="flex overflow-hidden h-[85%] p-2 gap-2">
        <div className="flex flex-row w-full gap-4">
          <div className="flex flex-col w-1/6 items-center gap-4">
            <Button variant="secondaryGreen" onClick={onOpenAddPatient}>
              Add new patient
            </Button>
            {!isCreatePatientOpen ? null : <CreatePatient onClose={onCloseAddPatient} savePatient={savePatient} />}
          </div>
          <PatientsContainer patientsData={patientsData} />
        </div>
      </div>
      <div className="flex h-[5%] items-end justify-center p-4">Disclamer text</div>
    </div>
  );
}
