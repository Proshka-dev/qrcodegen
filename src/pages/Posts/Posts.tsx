import s from './posts.module.css'
import axios from 'axios';
import { Link, useLoaderData } from 'react-router';

const postsLoader = async () => {
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
						Сообщения пользователей
					</div>

					<div className={s.posts__content}>
						{posts.map((post: { title: string, id: number }, index: number) => (
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
