import RootLayout from './shared/components/Layouts/RootLayout/';
import "./App.css";
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home';
import ChaptersDirectoryPage from './pages/ChaptersDirectoryPage';
import ChapterIPage from './pages/Chapters/ChapterI';
import ChapterIIPage from './pages/Chapters/ChapterII';
import ChapterIIIPage from './pages/Chapters/ChapterIII';
import ChapterIVPage from './pages/Chapters/ChapterIV';
import ChapterVPage from './pages/Chapters/ChapterV';


const App = () => {

  console.log("process.enc.PORT: ", process.env.PORT)
  console.log("process.enc.PORT: ", process.env.TEST)

  return (
    <>
    <RootLayout>
      <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/chapters-directory" element={<ChaptersDirectoryPage />}/>
          <Route path="/chapters-directory/:id" element={<ChapterIPage />}/>
          <Route path="/chapters-directory/:id" element={<ChapterIIPage />}/>
          <Route path="/chapters-directory/:id" element={<ChapterIIIPage />}/>
          <Route path="/chapters-directory/:id" element={<ChapterIVPage />}/>
          <Route path="/chapters-directory/:id" element={<ChapterVPage />}/>
      </Routes>
    </RootLayout>
    </>

  )
}

export default App
