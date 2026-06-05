import { NavLink } from 'react-router-dom'
import './post.css'
import type { PostApi } from '../../type'

interface Props {
  post: PostApi
}

const Post = ({post}: Props) => {
  return (
    <div className='post container'>
        <div className="postContent">
        <h3 className='postTitle'>{post.title}</h3>
        <p className='postText'>{post.message}</p>
        <p>Date {post.date}</p>
        </div>
    <div className="postBtn">
        <NavLink className='postBtnEdit' to={`/posts/${post.id}/edit`}>Edit post</NavLink>
        <NavLink className='postBtnDelete' to={'/'}>Delete post</NavLink>
    </div>
    </div>
  )
}

export default Post