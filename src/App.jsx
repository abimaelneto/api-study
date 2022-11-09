import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/login";

import { HomePage } from "./pages/Home/Home";
import { LoginUser } from "./pages/loginUser";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
