import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import AccountStatus from "./components/pages/AccountStatus";
import Login from "./components/login/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route exact path="/dashboard" Component={Home} />
          <Route path="/estado-de-cuenta" Component={AccountStatus} />
          <Route path="/" Component={Login} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
