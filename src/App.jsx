import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import { CadastroUser } from "./pages/CadastroUserPage/index";
import { EditUser } from "./pages/Dashboard/Edit/EditUser";
import { Dashboard } from "./pages/Dashboard/index";
import { HomePage } from "./pages/Home/Home"
import { Login } from "./pages/indexlogin";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastroUser" element={<CadastroUser />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/EditUser:/id" element={<EditUser />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;
