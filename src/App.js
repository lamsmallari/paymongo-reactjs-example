import React from "react";
import "./App.css";
import paymongo from "./services/paymongo";

const predefinedCreditCardData = {
  data: {
    attributes: {
      number: "4123450131000508",
      exp_month: 12,
      exp_year: 25,
      cvc: "111",
      billing: {
        address: {
          line1: "address",
          city: "Biñan",
          state: "Laguna",
          country: "PH",
          postal_code: "4024"
        },
        name: "John",
        email: "johnmail@gmail.com",
        phone: "09988909890"
      }
    }
  }
};

const predefinedAmount = {
  data: {
    attributes: {
      amount: 100,
      currency: "PHP",
      source: {
        id: "tokenid",
        type: "tokentype"
      }
    }
  }
};

function App() {
  const handlePayment = data => {
    paymongo
      .createToken(data)
      .then(result => {
        const tokenId = result.data.id;
        const tokenType = result.data.type;
        console.log(tokenId, tokenType);
        // console.log(result);
      })
      .catch(error => {
        const code = error.code;
        const message = error.message;
        console.log(code, message);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => handlePayment(predefinedCreditCardData)}>
          Test createToken
        </button>
      </header>
    </div>
  );
}

export default App;
