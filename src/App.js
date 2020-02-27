import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    // Example POST method implementation:
    async function postData(url) {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          authorization:
            "Basic " + process.env.REACT_APP_PAYMONGO_BASE64_PUBLIC_KEY
        },
        body:
          '{"data":{"attributes":{"number":"4123450131000508","exp_month":12,"exp_year":25,"cvc":"111","billing":{"address":{"line1":"address","city":"Biñan","state":"Laguna","country":"PH","postal_code":"4024"},"name":"John","email":"johnmail@gmail.com","phone":"09988909890"}}}}'
      });

      return await response.json(); // parses JSON response into native JavaScript objects
    }

    postData("https://api.paymongo.com/v1/tokens").then(data => {
      console.log(data); // JSON data parsed by `response.json()` call
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
