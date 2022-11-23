import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import { CadastroUser } from "./pages/CadastroUserPage/index";
import { Dashboard } from "./pages/Dashboard/index";
import { HomePage } from "./pages/Home/Home";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/CadastroUser" element={<CadastroUser />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;
