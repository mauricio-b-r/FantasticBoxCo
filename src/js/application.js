import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const GRADE_A = { text: "A Grade", value: 0.2 };
const GRADE_B = { text: "B Grade", value: 0.1 };
const GRADE_C = { text: "C Grade", value: 0.05 };
const COLOURS_3 = { text: "3 colours", value: 0.2 };
const COLOURS_2 = { text: "2 colours", value: 0.1 };
const BLACK_ONLY = { text: "Black only", value: 0.05 };
const NO_PRINTING = { text: "No printing", value: 0.0 };
const FANTASTICBOXCO_BRANDING = {
  text: "FantasticBoxCo branding",
  value: 0.95,
};
const REINFORCED_BOTTOM = { text: "Reinforced bottom", value: 0.05 };
const HANDLES = { text: "Handles", value: 0.1 };

const Header = () => {
  return (
    <header>
      <h1 className="logo">FantasticBoxCo</h1>
    </header>
  );
};

const Aside = ({
  step1,
  step2,
  step3,
  step4,
  totalCost,
}) => {
  return (
    <aside>
      <ul className="progress">
        <li>
          <a href="#step-1" className="step step-1 is-active">
            <div className="step-number">1</div>
            <h3 className="step-heading">Dimensions &amp; Quantity</h3>
            <dl>
              <dt>Width:</dt>
              <dd>{step1.width}m</dd>
              <dt>Height:</dt>
              <dd>{step1.height}m</dd>
              <dt>Length:</dt>
              <dd>{step1.length}m</dd>
              <dt>Quantity:</dt>
              <dd>{step1.quantity}</dd>
            </dl>
          </a>
        </li>
        <li>
          <a href="#step-2" className="step step-2">
            <div className="step-number">2</div>
            <h3 className="step-heading">Cardboard Grade</h3>
            <span className="step-value">{step2.text}</span>
          </a>
        </li>
        <li>
          <a href="#step-3" className="step step-3">
            <div className="step-number">3</div>
            <h3 className="step-heading">Print Quality</h3>
            <span className="step-value">{step3.text}</span>
          </a>
        </li>
        <li>
          <a href="#step-4" className="step step-4">
            <div className="step-number">4</div>
            <h3 className="step-heading">Optional Extras</h3>
            {step4.handles && (
              <span className="step-value">{HANDLES.text}</span>
            )}
            {step4.handles && step4.reinforced && <br />}
            {step4.reinforced && (
              <span className="step-value">{REINFORCED_BOTTOM.text}</span>
            )}
          </a>
        </li>
        <li>
          <a href="#total-cost" className="step step-total-cost">
            <h3 className="step-total-cost-heading">Total Cost</h3>
            <div className="step-total-cost-value">
              &pound;{(Math.round(totalCost * 100) / 100).toFixed(2)}
            </div>
          </a>
        </li>
      </ul>
    </aside>
  );
};

const StepOne = ({ step1, setStep1, errors }) => {
  return (
    <div id="step-1" className="content-step">
      <h2>
        Step 1 - Dimensions &amp; Quantity
        <i
          className="fa fa-asterisk"
          title="Cardboard Dimensions and Quantity are required"
        ></i>
      </h2>

      <p className="intro">
        Enter the width, height, length and quantity of the box(es) you require.
      </p>

      <div className="form-row">
        <label htmlFor="width">Width:</label>
        <input
          type="number"
          name="width"
          id="width"
          value={step1.width}
          onChange={(e) => setStep1({ ...step1, width: e.target.value })}
          min="0"
          step="0.01"
        />
        {errors.step1?.width && <span>{errors.step1.width}</span>}
      </div>

      <div className="form-row">
        <label htmlFor="height">Height:</label>
        <input
          type="number"
          name="height"
          id="height"
          value={step1.height}
          onChange={(e) => setStep1({ ...step1, height: e.target.value })}
          min="0"
          step="0.01"
        />
        {errors.step1?.height && <span>{errors.step1.height}</span>}
      </div>

      <div className="form-row">
        <label htmlFor="length">Length:</label>
        <input
          type="number"
          name="length"
          id="length"
          value={step1.length}
          onChange={(e) => setStep1({ ...step1, length: e.target.value })}
          min="0"
          step="0.01"
        />
        {errors.step1?.length && <span>{errors.step1.length}</span>}
      </div>

      <div className="form-row">
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          value={step1.quantity}
          onChange={(e) => setStep1({ ...step1, quantity: e.target.value })}
          min="0"
          step="1"
        />
        {errors.step1?.quantity && <span>{errors.step1.quantity}</span>}
      </div>

      <div className="form-actions">
        <button
          type="button"
          className="btn btn-primary btn-next"
          onClick={() => (window.location.href = "#step-2")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const StepTwo = ({ step2, setStep2, errors }) => {
  return (
    <div id="step-2" className="content-step">
      <h2>
        Step 2 - Cardboard Grade
        <i className="fa fa-asterisk" title="Cardboard Grade is required"></i>
      </h2>

      <p className="intro">
        <strong>FantasticBoxCo</strong> offer a variety of grades of cardboard,
        each altering the price per m<sup>2</sup>: ​{" "}
      </p>

      {errors.step2 && <span>{errors.step2}</span>}

      <ol className="btn-radios-list">
        <li>
          <label>
            <input
              type="radio"
              name="cardboard-grade"
              value={GRADE_A.text}
              onChange={() => setStep2(GRADE_A)}
            />
            <span className="btn btn-radio">
              {GRADE_A.text}
              <br />
              &pound;{GRADE_A.value.toFixed(2)} m<sup>2</sup>
            </span>
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="cardboard-grade"
              value={GRADE_B.text}
              onChange={() => setStep2(GRADE_B)}
            />
            <span className="btn btn-radio">
              {GRADE_B.text}
              <br />
              &pound;{GRADE_B.value.toFixed(2)} m<sup>2</sup>
            </span>
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="cardboard-grade"
              value={GRADE_C.text}
              onChange={() => setStep2(GRADE_C)}
            />
            <span className="btn btn-radio">
              {GRADE_C.text}
              <br />
              &pound;{GRADE_C.value.toFixed(2)} m<sup>2</sup>
            </span>
          </label>
        </li>
      </ol>

      <div className="form-actions">
        <button
          type="button"
          className="btn btn-back"
          onClick={() => (window.location.href = "#step-1")}
        >
          Back
        </button>
        <button
          type="button"
          className="btn btn-primary btn-next"
          onClick={() => (window.location.href = "#step-3")}
        >
          Next
        </button>
      </div>
    </div>
  );
};
const StepThree = ({ setStep3, errors }) => {
  return (
    <div id="step-3" className="content-step">
      <h2>
        Step 3 - Print Quality
        <i
          className="fa fa-asterisk"
          title="Cardboard Print Quality is required"
        ></i>
      </h2>

      <p className="intro">
        A variety of printing options are available for any branding / logos
        which are required:
      </p>

      {errors.step3 && <span>{errors.step3}</span>}

      <ol className="btn-radios-list">
        <li>
          <label>
            <input
              type="radio"
              name="print-quality"
              value={COLOURS_3.text}
              onChange={() => setStep3(COLOURS_3)}
            />
            <span className="btn btn-radio">
              3 colours
              <br />
              &pound;{COLOURS_3.value.toFixed(2)} m<sup>2</sup>
            </span>
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="print-quality"
              value={COLOURS_2.text}
              onChange={() => setStep3(COLOURS_2)}
            />
            <span className="btn btn-radio">
              2 colours
              <br />
              &pound;{COLOURS_2.value.toFixed(2)} m<sup>2</sup>
            </span>
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="print-quality"
              value={BLACK_ONLY.text}
              onChange={() => setStep3(BLACK_ONLY)}
            />
            <span className="btn btn-radio">
              Black only
              <br />
              &pound;{BLACK_ONLY.value.toFixed(2)} m<sup>2</sup>
            </span>
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="print-quality"
              value={NO_PRINTING.text}
              onChange={() => setStep3(NO_PRINTING)}
            />
            <span className="btn btn-radio">
              No printing
              <br />
              &pound;{NO_PRINTING.value.toFixed(2)}
            </span>
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="print-quality"
              value={FANTASTICBOXCO_BRANDING.text}
              onChange={() => setStep3(FANTASTICBOXCO_BRANDING)}
            />
            <span className="btn btn-radio">
              <strong>FantasticBoxCo</strong> branding
              <br />
              5% discount on total price
            </span>
          </label>
        </li>
      </ol>

      <div className="form-actions">
        <button
          type="button"
          className="btn btn-back"
          onClick={() => (window.location.href = "#step-2")}
        >
          Back
        </button>
        <button
          type="button"
          className="btn btn-primary btn-next"
          onClick={() => (window.location.href = "#step-4")}
        >
          Next
        </button>
      </div>
    </div>
  );
};
const StepFour = ({ step4, setStep4, handleFinish, errors }) => {
  return (
    <div id="step-4" className="content-step">
      <h2>Step 4 - Optional Extras</h2>

      <ol className="btn-radios-list">
        <li>
          <label>
            <input
              type="checkbox"
              name="optional-extras"
              value={HANDLES.text}
              onChange={(e) =>
                setStep4({ ...step4, handles: e.target.checked ? HANDLES : "" })
              }
            />
            <span className="btn btn-radio">
              {HANDLES.text}
              <br />
              &pound;{HANDLES.value.toFixed(2)} per box
            </span>
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              name="optional-extras"
              value={REINFORCED_BOTTOM.text}
              onChange={(e) =>
                setStep4({
                  ...step4,
                  reinforced: e.target.checked ? REINFORCED_BOTTOM : "",
                })
              }
            />
            <span className="btn btn-radio">
              {REINFORCED_BOTTOM.text}
              <br />
              &pound;{REINFORCED_BOTTOM.value.toFixed(2)} per box
              <br />
              <small>(only available with grade A cardboard)</small>
            </span>
          </label>
        </li>
      </ol>

      <div className="form-actions">
        <button
          type="button"
          className="btn btn-back"
          onClick={() => (window.location.href = "#step-3")}
        >
          Back
        </button>
        <button
          type="button"
          className="btn btn-primary btn-next"
          onClick={handleFinish}
        >
          Finish
        </button>
      </div>
    </div>
  );
};

const FinishStep = ({ step1, step2, step3, step4, totalCost }) => {
  return (
    <div id="total-cost" className="content-step">
      <h2>Total Cost</h2>

      <dl className="breakdown">
        <dt>Dimensions &amp; Quantity:</dt>
        <dd>
          {step1.quantity} &times; {step1.width}(W)&times;{step1.height}
          (H)&times;{step1.length}(L)
        </dd>

        <dt>Cardboard Grade:</dt>
        <dd>{step2.text}</dd>

        <dt>Print Quality:</dt>
        <dd>{step3.text}</dd>

        <dt>Optional Extras:</dt>
        <dd>
          <ol>
            {step4.handles && <li>{HANDLES.text}</li>}
            {step4.reinforced && <li>{REINFORCED_BOTTOM.text}</li>}
          </ol>
        </dd>

        <dt>Total Cost:</dt>
        <dd>&pound;{(Math.round(totalCost * 100) / 100).toFixed(2)}</dd>
      </dl>
    </div>
  );
};

const Section = ({
  step1,
  step2,
  step3,
  step4,
  setStep1,
  setStep2,
  setStep3,
  setStep4,
  totalCost,
  setTotalCost,
}) => {
  const [hasFinished, setHasFinished] = useState(false);
  const [errors, setErrors] = useState({});

  const handleFinish = (evt) => {
    evt.preventDefault();
    var err = {};
    if (
      step1.quantity <= 0 ||
      step1.length <= 0 ||
      step1.width <= 0 ||
      step1.height <= 0
    ) {
      for (const [key, value] of Object.entries(step1)) {
        if (value <= 0) err[key] = "Input should be greater than 0";
      }
      setErrors({ step1: err });
      window.location.href="#step-1";
      return;
    }
    if (!step2) {
      setErrors({ step2: "Cardboard Grade is required" });
      window.location.href="#step-2";
      return;
    }
    const m2 = step1.length * step1.height * step1.width;
    if (step2 === GRADE_C && step1.length > m2 * 2) {
      setErrors({
        step2: "C Grade is not available for boxes larger than 2M^2",
      });

      window.location.href="#step-2";
      return;
    }
    if (!step3) {
      setErrors({ step3: "Print Quality is required" });
      window.location.href="#step-3";
      return;
    }
    if (step4.reinforced && step2 !== GRADE_A) {
      setErrors({
        step4: "Reinforcement only available with A Grade cardboard",
      });
      window.location.href="#step-4";
      return;
    }
    var total =
      m2 * step2.value +
      (m2 * (step3 === FANTASTICBOXCO_BRANDING ? 0 : step3.value));
    for (const [key, value] of Object.entries(step4)) {
      total += m2 * value?.value || 0;
    }
    total *= step1.quantity;
    if (step3 === FANTASTICBOXCO_BRANDING) total *= step3.value;

    setTotalCost(total);
    setErrors({});
    setHasFinished(true);
    window.location.href="#total-cost";
  };

  useEffect(() => {
    setHasFinished(false);
    setTotalCost(0);
    setErrors({});
  }, [step1, step2, step3, step4]);

  return (
    <section>
      <StepOne
        step1={step1}
        setStep1={setStep1}
        errors={errors}
      ></StepOne>
      <StepTwo
        step2={step2}
        setStep2={setStep2}
        errors={errors}
      ></StepTwo>
      <StepThree
        setStep3={setStep3}
        errors={errors}
      ></StepThree>
      <StepFour
        step4={step4}
        setStep4={setStep4}
        handleFinish={handleFinish}
        errors={errors}
      ></StepFour>
      {hasFinished && (
        <FinishStep
          step1={step1}
          step2={step2}
          step3={step3}
          step4={step4}
          totalCost={totalCost}
        ></FinishStep>
      )}
    </section>
  );
};

const Main = () => {
  let initial_step1 = { width: 0, height: 0, length: 0, quantity: 0 };
  let initial_step2 = "";
  let initial_step3 = "";
  let initial_step4 = { handles: "", reinforced: "" };
  const [step1, setStep1] = useState(initial_step1);
  const [step2, setStep2] = useState(initial_step2);
  const [step3, setStep3] = useState(initial_step3);
  const [step4, setStep4] = useState(initial_step4);
  const [totalCost, setTotalCost] = useState(0);
  return (
    <main>
      <div className="container">
        <Aside
          step1={step1}
          step2={step2}
          step3={step3}
          step4={step4}
          totalCost={totalCost}
        ></Aside>
        <Section
          step1={step1}
          step2={step2}
          step3={step3}
          step4={step4}
          setStep1={setStep1}
          setStep2={setStep2}
          setStep3={setStep3}
          setStep4={setStep4}
          totalCost={totalCost}
          setTotalCost={setTotalCost}
        ></Section>
      </div>
    </main>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
