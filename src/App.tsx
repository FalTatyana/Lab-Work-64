import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import PostCard from './components/postCard/PostCard'
import NewPost from './pages/newPost/NewPost'
import About from './pages/about/About'
import Contacts from './pages/contacts/Contacts'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element=
          {<Home>
            <PostCard />
          </Home>}
        />
        <Route path='/posts/add' element={<NewPost />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </>
  )
}
export default App
