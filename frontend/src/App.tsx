import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Layout from "./app/Layout";
import Test from "./app/Test";

function App() {

	return (
		<>
		<Routes>
			{/*Public area */}
			<Route path="/" element={<Test />} />	
			<Route path="/login" element={<Login/>}/>

			{/*Private area */}
			<Route element={<Layout/>}>
				<Route path="/dashboard" element={<Dashboard/>}/>
			</Route>
		</Routes>
		</>
	)
}

export default App
