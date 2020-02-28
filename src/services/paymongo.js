import postData from "../helpers/postData";

const paymongo = {};

const errorObj = obj => {
  return { code: obj.code, message: obj.detail };
};

paymongo.createToken = data => {
  const postUrl = "https://api.paymongo.com/v1/tokens";

  return new Promise((resolve, reject) => {
    if (!data) {
      reject(errorObj("no_data", "No data provided"));
      return;
    }

    postData(postUrl, data, "public").then(result => {
      if (result.status === "error") reject(errorObj(result.data.errors[0]));

      resolve(result.data);
    });
  });
};

paymongo.createPayment = data => {
  const postUrl = "https://api.paymongo.com/v1/payments";

  return new Promise((resolve, reject) => {
    if (!data) {
      reject(errorObj("no_token", "No data provided"));
      return;
    }

    postData(postUrl, data, "secret").then(result => {
      if (result.status === "error") reject(errorObj(result.data.errors[0]));

      resolve(result.data);
    });
  });
};

export default paymongo;
