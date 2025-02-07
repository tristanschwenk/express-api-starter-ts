import { doctors } from "../data/doctors";
import { Doctor } from "../types/doctor.type";

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
