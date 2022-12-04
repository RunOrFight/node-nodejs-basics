import fs from "fs";

const read = async () => {
  const readableStream = fs.createReadStream(
    "./src/streams/files/fileToRead.txt",
    "utf-8"
  );
  let data = "";
  readableStream.on("data", (chunk) => (data += chunk));
  readableStream.on("end", () => process.stdout.write(data));
};

await read();
