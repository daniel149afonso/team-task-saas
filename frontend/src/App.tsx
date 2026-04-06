import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from "./app/auth/Login";
import Dashboard from "./app/dashboard/Dashboard";
import Layout from "./app/Layout";
import TasksPage from "./app/tasks/TasksPage";

function App() {

	return (
		<>
		<Routes>
			{/*Public area */}
			<Route path="/" element={<TasksPage/>} />	
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
