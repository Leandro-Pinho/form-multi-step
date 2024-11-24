import { Input, TextField } from "@material-ui/core";
import React from "react";

const FirstStep = () => {
  return (
    <div>
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>

      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="e.g. Stephen King" />
      </div>
      <div>
        <label htmlFor="email">Email Address:</label>
        <input
          type="text"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
        />
      </div>
      <div>
        <label htmlFor="phone">Phone Number:</label>
        <input type="text" id="phone" placeholder="e.g. +1 234 567 890" />
      </div>

      <button>Next Step</button>
    </div>
  );
};

export default FirstStep;
