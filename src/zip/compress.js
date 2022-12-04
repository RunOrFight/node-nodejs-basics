import fs from "fs";
import zlib from "zlib";

const compress = async () => {
  const fileToCompressPath = "./src/zip/files/fileToCompress.txt";
  const compresedFilePath = "./src/zip/files/archive.gz";
  const readableStream = fs.createReadStream(fileToCompressPath);
  const compressStream = zlib.createGzip();
  const writableStream = fs.createWriteStream(compresedFilePath);

  readableStream.pipe(compressStream).pipe(writableStream);
};

await compress();
