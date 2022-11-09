import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import { LoginUser } from "./pages/loginUser"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginUser />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App