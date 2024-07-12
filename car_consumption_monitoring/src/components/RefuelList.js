import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeRefuelEvent } from "../actions/actions";
import { Link } from "react-router-dom";
import "./RefuelList.css";

const RefuelList = () => {
  const refuelEvents = useSelector((state) => state.refuelEvents);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Refuel events updated:', refuelEvents);
  }, [refuelEvents]);
  
  const handleRemove = (id) => {
    dispatch(removeRefuelEvent(id));
  };

  return (
    <div className="container">
      <h1>Refuel Events</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Kilometers</th>
            <th>Liters</th>
            <th>Price per Liter</th>
            <th>Cost</th>
            <th>Consumption L/100km</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {refuelEvents.map((event) => {
  console.log("event:", event); // Add this line
  return (
    <tr key={event.id}>
      <td>{event.date}</td>
      <td>{event.km}</td>
      <td>{event.liters}</td>
      <td>{event.price}</td>
      <td>{event.liters * event.price}</td>
      <td>{(event.liters / event.km) * 100}</td>
      <td>
        <button onClick={() => handleRemove(event.id)}>Remove</button>
      </td>
    </tr>
  );
})}

        </tbody>
      </table>
 

    </div>
  );
};

export default RefuelList;
