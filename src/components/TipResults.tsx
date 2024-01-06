import { ResultsProps } from "../Interfaces/AppInterface";

function TipResults({ tipValues, onReset }: ResultsProps) {
  const tipPerPerson =
    tipValues.numPeople !== 0
      ? ((tipValues.tip / 100) * tipValues.billAmount) / tipValues.numPeople
      : 0.0;

  const totalPerPerson =
    tipPerPerson !== 0
      ? tipValues.billAmount / tipValues.numPeople + tipPerPerson
      : 0.0;

  return (
    <div className="results_section">
      <div>
        <div className="amount_label">
          <div>
            <h2>Tip Amount</h2>
            <p>/ person</p>
          </div>
          <h1 className="tip_person">${tipPerPerson.toFixed(2)}</h1>
        </div>
        <div className="amount_label">
          <div>
            <h2>Total</h2>
            <p>/ person</p>
          </div>
          <h1 className="tip_total">${totalPerPerson.toFixed(2)}</h1>
        </div>
      </div>

      {/* {tipPerPerson && totalPerPerson ? (
        <button type="reset" disabled={false} onClick={onReset}>
          RESET
        </button>
      ) : (
        <button type="reset" disabled>
          RESET
        </button>
      )} */}

      {/* The above code works but the one below is more professional */}

      <button
        type="reset"
        disabled={!tipPerPerson || !totalPerPerson}
        onClick={onReset}
      >
        RESET
      </button>
    </div>
  );
}

export default TipResults;
