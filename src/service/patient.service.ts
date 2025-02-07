import { Patient } from "../types/patient.type";

const patients: Patient[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    birthDate: new Date("1990-01-01"),
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    birthDate: new Date("1990-02-01"),
  },
  {
    id: 3,
    firstName: "Bob",
    lastName: "Marley",
    birthDate: new Date("1990-03-01"),
  },
  {
    id: 4,
    firstName: "Alice",
    lastName: "Doe",
    birthDate: new Date("1990-04-01"),
  },
  {
    id: 5,
    firstName: "Martin",
    lastName: "Doe",
    birthDate: new Date("1990-05-01"),
  },
];

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
