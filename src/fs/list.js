import fs from "fs";

const list = async () => {
  const path = "./src/fs/files";

  fs.access(path, (existenceError) => {
    try {
      if (existenceError) {
        throw new Error("FS operation failed");
      }
      fs.readdir(path, (err, files) => {
        console.log(files);
      });
    } catch (processError) {
      console.error(processError);
    }
  });
};

await list();
