// src/components/ConsumptionChart.js
import React from "react";
import { useSelector } from "react-redux";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const ConsumptionChart = () => {
  const refuelEvents = useSelector((state) => state.refuelEvents);

  const refuelEventsWithConsumption = refuelEvents.map((event) => ({
    ...event,
    consumption: (event.liters / event.km) * 100,
  }));

  return (
    <div>
      <h2>Consumption Chart</h2>
      <LineChart
        width={600}
        height={300}
        data={refuelEventsWithConsumption}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="consumption" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  );
};

export default ConsumptionChart;
