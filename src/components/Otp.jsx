import React, { useState } from "react";

const Otp = () => {
  const [otp, setOtp] = useState([]);

  const digits = 8;
  const arr = Array(digits).fill(1);

  const getValueHandler = (e, index) => {
    console.log(e.target.value, index);
    const arr = [...otp];
    arr[index] = e.target.value;
    setOtp(arr);
  };

  const submitFormHandler = () => {
    console.log(otp, "otp");
  };

  return (
    <div>
      {arr.map((item, index) => {
        return (
          <input
            type="number"
            min={0}
            max={9}
            
            onChange={(e) => {
              getValueHandler(e, index);
            }}
            key={index}
          />
        );
      })}
      <button onClick={() => submitFormHandler()}>Submit </button>
    </div>
  );
};

export default Otp;
