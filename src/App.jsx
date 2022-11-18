import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/indexlogin";
import { Cadastro } from "./pages/cadastro"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/xasdasdas" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
