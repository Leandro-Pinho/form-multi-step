import React from "react";

const SecondStep = () => {
  return (
    <div>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div>
        <div>
        <img src="../src/assets/images/icon-arcade.svg" alt="thanck-you" srcset="" />
          <h4>Arcade</h4>
          <small>$9/mo</small>
          <span>2 months free</span>
        </div>
        <div>
        <img src="../src/assets/images/icon-advanced.svg" alt="thanck-you" srcset="" />
          <h4>Advanced</h4>
          <small>$12/mo</small>
          <span>2 months free</span>
        </div>
        <div>
        <img src="../src/assets/images/icon-pro.svg" alt="thanck-you" srcset="" />
          <h4>Pro</h4>
          <small>$15/mo</small>
          <span>2 months free</span>
        </div>
      </div>
      <div>
      Monthly Yearly 
      </div>
      <div>
        <button>Go Back </button>
        <button>Next Step</button>
      </div>

    </div>
  );
};

export default SecondStep;
