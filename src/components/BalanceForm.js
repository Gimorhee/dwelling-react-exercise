import React from "react";
import houseImg from "../assets/houseImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const BalanceForm = ({ cardNumber, checkBalance, alerts, onKeyPress, changeCardNumber, eraseAll }) => {
  return (
    <form className="balance-form" onSubmit={(e) => checkBalance(e)}>
      <section className={alerts && !alerts.status ? "detail invalid-detail-border" : "detail"}>
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
        <FontAwesomeIcon icon={faXmark} className="close" onClick={eraseAll} />
      </section>

      <button className="check-button">Check</button>
    </form>
  );
};

export default BalanceForm;
