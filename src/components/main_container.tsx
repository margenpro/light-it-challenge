import React, { useEffect, useState } from "react";
import { Button } from "./atoms/button";
import CreatePatient from "./organisms/create_patient";
import { TPatientType } from "../types/patient";
import PatientsContainer from "./organisms/patients_container/patients_container";
import LoadingSpinner from "./atoms/loading_spinner";
import { usePatientData } from "../hooks/usePatientData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MainContainer() {
  const [patientsData, setPatientsData] = useState<TPatientType[]>([]);
  const [isCreatePatientOpen, setIsCreatePatientOpen] = useState<boolean>(false);
  const [selectedPatient, setSelectedPatient] = useState<TPatientType>();
  const { data, loading: isPatientDataLoading, error } = usePatientData();

  const onOpenAddPatient = () => {
    setIsCreatePatientOpen(true);
  };
  const onCloseAddPatient = () => {
    setIsCreatePatientOpen(false);
    setSelectedPatient(undefined);
  };

  useEffect(() => {
    if (!isPatientDataLoading && !!data && data.length > 0) {
      setPatientsData(data);
    }
    if (error) {
      toast.error(error);
    }
  }, [data, isPatientDataLoading, error]);

  useEffect(() => {
    if (!!selectedPatient) {
      onOpenAddPatient();
    }
  }, [selectedPatient]);

  const savePatient = (updatedPatient: TPatientType) => {
    let updatedData = patientsData;
    const isNewPatient = !!!patientsData.find((patient) => patient.id === updatedPatient.id);
    if (isNewPatient) {
      updatedData.unshift(updatedPatient);
    }
    setPatientsData(updatedData.map((patient) => (patient.id === updatedPatient.id ? updatedPatient : patient)));
  };

  return (
    <div className="flex flex-col h-screen w-full">
      <div className="flex h-[5%] items-center justify-center pt-10 pb-6">
        <h1 className="font-semibold text-xl text-primary-00756e">Welcome to Patient Management App</h1>
      </div>
      <div className="flex overflow-hidden h-[95%] px-2 pt-4 pb-8 gap-2">
        <div className="flex flex-row w-full gap-4">
          <div className="flex flex-col w-1/5 items-center gap-4 border border-gray-5a6575 bg-gray-f8f9fa p-2 rounded-8">
            <Button variant="secondaryGreen" onClick={onOpenAddPatient}>
              Add new patient
            </Button>
            {!isCreatePatientOpen ? null : (
              <CreatePatient onClose={onCloseAddPatient} savePatient={savePatient} patient={selectedPatient} />
            )}
          </div>
          <div className="flex w-4/5">
            {patientsData.length === 0 || isPatientDataLoading ? (
              <div className="flex w-full justify-center items-center">
                <LoadingSpinner size={50} className=" mr-24 mb-24" />
              </div>
            ) : (
              <PatientsContainer patientsData={patientsData} setSelectedPatient={setSelectedPatient} />
            )}
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} closeOnClick pauseOnHover />
    </div>
  );
}
