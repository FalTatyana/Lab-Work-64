import { useNavigate, useParams } from 'react-router-dom'
import './post.css'
import type { PostApi } from '../../type'
import { useEffect, useState } from 'react'
import axiosApi from '../../axiosApi'

const Post = () => {

  const { id } = useParams();
  const [post, setPost] = useState<PostApi | null>(null);

  useEffect(() => {
    const fetchPost = async() => {
      const {data} = await axiosApi<PostApi>(`/posts/${id}.json`);

      setPost(data);
    };
    void fetchPost();
  },[id]);

  const navigate = useNavigate();

  return post && (
    <div className='post container'>
        <div className="postContent">
        <h3 className='postTitle'>{post.title}</h3>
        <p className='postDate'><i className="bi bi-calendar4-week"></i> Date {post.date}</p>
        <p className='postText'>{post.message}</p>
        </div>
    <div className="postButtons">
        <button className='postBtn postBtnEdit' onClick={() => navigate(`/posts/${post.id}/edit`)}> <i className="bi bi-pencil"></i> Edit post</button>
        <button className='postBtn postBtnDelete' onClick={() => navigate('/')}><i className="bi bi-trash3"></i> Delete post</button>
    </div>
    </div>
  )
}

export default Post