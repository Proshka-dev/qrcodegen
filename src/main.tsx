import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './nullstyle.css'
import './index.css'

//Routing
import QrCodeGenerator from './pages/QrCodeGenerator/QrCodeGenerator.tsx'
import QrCodeScanner from './pages/QrCodeScanner/QrCodeScanner.tsx'
import Layout from './pages/Layout/Layout.tsx'

import { createBrowserRouter, RouterProvider, Link } from "react-router";
import React from "react";
import ErrorPage from './pages/ErrorPage/ErrorPage.tsx'

const router = createBrowserRouter([
	{
		path: "/",
		Component: Layout,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "scan",
				Component: QrCodeScanner,
			},
			{
				path: "generate",
				Component: QrCodeGenerator,
			},
		]
	},
]);


createRoot(document.getElementById('root')!).render(
	<StrictMode>
		< RouterProvider router={router} />
	</StrictMode >,
)
