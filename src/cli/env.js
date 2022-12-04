const parseEnv = () => {
  console.log(
    Object.entries(process.env)
      .filter(([key]) => key.startsWith("RSS"))
      .map((arr) => arr.join("="))
      .join("; ")
  );
};

parseEnv();
