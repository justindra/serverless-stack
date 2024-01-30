import { dynamicImport } from "../../src/util/module";

const configPath = process.argv[2];

dynamicImport(configPath).then((val) => {
  // Remove any leading slashes if it exists
  console.log(val.default?.basePath);
});
