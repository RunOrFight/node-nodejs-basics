import fs from "fs";

const write = async () => {
  const path = "./src/streams/files/fileToWrite.txt";
  const writeStream = fs.createWriteStream(path);
  process.stdin.pipe(writeStream);
};

await write();
