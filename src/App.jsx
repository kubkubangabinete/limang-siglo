import RootLayout from './shared/components/Layouts/RootLayout/';
import "./App.css";
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home';
import ChaptersDirectoryPage from './pages/ChaptersDirectoryPage';
import ChapterIPage from './pages/Chapters/ChapterI';
import ChapterIIPage from './pages/Chapters/ChapterII';
import Spanish from './shared/components/Partials/SpGallery';
import American from './shared/components/Partials/AmGallery';
import Philippines from './shared/components/Partials/PhGallery';
import PreColonial from './shared/components/Partials/PreColonial';
import PreColonial2 from './shared/components/Partials/PreColonial2';
import ChapterIIIPage from './pages/Chapters/ChapterIII';
import ChapterIVPage from './pages/Chapters/ChapterIV';
import ChapterVPage from './pages/Chapters/ChapterV';

const App = () => {

  return (
    <>
    <RootLayout>
      <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/chapters-directory" element={<ChaptersDirectoryPage />}/>
          <Route path="/chapters-directory/chapter-1" element={<ChapterIPage />}/>
          <Route path="/chapters-directory/chapter-2" element={<ChapterIIPage />}/>

          <Route path="/chapters-directory/chapter-2/pre-colonial" element={<PreColonial />}/>
          <Route path="/chapters-directory/chapter-2/pre-colonial/2" element={<PreColonial2 />}/>
    
          <Route path="/chapters-directory/chapter-2/spanish" element={<Spanish />}/>
          <Route path="/chapters-directory/chapter-2/american" element={<American />}/>
          <Route path="/chapters-directory/chapter-2/philippines" element={<Philippines />}/>


          <Route path="/chapters-directory/chapter-3" element={<ChapterIIIPage />}/>
          <Route path="/chapters-directory/chapter-4" element={<ChapterIVPage />}/>
          <Route path="/chapters-directory/chapter-5" element={<ChapterVPage />}/>
      </Routes>
    </RootLayout>
    </>

  )
}

export default App
