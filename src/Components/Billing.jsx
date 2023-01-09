import React, {useState} from "react";
import RadioButton from "../Common/RadioButton";
import InputField from "../Common/InputField";
import envelope from "./Assets/envelope.svg";

const Billing = () => {
  
  return (
    <div className="flex flex-col w-[78vw] ">
      <div className="flex flex-col  mt-5 mb-5 lg:flex-row ">
        <div className="flex mb-2 flex-col lg:w-[30%] text-textP">
          <h3 className="font-bold  text-[17px]">Contact email</h3>
          <p className="text-textP">Where should invoices be sent?</p>
        </div>
        <div className="flex flex-col w-[70%] space-y-4 ">
          <RadioButton id={1} label="Send to my account email" value="first-option">
            <label className="flex items-center space-x-5 text-textP text-[17px]">
              <div className="h-5 w-5">{' '}</div>
              <p className="">olivia@untitledui.com</p>
            </label>
          </RadioButton>
          <RadioButton id={2} label="Send to an alternative email">
            <div className="container w-[100%] mx-auto px-4 mt-5">
              <InputField
                width="input--extra-large"
                placeholder="olivia@untitledui.com"
                searchIcon={envelope}
              />
            </div>
          </RadioButton>
        </div>
      </div>
      {/* <div class="border-b border-1 border-[gray] " ></div> */}
    </div>
  );
};

export default Billing;
