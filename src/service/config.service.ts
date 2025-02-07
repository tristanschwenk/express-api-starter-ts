import { configs } from "../data/config";
import { Config } from "../types/config.type";

export const configService = {
  find: () => {
    return configs;
  },

  get: (id: number) => {
    return configs.find((config) => config.id === id);
  },

  create: (config: Config) => {
    configs.push(config);
    return config;
  },

  update: (id: number, config: Config) => {
    const configIndex = configs.findIndex((config) => config.id === id);
    configs[configIndex] = config;
    return config;
  },

  delete: (id: number) => {
    const configIndex = configs.findIndex((config) => config.id === id);
    configs.splice(configIndex, 1);
    return "ok";
  },
};
