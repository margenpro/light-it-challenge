import React, { useEffect, useState } from "react";
import { Button } from "../atoms/button";
import { TPatientType } from "../../types/patient";
import { v4 as uuid } from "uuid";
import { toast } from 'react-toastify';
import { Tooltip } from "react-tooltip";

interface ICreatePatientProps {
  patient?: TPatientType;
  onClose: () => void;
  savePatient: (patient: TPatientType) => void;
}

type TPatientFormType = {
  name: string;
  website: string;
  id: string;
  description: string;
  avatar?: string;
};

const DEFAULT_VALUES = {
  name: "",
  website: "",
  id: "",
  description: "",
  avatar: "",
};

export default function CreatePatient({ patient, onClose, savePatient }: ICreatePatientProps) {
  const initialValues: TPatientFormType = !!patient
    ? {
        name: patient.name,
        website: patient.website,
        id: patient.id,
        description: patient.description,
        avatar: patient.avatar,
      }
    : DEFAULT_VALUES;
  const [formValues, setFormValues] = useState<TPatientFormType>(initialValues);

  const handleFormChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormValues({ ...formValues, [name]: value });
  };

  const clearFormValues = () => {
    setFormValues(DEFAULT_VALUES);
  };

  const onCancel = () => {
    clearFormValues();
    onClose();
  };

  const onSubmit = () => {
    const newPatient: TPatientType = {
      ...patient,
      id: formValues.id ? formValues.id : uuid(),
      name: formValues.name,
      website: formValues.website,
      description: formValues.description,
      avatar: formValues.avatar ?? "",
      createdAt: patient?.createdAt ? patient?.createdAt : new Date().toLocaleString(),
    };
    savePatient(newPatient);
    toast.success(!!!patient ? 'New patient has been added!': 'Patient has been updated!')
    onCancel();
  };

  useEffect(() => {
    if(!!patient){
      setFormValues(initialValues)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [patient])

  const isFormValid = !!formValues.name && !!formValues.website && !!formValues.description;
  return (
    <div className="flex w-full p-2 max-w-xs">
      <div className="flex flex-col w-full bg-gray-50 shadow-md rounded p-4 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline focus:shadow-primary"
            name="name"
            type="text"
            placeholder="Name"
            value={formValues.name}
            required
            onChange={handleFormChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Website</label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:outline-none focus:shadow-primary"
            name="website"
            type="url"
            placeholder="https://www.google.com/"
            value={formValues.website}
            required
            onChange={handleFormChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Avatar Image <span className="text-xs text-gray-400 pl-1">(optional)</span>
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:outline-none focus:shadow-primary"
            name="avatar"
            type="url"
            placeholder="https://www.randompng.com/img3829.png"
            value={formValues.avatar}
            onChange={handleFormChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
          <textarea
            rows={5}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:outline-none focus:shadow-primary"
            name="description"
            placeholder="Maxime tenetur eius perspiciatis minus et. Dolores rem exercitationem iure accusamus animi esse deleniti officia."
            value={formValues.description}
            required
            onChange={handleFormChange}
          />
        </div>
        <div className="flex items-center gap-4">
          <Button variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="primary" disabled={!isFormValid} onClick={onSubmit} data-tooltip-id="submit-tooltip">
            {!!patient ? "Save" : "Add"}
          </Button>
          {isFormValid ? null : <Tooltip id="submit-tooltip" content="Fill in all the required fields" className="!rounded-8" />}
        </div>
      </div>
    </div>
  );
}
