// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import RefuelPage from "./components/RefuelPage";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            <Route exact path="/" component={RefuelPage} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
