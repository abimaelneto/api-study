import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CadastroUser} from "./pages/CadastroUserPage/index"
import { Dashboard } from "./pages/Dashboard/index";
import { HomePage } from "./pages/Home/Home"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastro" element={<CadastroUser />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
