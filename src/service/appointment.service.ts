import { appointments } from "../data/appointments";
import { Appointments } from "../types/appointment.type";

export const appointmentService = {
  find: () => {
    return appointments;
  },

  get: (id: number) => {
    return appointments.find((patient) => patient.id === id);
  },

  create: (patient: Appointments) => {
    appointments.push(patient);
    return patient;
  },

  update: (id: number, patient: Appointments) => {
    const patientIndex = appointments.findIndex((patient) => patient.id === id);
    appointments[patientIndex] = patient;
    return patient;
  },

  delete: (id: number) => {
    const patientIndex = appointments.findIndex((patient) => patient.id === id);
    appointments.splice(patientIndex, 1);
    return "ok";
  },
};
