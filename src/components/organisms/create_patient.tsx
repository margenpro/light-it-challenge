import React, { useState } from "react";
import { Button } from "../atoms/button";
import { TPatientType } from "../../types/patient";
import { v4 as uuid } from "uuid";

interface ICreatePatientProps {
    patient?: TPatientType;
    onClose: () => void;
    savePatient: (patient: TPatientType) => void
}

type TPatientFormType = {
    name: string;
    website: string;
    id: string;
    description: string;
    avatar?: string;
}

const DEFAULT_VALUES = {
    name: '',
    website: '',
    id: '',
    description: '',
    avatar: '',
}

export default function CreatePatient({patient, onClose, savePatient}: ICreatePatientProps) {
    const [formValues, setFormValues] = useState<TPatientFormType>(DEFAULT_VALUES)

    const handleFormChange = (event: any) => {
        const name = event.target.name
        const value = event.target.value
        setFormValues({...formValues, [name]: value})
    }

    const clearFormValues = () => {
        setFormValues(DEFAULT_VALUES)
    }

    const onCancel = () => {
        clearFormValues()
        onClose()
    }

    const onSubmit = () => {
        const newPatient: TPatientType = {
            id: uuid(),
            name: formValues.name,
            website: formValues.website,
            description: formValues.description,
            avatar: formValues.avatar ?? '',
            createdAt: new Date().toLocaleString(),
        } 
        savePatient(newPatient)
        onCancel()
    }

    const isFormValid = !!formValues.name && !!formValues.website && !!formValues.description
  return (
    <div className="w-full max-w-xs">
      <div className=" bg-gray-50 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline focus:shadow-primary"
            name="name"
            type="text"
            placeholder="Name"
            value={formValues.name}
            onChange={handleFormChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Website
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:outline-none focus:shadow-primary"
            name="website"
            type='url'
            placeholder="https://www.google.com/"
            value={formValues.website}
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
            type='url'
            placeholder="https://www.randompng.com/img3829.png"
            value={formValues.avatar}
            onChange={handleFormChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            rows={5}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:outline-none focus:shadow-primary"
            name="description"
            placeholder="Maxime tenetur eius perspiciatis minus et. Dolores rem exercitationem iure accusamus animi esse deleniti officia."
            value={formValues.description}
            onChange={handleFormChange}
          />
        </div>
        <div className="flex items-center gap-4">
            <Button variant="secondary" onClick={onCancel}>Cancel</Button>
            <Button variant="primary" disabled={!isFormValid} onClick={onSubmit}>Add</Button>
        </div>
      </div>
    </div>
  );
}
