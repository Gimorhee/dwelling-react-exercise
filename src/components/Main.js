import React, { useState } from "react";
import { calculateBalance } from "../utils/functions.js";
import BalanceForm from "./BalanceForm";
import Alerts from "./Alerts";

const Main = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [alerts, setAlerts] = useState();

  //   onChange method used for changing cardNumber state
  const changeCardNumber = (e) => {
    Number(cardNumber.length + 1) % 5 === 0 ? setCardNumber(cardNumber + " " + e.target.value.charAt(e.target.value.length - 1)) : setCardNumber(e.target.value);
  };

  //   Method used for removing cardNumber and alerts
  const eraseAll = () => {
    setCardNumber("");
    setAlerts("");
  };

  //   Applying eraseAll method when the user clicked backspace or delete button
  const onKeyPress = (e) => {
    if (e.keyCode === 8 || e.keyCode === 46) {
      eraseAll();
    }
  };

  //   Checking user inputs and creating alerts depending on diff. conditions
  const checkBalance = (e) => {
    e.preventDefault();

    if (cardNumber.length === 0) {
      setAlerts({
        text: "Please enter card number.",
        color: "#FC5404",
        status: false,
      });
    } else if (cardNumber.length < 19) {
      setAlerts({
        text: "Invalid number. Please try again.",
        color: "#FC5404",
        status: false,
      });
    } else {
      setAlerts({
        text: `Your balance is $` + calculateBalance(cardNumber),
        color: "#219F94",
        status: true,
      });
    }
  };

  return (
    <main className="Main">
      <BalanceForm cardNumber={cardNumber} checkBalance={checkBalance} alerts={alerts} onKeyPress={onKeyPress} changeCardNumber={changeCardNumber} eraseAll={eraseAll} />

      {alerts !== "" && alerts && <Alerts alerts={alerts} />}
    </main>
  );
};

export default Main;
