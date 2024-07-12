export const addRefuelEvent = (event) => ({
    type: "ADD_REFUEL_EVENT",
    payload: event,
  });
  
  export const removeRefuelEvent = (id) => ({
    type: "REMOVE_REFUEL_EVENT",
    payload: id,
  });