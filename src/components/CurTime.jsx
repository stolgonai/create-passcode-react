import React from "react";
import LiveClock from "react-live-clock";

function CurTime() {
  return (
    <span className="time">
      <LiveClock format="hh:mm" timezone={"KGT/Bishkek"} />
    </span>
  );
}

export default CurTime;
