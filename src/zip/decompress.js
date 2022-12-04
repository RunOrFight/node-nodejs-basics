import fs from "fs";
import zlib from "zlib";

const decompress = async () => {
  const fileToDecompressPath = "./src/zip/files/archive.gz";
  const decompresedFilePath = "./src/zip/files/fileToCompress.txt";

  const readableStream = fs.createReadStream(fileToDecompressPath);
  const compressStream = zlib.createGunzip();
  const writableStream = fs.createWriteStream(decompresedFilePath);

  readableStream.pipe(compressStream).pipe(writableStream);
};

await decompress();
