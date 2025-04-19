import React, { useState } from 'react'
import s from './posts.module.css'
import axios from 'axios';
import { Link, useLoaderData } from 'react-router';

const postsLoader = async ({ request, params }) => {
	const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
	return data;
};

const Posts = () => {
	// хук для получения данных
	const posts = useLoaderData();

	return (
		<div className={s.posts}>
			<div className="container">
				<div className={s.posts__body}>
					<div className={s.posts__title}>
						Posts title
					</div>

					<div className={s.posts__content}>
						{posts.map((post, index) => (
							<div className={s.posts__item} key={index}>
								<Link to={`${post.id}`}>
									{post.title}
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>


		</div>
	)
}

export default Posts
export { postsLoader }
