// src/components/RefuelPage.js
import React from "react";
import RefuelForm from "./RefuelForm";
import RefuelList from "./RefuelList";
import ConsumptionChart from "./ConsumptionChart";

const RefuelPage = () => {
  return (
    <div>
      <RefuelForm />
      <RefuelList />
      <ConsumptionChart />
    </div>
  );
};

export default RefuelPage;
