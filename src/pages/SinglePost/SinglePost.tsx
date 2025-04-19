import React, { useState } from 'react'
import s from './singlePost.module.css'
import axios from 'axios';
import { useLoaderData } from 'react-router';

//Загрузчик
const singlePostLoader = async ({ request, params }) => {
	const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
	return data;
};

const SinglePost = () => {

	//хук получения данных
	const post = useLoaderData();
	console.log(post);

	return (
		<div className={s.singlepost}>
			<div className="container">
				<div className={s.singlepost__content}>
					<div className={s.singlepost__header}>
						<div className={s.singlepost__id}>
							{post.id}
						</div>
						<div className={s.singlepost__title}>
							{post.title}
						</div>

					</div>
					<div className={s.singlepost__text}>
						{post.body}
					</div>
				</div>

			</div>
		</div>
	)
}

export default SinglePost
export { singlePostLoader }
