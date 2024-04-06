// components/NavsTabs.js
"use client";
import React from "react";
import PlansPrice from "./PlansPrice";

const Plans = () => {
  const tabs = ["Yearly", "6 Months", "3 Months"];

  const buttonStyle = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px 20px",
    margin: "0 5px",
    borderRadius: "5px",
    cursor: "pointer",
    border: "none",

  };

  const activeButtonStyle = {
    backgroundColor: "#000",
    color: "#fff",
    padding: "10px 20px",
    margin: "0 5px",
    borderRadius: "5px",
    cursor: "pointer",
    border: "none",
    
  };

  const [activeTab, setActiveTab] = React.useState(tabs[0]);

  return (
    <div>
      <h1 className="shade-h1 relative text-center w-[43%] mx-auto font-bold mt-[90px] text-4xl font-['General Sans']">
        Up For The Undressing Party? <span className="Plans-star1">✦</span>
      </h1>
      <p className="text-gray-400 relative text-center my-[40px]">
        Choos How Much Nudity You Can Handle{" "}
        <span className="Plans-star2">✦</span>
      </p>
      <PlansPrice
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        buttonStyle={buttonStyle}
        activeButtonStyle={activeButtonStyle}
      />
    </div>
  );
};

export default Plans;
