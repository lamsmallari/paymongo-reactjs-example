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

const predefinedAmount = (tokenId, tokenType) => {
  return {
    data: {
      attributes: {
        amount: 10000,
        currency: "PHP",
        source: {
          id: tokenId,
          type: tokenType
        }
      }
    }
  };
};

function App() {
  const handlePayment = data => {
    paymongo
      .createToken(data)
      .then(result => {
        const tokenId = result.data.id;
        const tokenType = result.data.type;

        paymongo
          .createPayment(predefinedAmount(tokenId, tokenType))
          .then(result => console.log(result))
          .catch(error => {
            const code = error.code;
            const message = error.message;
            console.log(code, message);
          });
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
