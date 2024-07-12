// src/components/RefuelForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRefuelEvent } from "../actions/actions";
import { useHistory } from "react-router-dom";
import "./RefuelForm.css";

const RefuelForm = () => {
  const [date, setDate] = useState("");
  const [km, setKm] = useState(0);
  const [liters, setLiters] = useState(0);
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted"); // Add this line
    const newEvent = {
      id: Date.now(),
      date,
      km,
      liters,
      price,
    };
    console.log("Dispatching action:", newEvent); // Add this line
    dispatch(addRefuelEvent(newEvent));
  
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Kilometers:</label>
          <input type="number" value={km} onChange={(e) => setKm(Number(e.target.value))} />
        </div>
        <div className="form-group">
          <label>Liters:</label>
          <input type="number" value={liters} onChange={(e) => setLiters(Number(e.target.value))} />
        </div>
        <div className="form-group">
          <label>Price per Liter:</label>
          <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
        </div>
        <div className="submit-group">
          <label></label>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
  
  
};

export default RefuelForm;
