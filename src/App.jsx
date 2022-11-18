import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CadastroUser} from "./pages/CadastroUserPage/index"
import { Dashboard } from "./pages/Dashboard/index";
import { HomePage } from "./pages/Home/Home"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CadastroUser />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/index" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
