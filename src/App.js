import React, { useState } from "react";
import "./styles.css";
import CurTime from "react-live-clock";
import { FaSignal, FaWifi, FaBatteryFull, FaBackspace } from "react-icons/fa";

function App() {
  const [isShow, setIsShow] = useState(false);
  const [passcode, setPasscode] = useState("");

  function showKeyPad() {
    setIsShow(true);
  }

  function handleKeypad(num) {
    if (num > 0) {
      setPasscode(`${passcode}${num}`);
    } else {
      setPasscode(passcode.slice(0, passcode.length - 1));
    }
  }

  function addFilledStatus(num) {
    if (num !== undefined) return `code code--filled`;
    return "code";
  }

  return (
    <div className="App">
      <div className="mainContainer">
        <section className="header">
          <CurTime />
          <FaSignal className="status" />
          <FaWifi className="status" />
          <FaBatteryFull className="status" />
        </section>
        <section className="createPasscode">
          <h1>Create Passcode</h1>
          <p> Enter your OTP code here. Used for logging in. </p>
        </section>
        <section className="passcode" onClick={() => showKeyPad()}>
          <div className={addFilledStatus(passcode[0])}>{passcode[0]}</div>
          <div className={addFilledStatus(passcode[1])}>{passcode[1]}</div>
          <div className={addFilledStatus(passcode[2])}>{passcode[2]}</div>
          <div className={addFilledStatus(passcode[3])}>{passcode[3]}</div>
        </section>
        {isShow && (
          <Keypad disabled={passcode.length > 4} onPress={handleKeypad} />
        )}
      </div>
    </div>
  );
}
// &&
// states
// or in more modern JS and stateless react

function Keypad({ onPress, disabled }) {
  const pads = [1, 2, 3, 4, 5, 6, 7, 8, 9, undefined, 0];

  function deleteNumber() {
    onPress(-1);
  }

  return (
    <div className="hiddenKeypad">
      {pads.map((p, i) => (
        <button
          disabled={disabled}
          key={i}
          className="digit"
          onClick={() => p !== undefined && onPress(p)}
        >
          {p}
        </button>
      ))}
      <button className="digit" onClick={deleteNumber}>
        <FaBackspace />
      </button>
      <button className="continueBtn">Continue</button>
      <span className="line" />
    </div>
  );
}

// }
export default App;
