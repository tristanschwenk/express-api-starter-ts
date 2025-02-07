import { program } from "commander";
import {
  controllerGenerator,
  dataGenerator,
  routerGenerator,
  serviceGenerator,
  typesGenerator,
} from "./utils.ts";

program
  .name("Express API")
  .showHelpAfterError()
  .description("A basic starter for an express.js API with Typescript");

program
  .command("generate")
  .arguments("<name>")
  .action((name) => {
    console.log("Starting the generation process...");
    console.log(`Generate ${name} types...`);
    typesGenerator(name);
    console.log(`Generate ${name} data...`);
    dataGenerator(name);
    console.log(`Generate ${name} service...`);
    serviceGenerator(name);
    console.log(`Generate ${name} controller...`);
    controllerGenerator(name);
    console.log(`Generate ${name} router...`);
    routerGenerator(name);

    console.log(
      `Now you just have to add the router to your api with the endpoint you want`
    );
  });

program.parse();
