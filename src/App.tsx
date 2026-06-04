import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import { useState } from 'react'
import PostCard from './components/postCard/postCard'

type Post = {
  id: number
  time: string
  title: string
  message: string
}

function App() {
  const [post, setPost] = useState<Post[]>([
    {
      id: 1, 
      time: new Date().toLocaleDateString('ru-RU'),
      title: 'How I Started Learning React',
      message: "Some message"
    },
    {
      id: 2, 
      time: new Date().toLocaleDateString('ru-RU'),
      title: 'Common Fears of Beginner Developers',
      message: "Some message"
    },
    {
      id: 3, 
      time: new Date().toLocaleDateString('ru-RU'),
      title: 'Some title',
      message: "Some message"
    }
  ]);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element=
          {<Home>
            {post.map(item =>
              <PostCard
                key={item.id}
                title={item.title}
                message={item.message}
                time={item.time}
              />
            )}
          </Home>}
        />
      </Routes>
    </>
  )
}
export default App
