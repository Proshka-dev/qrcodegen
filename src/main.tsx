import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//Routing
import QrCodeGenerator from './pages/QrCodeGenerator/QrCodeGenerator.tsx'
import QrCodeScanner from './pages/QrCodeScanner/QrCodeScanner.tsx'

import { createBrowserRouter, RouterProvider, Link } from "react-router";
import React from "react";

const router = createBrowserRouter([
	{
		index: true,
		path: "/",
		element: <div>Hello World</div>,
	},
	{
		path: "/scan",
		element: <QrCodeScanner />,
	},
	{
		path: "/generator",
		element: <QrCodeGenerator />,
	},
]);


createRoot(document.getElementById('root')!).render(
	<StrictMode>
		< RouterProvider router={router} />
	</StrictMode >,
)
