import { Doctor } from "../types/doctor.type";

const doctors: Doctor[] = [
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

export const doctorService = {
  find: () => {
    return doctors;
  },

  get: (id: number) => {
    return doctors.find((doctor) => doctor.id === id);
  },

  create: (doctor: Doctor) => {
    doctors.push(doctor);
    return doctor;
  },

  update: (id: number, doctor: Doctor) => {
    const doctorIndex = doctors.findIndex((doctor) => doctor.id === id);
    doctors[doctorIndex] = doctor;
    return doctor;
  },

  delete: (id: number) => {
    const doctorIndex = doctors.findIndex((doctor) => doctor.id === id);
    doctors.splice(doctorIndex, 1);
    return "ok";
  },
};
