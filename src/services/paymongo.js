import postData from "../helpers/postData";

const paymongo = {};

const errorObj = (code, message) => {
  return { code, message };
};

paymongo.createToken = data => {
  return new Promise((resolve, reject) => {
    if (!data) {
      reject(errorObj("no_data", "No data provided"));
      return;
    }

    const postUrl = "https://api.paymongo.com/v1/tokens";

    postData(postUrl, data, "public").then(result => {
      if (result.status === "error") {
        const error = result.data.errors[0];
        reject(errorObj(error.code, error.detail));
      }

      resolve(result.data);
    });
  });
};

paymongo.createPayment = token => {
  return new Promise((resolve, reject) => {});
};

export default paymongo;
