import { patients } from "../data/patients";
import { Patient } from "../types/patient.type";

export const patientService = {
  find: () => {
    return patients;
  },

  get: (id: number) => {
    return patients.find((patient) => patient.id === id);
  },

  create: (patient: Patient) => {
    patients.push(patient);
    return patient;
  },

  update: (id: number, patient: Patient) => {
    const patientIndex = patients.findIndex((patient) => patient.id === id);
    patients[patientIndex] = patient;
    return patient;
  },

  delete: (id: number) => {
    const patientIndex = patients.findIndex((patient) => patient.id === id);
    patients.splice(patientIndex, 1);
    return "ok";
  },
};
