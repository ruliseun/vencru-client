import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PageLinks } from "../Utils/Links";
import Payment from "./Billing";
import CardDetails from "./CardDetails";
import cloud from "./Assets/cloud.svg";
import Table from "./Table/Table";

const RightSide = () => {
  return (
    <div className="flex flex-col w-[100%] justify-center lg:w-[1160px] pt-5 overflow-hidden pr-3">
      <div className="flex flex-col ml-0 lg:ml-5 space-y-[30px] ">
        <div className="flex flex-col space-y-2 ml-4 lg:ml-0 ">
          <h1 className="text-2xl">Settings</h1>
          <p className="text-textP">Manage your team an preferences here.</p>
        </div>
        <div className="overflow-auto lg:overflow-hidden">
          <div className="flex  w-[769px] h-[40px] bg-[white] border-2 border-borderC rounded-lg ">
            {PageLinks.map((link) => {
              const { id, text, width, route } = link;
              return (
                <Link
                  to={route}
                  key={id}
                  className={`${
                    id !== PageLinks.length ? "border-r-2 border-borderC" : ""
                  } flex justify-center items-center text-[14px] `}
                  style={{ width: width + "px" }}
                >
                  {text}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="ml-5">
        <div className="mb-5 mt-5">
          <h3 className="font-semibold text-[18px]">Payment method</h3>
          <p className="text-textP">Update your billing details and address</p>
        </div>
        <div class="border-b border-1 border-borderC  "></div>
        <div className="mt-5 ">
          <Payment />
        </div>
        <div class="border-b border-1 border-borderC "></div>
        <div className="mt-5">
          <CardDetails />
        </div>

        <div className="flex flex-col lg:flex-row justify-between mr-3 mt-5">
          <h1 className="mb-2">Billing History</h1>
          <button className="flex justify-center items-center w-[50%] lg:w-[150px] bg-[white] border border-[#d0d5dd] px-2 py-3  rounded-xl  bg-gray-300 hover:bg-gray-400">
            <img
              src={cloud}
              className="inline-block h-8 w-8 mr-2 "
              alt="Button image"
            />
            <p className="font-medium text-[14px] text-[#344054]">
              Download all
            </p>
          </button>
        </div>

        <div className="mt-5">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default RightSide;
