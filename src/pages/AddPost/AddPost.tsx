import React, { useState } from 'react'
import s from './addPost.module.css'
import axios from 'axios';
import { Form } from 'react-router';

const AddPost = () => {

	return (

		<div className={s.addpost}>
			<div className="container">
				<Form>
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
							<input className={s.addpost__input} type="text" name='message' />
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
