import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import Popular from "./components/Popular";
// Component
// State
// Lifecycle
// UI
class App extends React.Component {
  render() {
    const name = "Ethan";
    return (
      <div>
        <Popular />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
