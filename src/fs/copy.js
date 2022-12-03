import fs from "fs";

const copy = async () => {
  const rootPath = "./src/fs/";
  const filesFolderPath = rootPath + "files";
  const filesCopyFolderPath = rootPath + "files_copy";
  const operationError = new Error("FS operation failed");

  fs.access(filesFolderPath, (existenceError) => {
    try {
      if (existenceError) {
        throw operationError;
      }
      fs.access(filesCopyFolderPath, (existenceError) => {
        if (!existenceError) {
          throw operationError;
        }
        fs.cp(filesFolderPath, filesCopyFolderPath, { recursive: true }, () => {
          console.log("FS operation completed");
        });
      });
    } catch (processError) {
      console.error(processError);
    }
  });
};

copy();
