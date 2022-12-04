const parseArgs = () => {
  console.log(
    process.argv

      .filter((arg) => arg.startsWith("--"))
      .map(
        (arg) =>
          `${arg.replace("--", "")} is ${
            process.argv[process.argv.indexOf(arg) + 1]
          }`
      )
      .join(", ")
  );
};

parseArgs();
