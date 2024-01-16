import React, { useState } from "react";
import { TPatientType } from "../../../types/patient";
import PatientCard from "../../molecules/patient_card/patient_card";
import Pagination from "./pagination";

interface IPatientsContainerProps {
  patientsData: TPatientType[];
}

export default function PatientsContainer({ patientsData }: IPatientsContainerProps) {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const ITERMS_PER_PAGE: number = 16;
  const paginatedItems = [];

  for (let i = 0; i < patientsData.length; i += ITERMS_PER_PAGE) {
    paginatedItems.push(patientsData.slice(i, i + ITERMS_PER_PAGE));
  }

  const patientsToDispaly = paginatedItems[currentPage];
  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex justify-center flex-wrap w-full gap-2 max-h-[90%]">
        {patientsToDispaly.map((patient) => (
          <PatientCard patient={patient} key={patient.id} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={paginatedItems.length} onPageChange={onPageChange} />
    </div>
  );
}
