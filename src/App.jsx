import { useState } from "react";
import { Step, StepLabel, Stepper } from "@material-ui/core";

import "./App.css";
import FirstStep from "./components/screens/FirstStep";
import SecondStep from "./components/screens/SecondStep";
import ThirdStep from "./components/screens/ThirdStep";
import FifthStep from "./components/screens/FifthStep";
import FourthStep from "./components/screens/FourthStep";

function getStepContent(step) {
  switch (step) {
    case 1:
      return <FirstStep />;
    case 2:
      return <SecondStep />;
    case 3:
      return <ThirdStep />;
    case 4:
      return <FourthStep />;
    case 5:
      return <FifthStep />;
  }
}

function App() {
  return (
    <>
      <div className="main">
        <Stepper activeStep={3} orientation="vertical">
          <Step>
            <StepLabel>
              Step 1 <br />
              Your info
            </StepLabel>
          </Step>
          <Step>
            <StepLabel>
              Step 2 <br />
              Select plan
            </StepLabel>
          </Step>
          <Step>
            <StepLabel>
              Step 3 <br />
              Add-ons
            </StepLabel>
          </Step>
          <Step>
            <StepLabel>
              Step 4 <br />
              Summary
            </StepLabel>
          </Step>
        </Stepper>
        {getStepContent(2)}

        {/* <aside>menu</aside>
        <section>form</section> */}
      </div>
    </>
  );
}

export default App;
