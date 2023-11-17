import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// const pca = new PublicClientApplication({
//   auth: {
//     clientId: "475aaaa6-b5f3-46f7-ad46-5482b0dfa6a0",
//     authority: "https://login.windows.net/02511c97-883d-44d0-97e4-f726cd3a676b/oauth2/token",
//     redirectUri: "http://localhost:3000"
//   }
// })
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
