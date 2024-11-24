import React from "react";

const FourthStep = () => {
  return (
    <div>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      {/* <!-- Dynamically add subscription and add-on selections here --> */}
      <div>
        <div>
          <div>
            <h4>Arcade (Yearly)</h4>
            <a>change</a>
          </div>
          <small>$90/yr</small>
        </div>
        <hr />
        <div>
          <h4>Online service</h4>
          <small>+$10/yr</small>
        </div>
        <div>
          <h4>Larger storage</h4>
          <small>+$20/yr</small>
        </div>
      </div>
      <div>
        <span>Total (per month/year)</span>
        <small>$120/yr</small>
      </div>

      <div>
        <button>Go Back </button>
        <button>Confirm</button>
      </div>
    </div>
  );
};

export default FourthStep;
