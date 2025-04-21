import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './nullstyle.css'
import './index.css'

//Routing
import QrCodeGenerator from './pages/QrCodeGenerator/QrCodeGenerator.tsx'
import QrCodeScanner from './pages/QrCodeScanner/QrCodeScanner.tsx'
import Layout from './pages/Layout/Layout.tsx'

import { createBrowserRouter, RouterProvider } from "react-router";
import ErrorPage from './pages/ErrorPage/ErrorPage.tsx'
import Posts, { postsLoader } from './pages/Posts/Posts.tsx'
import SinglePost, { singlePostLoader } from './pages/SinglePost/SinglePost.tsx'
import AddPost, { addPostAction } from './pages/AddPost/AddPost.tsx'

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
			{
				path: "posts",
				Component: Posts,
				loader: postsLoader,
			},
			{
				path: "posts/:id",
				Component: SinglePost,
				loader: singlePostLoader,
			},
			{
				path: "addpost",
				Component: AddPost,
				action: addPostAction
			},
		]
	},
]);


createRoot(document.getElementById('root')!).render(
	<StrictMode>
		< RouterProvider router={router} />
	</StrictMode >,
)
