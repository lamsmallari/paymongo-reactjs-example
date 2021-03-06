const errorData = (code, detail) => {
  return { errors: [{ code, detail }] };
};

const postData = async (url, data, key) => {
  const publicKey = process.env.REACT_APP_PAYMONGO_BASE64_PUBLIC_KEY;
  const secretKey = process.env.REACT_APP_PAYMONGO_BASE64_SECRET_KEY;
  const authCode =
    key === "public" ? publicKey : key === "secret" ? secretKey : null;

  if (authCode === null) {
    return {
      status: "error",
      data: errorData("invalid_parameter", "key parameter invalid")
    };
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization: `Basic ${authCode}`
    },
    body: JSON.stringify(data)
  });

  const result = await response.json();

  return result.hasOwnProperty("errors")
    ? { status: "error", data: result }
    : { status: "success", data: result };
};

export default postData;
