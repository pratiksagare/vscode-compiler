export const getRunTimeEnv = async () => {
  try {
    const res = await fetch("https://emkc.org/api/v2/piston/runtimes");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch runtimes", error);
    return [];
  }
}

export const runCode = async (code, language, version) => {
  if (!code || !language) {
    throw new Error("Code and language must be provided");
  }
  const response = await fetch("https://emkc.org/api/v2/piston/execute", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      language: language,
      version: version,
      files: [{ name: "index", content: code }],
    })
  });

  const result = await response.json();
  return result
};
