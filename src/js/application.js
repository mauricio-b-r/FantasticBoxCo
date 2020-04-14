import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = () => {
  return (
    <header>
      <h1 className="logo">FantasticBoxCo</h1>
    </header>
  );
};

const Aside = ({ step1, step2, step3, step4 }) => {
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
            {step4.handles && 
            <span className="step-value">
              Handles
            </span>
            }
            {step4.handles && step4.reinforced && <br/>}
            {step4.reinforced && 
            <span className="step-value">
              Reinforced Bottom
            </span>
            }
          </a>
        </li>
        <li>
          <a href="#total-cost" className="step step-total-cost">
            <h3 className="step-total-cost-heading">Total Cost</h3>
            <div className="step-total-cost-value">&pound;0.00</div>
          </a>
        </li>
      </ul>
    </aside>
  );
};

const StepOne = ({ step1, setStep1 }) => {
  return (
    <div id="step-1" className="content-step">
      <h2>Step 1 - Dimensions &amp; Quantity</h2>

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
      </div>

      <div className="form-actions">
        <button type="button" className="btn btn-primary btn-next" disabled>
          Next
        </button>
      </div>
    </div>
  );
};

const StepTwo = ({ step2, setStep2 }) => {
  return (
    <div id="step-2" className="content-step">
      <h2>Step 2 - Cardboard Grade</h2>

      <p className="intro">
        <strong>FantasticBoxCo</strong> offer a variety of grades of cardboard,
        each altering the price per m<sup>2</sup>: ​{" "}
      </p>

      <ol className="btn-radios-list">
        <li>
          <label>
            <input
              type="radio"
              name="cardboard-grade"
              value="A"
              onChange={(e) =>
                setStep2({ grade: e.target.value, text: "A Grade" })
              }
            />
            <span className="btn btn-radio">
              A Grade
              <br />
              &pound;0.20 m<sup>2</sup>
            </span>
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="cardboard-grade"
              value="B"
              onChange={(e) =>
                setStep2({ grade: e.target.value, text: "B Grade" })
              }
            />
            <span className="btn btn-radio">
              B Grade
              <br />
              &pound;0.10 m<sup>2</sup>
            </span>
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="cardboard-grade"
              value="C"
              onChange={(e) =>
                setStep2({ grade: e.target.value, text: "C Grade" })
              }
            />
            <span className="btn btn-radio">
              C Grade
              <br />
              &pound;0.05 m<sup>2</sup>
            </span>
          </label>
        </li>
      </ol>

      <div className="form-actions">
        <button type="button" className="btn btn-back">
          back
        </button>
        <button type="button" className="btn btn-primary btn-next">
          Next
        </button>
      </div>
    </div>
  );
};
const StepThree = ({
  step3,
  setStep3
}) => {
  return (
    <div id="step-3" className="content-step">
      <h2>Step 3 - Print Quality</h2>

      <p className="intro">
        A variety of printing options are available for any branding / logos
        which are required:
      </p>

      <ol className="btn-radios-list">
        <li>
          <label>
            <input type="radio" name="print-quality" value="3-color" onChange={(e) =>
                setStep3({ colour: e.target.value, text: "3 colours" })
              } />
            <span className="btn btn-radio">
              3 colours
              <br />
              &pound;0.20 m<sup>2</sup>
            </span>
          </label>
        </li>
        <li>
          <label>
            <input type="radio" name="print-quality" value="2-color" onChange={(e) =>
                setStep3({ colour: e.target.value, text: "2 colours" })
              } />
            <span className="btn btn-radio">
              2 colours
              <br />
              &pound;0.10 m<sup>2</sup>
            </span>
          </label>
        </li>
        <li>
          <label>
            <input type="radio" name="print-quality" value="black-only" onChange={(e) =>
                setStep3({ colour: e.target.value, text: "Black only" })
              } />
            <span className="btn btn-radio">
              Black only
              <br />
              &pound;0.05 m<sup>2</sup>
            </span>
          </label>
        </li>
        <li>
          <label>
            <input type="radio" name="print-quality" value="no-printing" onChange={(e) =>
                setStep3({ colour: e.target.value, text: "No printing" })
              } />
            <span className="btn btn-radio">
              No printing
              <br />
              &pound;0.00
            </span>
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="print-quality"
              value="FantasticBoxCo-branding"
              onChange={(e) =>
                setStep3({ grade: e.target.value, text: "B Grade" })
              }
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
        <button type="button" className="btn btn-back">
          back
        </button>
        <button type="button" className="btn btn-primary btn-next">
          Next
        </button>
      </div>
    </div>
  );
};
const StepFour = ({
  step4,
  setStep4
}) => {
  const handleFinish = () => {};

  return (
    <div id="step-4" className="content-step">
      <h2>Step 4 - Optional Extras</h2>

      <ol className="btn-radios-list">
        <li>
          <label>
            <input type="checkbox" name="optional-extras" value="handles" 
            onChange={(e) =>
              setStep4({ ...step4, handles: e.target.checked })
            } />
            <span className="btn btn-radio">
              Handles
              <br />
              &pound;0.10 per box
            </span>
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              name="optional-extras"
              value="reinforced-bottom"
              onChange={(e) =>
                setStep4({ ...step4, reinforced: e.target.checked })
              }
            />
            <span className="btn btn-radio">
              Reinforced bottom
              <br />
              &pound;0.05 per box
              <br />
              <small>(only available with grade A cardboard)</small>
            </span>
          </label>
        </li>
      </ol>

      <div className="form-actions">
        <button type="button" className="btn btn-back">
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

const FinishStep = ({
  step1,
  step2,
  step3,
  step4  
}) => {
  return (
    <div id="total-cost" className="content-step">
      <h2>Total Cost</h2>

      <dl className="breakdown">
        <dt>Dimensions &amp; Quantity:</dt>
        <dd>{step1.quantity} &times; {step1.width}(W)&times;{step1.height}(H)&times;{step1.length}(L)</dd>

        <dt>Cardboard Grade:</dt>
        <dd>{step2.text}</dd>

        <dt>Print Quality:</dt>
        <dd>{step3.text}</dd>

        <dt>Optional Extras:</dt>
        <dd>
          <ol>
            <li>Handles</li>
            <li>Reinforce bottoms</li>
          </ol>
        </dd>

        <dt>Total Cost:</dt>
        <dd>&pound;0.00</dd>
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
}) => {
  return (
    <section>
      <StepOne step1={step1} setStep1={setStep1}></StepOne>
      <StepTwo step2={step2} setStep2={setStep2}></StepTwo>
      <StepThree step3={step3} setStep3={setStep3}></StepThree>
      <StepFour step4={step4} setStep4={setStep4}></StepFour>
      <FinishStep
        step1={step1}
        step2={step2}
        step3={step3}
        step4={step4}
      ></FinishStep>
    </section>
  );
};

const Main = () => {
  let initial_step1 = { width: 0, height: 0, length: 0, quantity: 0 };
  let initial_step2 = { grade: "", text: "" };
  let initial_step3 = { colour: "", text: "" };
  let initial_step4 = { handles: false, reinforced: false };
  const [step1, setStep1] = useState(initial_step1);
  const [step2, setStep2] = useState(initial_step2);
  const [step3, setStep3] = useState(initial_step3);
  const [step4, setStep4] = useState(initial_step4);
  return (
    <main>
      <div className="container">
        <Aside step1={step1} step2={step2} step3={step3} step4={step4}></Aside>
        <Section
          step1={step1}
          step2={step2}
          step3={step3}
          step4={step4}
          setStep1={setStep1}
          setStep2={setStep2}
          setStep3={setStep3}
          setStep4={setStep4}
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
