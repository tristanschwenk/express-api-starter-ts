import { Config } from "../types/config.type";

const configs: Config[] = [
  {
    id: 1,
    key: "key1",
    value: "value1",
  },
  {
    id: 2,
    key: "key2",
    value: "value2",
  },
  {
    id: 3,
    key: "key3",
    value: "value3",
  },
  {
    id: 4,
    key: "key4",
    value: "value4",
  },
];

export const configService = {
  find: () => {
    return configs;
  },

  get: (id: number) => {
    return configs.find((patient) => patient.id === id);
  },

  create: (patient: Config) => {
    configs.push(patient);
    return patient;
  },

  update: (id: number, patient: Config) => {
    const patientIndex = configs.findIndex((patient) => patient.id === id);
    configs[patientIndex] = patient;
    return patient;
  },

  delete: (id: number) => {
    const patientIndex = configs.findIndex((patient) => patient.id === id);
    configs.splice(patientIndex, 1);
    return "ok";
  },
};
