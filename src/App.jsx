import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import { HomePage } from "./pages/Home/Home"
import { HomeUserLoged } from "./pages/UserLoged/Home"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeUserLoged />}/>
        <Route path="/HomeUserLoged" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App
