import "./App.css";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./components/pages/error/ErrorPage";
import OrderPage from "./components/pages/order/OrderPage";
import LoginPage from "./components/pages/login/LoginPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/order/:username" element={<OrderPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
