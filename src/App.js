import "./App.css";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import RequireAuth from "./RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
