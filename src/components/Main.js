import React, { useState } from "react";
import { calculateBalance } from "../utils/functions.js";
import houseImg from "../assets/houseImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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
        text: "Please enter card number",
        color: "#FF4D00",
        status: false,
      });
    } else if (cardNumber.length < 19) {
      setAlerts({
        text: "Invalid number",
        color: "#FF4D00",
        status: false,
      });
    } else {
      setAlerts({
        text: `Your balance is $` + calculateBalance(cardNumber),
        color: "#1E7500",
        status: true,
      });
    }
  };

  return (
    <main className="Main">
      <form className="balance-form" onSubmit={(e) => checkBalance(e)}>
        <div className="container">
          <section className="detail">
            <div className="header">
              <h1>Balance checker</h1>
              <img src={houseImg} alt="dwelling-logo" />
            </div>
            <p>Enter your card number to check it's balance.</p>
          </section>
          <section className={alerts && !alerts.status ? "card-input invalid-input-border" : "card-input"}>
            <input
              pattern="^[\d ]*$"
              type="tel"
              inputMode="numeric"
              value={cardNumber}
              onKeyDown={(e) => onKeyPress(e)}
              onChange={(e) => changeCardNumber(e)}
              maxLength="19"
              placeholder="xxxx xxxx xxxx xxxx"
            />
            {cardNumber.length > 0 && <FontAwesomeIcon icon={faXmark} className="close" onClick={eraseAll} />}
          </section>

          {alerts !== "" && alerts && (
            <div className={alerts && !alerts.status ? "validations invalid-validations-border" : "validations"}>
              <p style={{ color: alerts.color }}>{alerts.text}</p>
            </div>
          )}
        </div>
        <button className="check-button">Check</button>
      </form>
    </main>
  );
};

export default Main;
