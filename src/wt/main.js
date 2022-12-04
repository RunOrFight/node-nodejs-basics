import { Worker } from "worker_threads";
import os from "os";

const performCalculations = async () => {
  function runService(workerData) {
    return new Promise((res, rej) => {
      const worker = new Worker("./src/wt/worker.js", { workerData });
      worker.on("message", (data) => {
        res({ status: "resolved", data });
      });
      worker.on("error", (err) => {
        rej({ status: "error", data: null });
      });
      worker.on("exit", (code) => {
        if (code !== 0) rej(new Error(`Worker stopped with exit code ${code}`));
      });
    });
  }

  const result = [];
  let start = 9;
  os.cpus().forEach(() => {
    start++;
    result.push(runService(start));
  });
  console.log(await Promise.all(result));
};

await performCalculations();
