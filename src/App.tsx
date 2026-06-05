import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import PostCard from './components/postCard/PostCard'
import NewPost from './pages/newPost/NewPost'
import About from './pages/about/About'
import Contacts from './pages/contacts/Contacts'
import Post from './pages/post/Post'
import { useEffect, useState } from 'react'
import type { PostApi, PostList } from './type'
import axiosApi from './axiosApi'

const App = () => {

  const [posts, setPosts] = useState<PostApi[]>([]);
  const [selectedPost, setSelectedPost] = useState<PostApi | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axiosApi.get<PostList>('/posts.json');

      const loadedPosts: PostApi[] = Object.keys(data).map(key => ({
        id: key,
        title: data[key].title,
        message: data[key].message,
        date: new Date().toLocaleDateString('ru-RU')
      }));

      setPosts(loadedPosts);
    };

    void fetchPosts();
  }, []);

  const handleOpenPost = (post: PostApi) => {
    setSelectedPost(post);
    navigate(`/posts/${post.id}`);
  };
  
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home><PostCard posts={posts} onOpen={handleOpenPost} /></Home>}/>
        <Route path='/posts/add' element={<NewPost />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/posts/:id' element={selectedPost && <Post post={selectedPost} />} />
      </Routes>
    </>
  )
}
export default App
