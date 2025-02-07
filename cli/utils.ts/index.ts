import fs from "fs/promises";
import path from "path";

export const controllerGenerator = (name: string) => {
  const payload = `
import { Request, Response } from "express";
import { ${name}Service } from "../service/.service";

export const ${name}Controller = {
  find: (req: Request, res: Response) => {
    try {
      return res.json(${name}Service.find());
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  get: (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      return res.json(${name}Service.get(id));
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  create: (req: Request, res: Response) => {
    try {
      const ${name} = req.body;
      return res.json(${name}Service.create(${name}));
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  update: (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const ${name} = req.body;
      return res.json(${name}Service.update(id, ${name}));
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  delete: (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      return res.json(${name}Service.delete(id));
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
};
`;

  return fs.writeFile(
    path.join("src/controller/", `${name}.controller.ts`),
    payload
  );
};

export const routerGenerator = (name: string) => {
  const payload = `
import express from "express";
import { ${name}Controller } from "../controller/${name}.controller";

const ${name}Router = express.Router();

${name}Router.get("/:id", ${name}Controller.get);
${name}Router.get("/", ${name}Controller.find);
${name}Router.post("/", ${name}Controller.create);
${name}Router.put("/:id", ${name}Controller.update);
${name}Router.delete("/:id", ${name}Controller.delete);

export default ${name}Router;
`;

  return fs.writeFile(path.join("src/routers/", `${name}.ts`), payload);
};

const getModelName = (name: string) =>
  name.charAt(0).toUpperCase() + name.slice(1);

export const serviceGenerator = (name: string) => {
  const payload = `
  import { ${getModelName(name)} } from "../types/${name}.type";
  export const ${name}Service = {
    find: () => {
      return ${name}s;
    },
    get: (id: number) => {
      return ${name}s.find((${name}) => ${name}.id === id);;
    },
    create: (${name}: ${getModelName(name)}) => {
      ${name}s.push(${name});
      return ${name};
    },
    update: (id: number, ${name}: ${getModelName(name)}) => {
      const ${name}Index = ${name}s.findIndex((${name}) => ${name}.id === id);
    ${name}s[${name}Index] = ${name};
    return ${name};
    },
    delete: (id: number) => {
      const ${name}Index = ${name}s.findIndex((${name}) => ${name}.id === id);
    ${name}s.splice(${name}Index, 1);
    },
  };

`;

  return fs.writeFile(path.join("src/service/", `${name}.service.ts`), payload);
};

export const typesGenerator = (name: string) => {
  const payload = `
export type ${getModelName(name)} = {
  id: number;
};
`;

  return fs.writeFile(path.join("src/types/", `${name}.type.ts`), payload);
};
