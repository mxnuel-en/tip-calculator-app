import { useState } from "react";
import TipCalculator from "./TipCalculator";
import TipResults from "./TipResults";

function MainContent() {
  const [tipValues, setTipValues] = useState({
    billAmount: 0,
    numPeople: 0,
    tip: 0,
  });

  const handleSetBill = (billAmount: number) => {
    const updateBill = {
      ...tipValues,
      billAmount,
    };
    setTipValues(updateBill);
  };

  const handleSetPeople = (numPeople: number) => {
    const updateNumPeople = {
      ...tipValues,
      numPeople,
    };
    setTipValues(updateNumPeople);
  };

  const handleSetTip = (tip: number) => {
    const updateTip = {
      ...tipValues,
      tip,
    };
    setTipValues(updateTip);
  };

  const handleResetTipVal = () => {
    const resetTip = {
      ...tipValues,
      billAmount: 0,
      numPeople: 0,
      tip: 0,
    };
    setTipValues(resetTip);
  };

  return (
    <main className="container">
      <TipCalculator
        tipValues={tipValues}
        onSetBill={handleSetBill}
        onSetNumPeople={handleSetPeople}
        onSetTip={handleSetTip}
      />
      <TipResults tipValues={tipValues} onReset={handleResetTipVal} />
    </main>
  );
}

export default MainContent;
