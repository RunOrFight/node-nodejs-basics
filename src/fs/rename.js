import fs from "fs";
import path from "path";

const rename = async () => {
  const rootPath = "./src/fs/files/";
  const wrongFilenamePath = rootPath + "wrongFilename.txt";
  const properFilenamePath = rootPath + "properFilename.md";
  const operationError = new Error("FS operation failed");

  fs.access(wrongFilenamePath, fs.constants.F_OK, (existenceError) => {
    try {
      if (existenceError) {
        throw operationError;
      }
      fs.access(properFilenamePath, fs.constants.F_OK, (existenceError) => {
        if (!existenceError) {
          throw operationError;
        }
        fs.rename(wrongFilenamePath, properFilenamePath, () => {
          console.log("FS operation completed");
        });
      });
    } catch (processError) {
      console.error(processError);
    }
  });
};

await rename();
