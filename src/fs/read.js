import fs from "fs";

const read = async () => {
  const path = "./src/fs/files/fileToRead.txt";

  fs.access(path, fs.constants.F_OK, (existenceError) => {
    try {
      if (existenceError) {
        throw new Error("FS operation failed");
      }
      fs.readFile(path, (err, data) => {
        console.log(data.toString("UTF8"));
      });
    } catch (processError) {
      console.error(processError);
    }
  });
};

await read();
