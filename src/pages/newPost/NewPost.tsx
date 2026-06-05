import Form from '../../components/form/Form'
import type { Post } from '../../type'
import './NewPost.css'
import axiosApi from '../../axiosApi.ts'
import { useNavigate } from 'react-router-dom'


const NewPost = () => {

  const navigate = useNavigate();

  const addPost = async (post: Post) => {
    void await axiosApi.post ('/posts.json', post)
    navigate('/');
  };

  return (
    <div className='containerPost'>
        <h3>Add new post</h3>
        <p>Share your thoughts with the world</p>
        <Form onSubmit={addPost}/>
    </div>
  )
}

export default NewPost