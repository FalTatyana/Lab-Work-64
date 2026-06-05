import { useNavigate } from 'react-router-dom'
import type { PostApi, PostList } from '../../type'
import './PostCard.css'
import { useEffect, useState } from 'react'
import axiosApi from '../../axiosApi'

const PostCard = () => {

    const [post, setPost] = useState<PostApi[]>([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchPosts = async () => {
            const { data } = await axiosApi.get<PostList>('/posts.json')

            const posts: PostApi[] = Object.keys(data).map(key => {
                return {
                    id: key,
                    title: data[key].title,
                    message: data[key].message,
                    date: new Date().toLocaleString('ru-RU', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit'
                      })
                }
            });
            setPost(posts);
        }
        void fetchPosts();
    }, []);

    return (
        <>
            <div className="postCardWrapper">
                {post.map(p => (
                    <div className='postCard' key={p.id}>
                        <div className="cardContent">
                            <h3 className='cardTitle'>{p.title}</h3>
                            <span className='cardDate'>
                                Creation date {p.date}
                            </span>
                        </div>
                        <div className="cardBtnWrapper">
                            <button className='cardBtn' onClick={() => navigate(`/posts/${p.id}`)}>Read more <i className="bi bi-arrow-right"></i></button>
                        </div>
                    </div>
                ))};
            </div>
        </>
    )
}

export default PostCard