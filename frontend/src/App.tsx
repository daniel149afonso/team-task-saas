import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Layout from "./app/Layout";

function App() {

  return (
    <>
      <Routes>
          <Route element={<Layout/>}>
            /*Private area */
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Route>
          /*Public area */
          <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
