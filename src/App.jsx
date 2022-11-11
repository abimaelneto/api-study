import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/login";
import { Cadastro } from "./pages/cadastro";

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
