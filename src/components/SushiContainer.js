import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ four, eatsushi, getSushi}) {
  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      {four.filter(s => !s.eaten).map(sushi => <Sushi key={sushi.id} sushi={sushi} eatsushi={eatsushi} />)}
      <MoreButton getSushi={getSushi } />
    </div>
  );
}

export default SushiContainer;
