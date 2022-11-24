import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CadastroUser} from "./pages/CadastroUserPage/index"
import { Dashboard } from "./pages/Dashboard/index";
import { HomePage } from "./pages/Home/Home"
import { Login } from "./pages/indexlogin";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastroUser" element={<CadastroUser />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
