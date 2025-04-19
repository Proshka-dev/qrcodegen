import React, { useState } from 'react'
import s from './addPost.module.css'
import axios from 'axios';
import { Form, redirect } from 'react-router';

const addPostAction = async ({ request, params }) => {
	// получаем данные с формы
	const formData = await request.formData();

	// методом get('значение_атрибута_name') получаем введенные данные
	const newPost = {
		id: 123,
		title: formData.get('title'),
		body: formData.get('body'),
	};

	// отправляем на сервер
	await axios.post('https://jsonplaceholder.typicode.com/posts/', newPost);

	// после отправки редирект на роут /posts
	return redirect('/posts');

};

const AddPost = () => {

	return (

		<div className={s.addpost}>
			<div className="container">
				<Form method='post' action='/addpost'>
					<div className={s.addpost__body}>
						<div className={s.addpost__header}>
							<div>
								Заголовок:
							</div>
							<input className={s.addpost__input} type="text" name='title' />
						</div>

						<div className={s.addpost__message}>
							<div>
								Сообщение:
							</div>
							<input className={s.addpost__input} type="text" name='body' />
						</div>

					</div>
					<div className={s.addpost__footer}>
						<button className={s.addpost__button}>
							Отправить
						</button>
					</div>
				</Form >
			</div>

		</div >
	)
}

export default AddPost
export { addPostAction }