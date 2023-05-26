import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./components/Context/ContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ContextProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ContextProvider>
	</React.StrictMode>
);
// A <BrowserRouter> stores the current location in the browser's address bar using clean URLs and navigates using the browser's built-in history stack.
