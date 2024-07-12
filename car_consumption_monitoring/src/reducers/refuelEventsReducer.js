const initialState = [];

const refuelEventsReducer = (state = initialState, action) => {
    console.log('Current state 2:', state);
    console.log('Action:', action);
    switch (action.type) {
    case "ADD_REFUEL_EVENT":
      return [...state, action.payload];
    case "REMOVE_REFUEL_EVENT":
      return state.filter((event) => event.id !== action.payload);
    default:
      console.log("Current state:", state); // add this line
      return state;
  }
};

export default refuelEventsReducer;