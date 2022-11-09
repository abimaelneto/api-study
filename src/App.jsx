import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'

import { HomePage } from "./pages/Home/Home"
import { LoginUser } from "./pages/loginUser"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App