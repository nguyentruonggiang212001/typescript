import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from './App.tsx'
import store from "./store/store.ts";
import { BrowserRouter } from "react-router-dom";


const rootElement = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
		</BrowserRouter>
	</React.StrictMode>
);