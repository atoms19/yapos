import { useState } from "react";
import { NavBar } from "./components/navbar";
import { PostActionContainer } from "./components/PostActionContainer";
import { SideBar } from "./components/SideBar";
import { Recommended } from "./components/Recommended";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";


function Layout() {
	return <>
		<NavBar />
		<div className="w-full p-3">
			<div className="max-w-6xl mx-auto flex">
				<Outlet />
			</div>
		</div>
	</>
}

function Mynetowork() {
	return <div>
		<h1>hello world</h1>
	</div>
}

export function Home() {

	return (
		<>
			<SideBar />
			<PostActionContainer />
			<Recommended />
		</>)

}

let queryClient = new QueryClient();

export function App() {
	return (
	  <QueryClientProvider client={queryClient}>
	<BrowserRouter>
		<Routes>
			<Route path="/" element={Layout()}>
				<Route path="/" element={Home()} />
				<Route path="/mynetwork" element={Mynetowork()}/>
			</Route>
		</Routes>
	</BrowserRouter>
	</QueryClientProvider>
	)


}
