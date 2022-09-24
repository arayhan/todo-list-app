import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as AlertProvider } from 'react-alert';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { alertConfigs, AlertTemplate } from './components/third-parties';
import App from './App';

import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<BrowserRouter>
		<AlertProvider template={AlertTemplate} {...alertConfigs}>
			<App />
		</AlertProvider>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
