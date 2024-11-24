import React from "react";

const ThirdStep = () => {
  return (
    <div>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      
      <div>
        <div>
          <div>
            <input type="checkbox" name="" id="" />
            <div>
              <h4>Online service</h4>
              <small>Access to multiplayer games</small>
            </div>
          </div>

          <div>+$1/mo</div>
        </div>
        <div>
          <div>
            <input type="checkbox" name="" id="" />
            <div>
              <h4>Larger storage</h4>
              <small>Extra 1TB of cloud save</small>
            </div>
          </div>

          <div>+$2/mo </div>
        </div>
        <div>
          <div>
            <input type="checkbox" name="" id="" />
            <div>
              <h4>Customizable Profile</h4>
              <small>Custom theme on your profile</small>
            </div>
          </div>

          <div>+$2/mo</div>
        </div>
      </div>

      <div>
        <button>Go Back </button>
        <button>Next Step</button>
      </div>
    </div>
  );
};

export default ThirdStep;
