import { createHash } from "node:crypto";
import fs from "fs";

const calculateHash = async () => {
  const path = "./src/hash/files/fileToCalculateHashFor.txt";
  fs.readFile(path, (err, data) => {
    const hash = createHash("sha256").update(data).digest("hex");
    console.log(hash);
  });
};

await calculateHash();
