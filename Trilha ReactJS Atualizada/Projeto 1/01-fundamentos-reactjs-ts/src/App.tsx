import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      name: 'Isa Gomes',
      avatarUrl: 'https://avatars.githubusercontent.com/u/49256056?v=4',
      role: 'Student at UFRJ',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-08-15 22:52:18'),
  },
  {
    id: 2,
    author: {
      name: 'Eduardo Rangel',
      avatarUrl: 'https://media-exp1.licdn.com/dms/image/C5603AQFEdOO6FFP2pQ/profile-displayphoto-shrink_200_200/0/1573777831508?e=1666224000&v=beta&t=TL5xvxsDPZB6NzWJUD4BaIb72a1hQ4soiQbVBiTUStM',
      role: 'Consultor @Visagio',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-08-10 17:02:18'),
  },
]

export function App() {

  return (
    <div className="app">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
