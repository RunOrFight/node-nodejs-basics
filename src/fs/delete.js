import fs from "fs";

const remove = async () => {
  const path = "./src/fs/files/fileToRemove.txt";

  fs.access(path, fs.constants.F_OK, (existenceError) => {
    try {
      if (existenceError) {
        throw new Error("FS operation failed");
      }

      fs.unlink(path, () => {
        console.log("FS operation completed");
      });
    } catch (processError) {
      console.error(processError);
    }
  });
};

await remove();
