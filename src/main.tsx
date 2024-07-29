import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './components/theme/themeProvider';
import ReactDOM from 'react-dom/client';
import React from 'react';
import Root from './routes/root';

const router = createBrowserRouter([{ path: '/', element: <Root /> }]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider>
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>,
);
