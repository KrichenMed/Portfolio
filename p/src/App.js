import { Route, Routes } from "react-router";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello there !!</h1>
      <Routes>
        <Route exact path="/{p}" />
      </Routes>
    </div>
  );
}

export default App;
