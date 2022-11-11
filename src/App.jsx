import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/Auth/Login";
import { Cadastro } from "./pages/Auth/Cadastro";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/fsfsgg" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
