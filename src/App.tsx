import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import PostCard from './components/postCard/PostCard'
import NewPost from './pages/newPost/NewPost'
import About from './pages/about/About'
import Contacts from './pages/contacts/Contacts'
import Post from './pages/post/Post'
import EditPost from './pages/editPost/EditPost'

const App = () => {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home><PostCard /></Home>}/>
        <Route path='/posts/add' element={<NewPost />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/posts/:id' element={<Post />} />
        <Route path='/posts/:id/edit' element={<EditPost/>}/>
        <Route path='*' element={<h1>Page not found</h1>}/>
      </Routes>
    </>
  )
}
export default App
