import React, { useEffect } from "react";
import { useState } from "react";
import "./Countdown.css";

const Countdown = ({ loading }) => {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (countdown === 0) {
      setTimeout(() => {
        setCountdown(3);
      }, 1000);
    }
    if (loading) {
      setTimeout(() => {
        let newCountdown = countdown;
        setCountdown(newCountdown - 1);
      }, 1000);
    }
  }, [loading, countdown]);
  return (
    <div className="count-container">
      <h1>{countdown != 0 ? countdown : null}</h1>
      {countdown === 0 ? <h1 style={{ color: "#43b047" }}>GO!</h1> : null}
    </div>
  );
};

export default Countdown;
