//App.jsx
import "./App.css";
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home';
import ChaptersDirectoryPage from './pages/ChaptersDirectoryPage';
import ChapterIPage from './pages/Chapters/ChapterI';
import ChapterIIPage from './pages/Chapters/ChapterII';
import Spanish from './shared/components/Partials/SpGallery';
import American from './shared/components/Partials/AmGallery';
import Philippines from './shared/components/Partials/PhGallery';
import ChapterIIIPage from './pages/Chapters/ChapterIII';
import ChapterIVPage from './pages/Chapters/ChapterIV';
import ChapterVPage from './pages/Chapters/ChapterV';
import { TourProvider, useTour } from "@reactour/tour";

const steps = [
  {
    selector: ".home-btn",
    content: "First, we have the Home button."
  },
  {
    selector: ".chapters-btn",
    content: "This is the Chapters Directory, which will show you a swipable gallery of 5 Chapter cards.",
  },
  {
    selector: ".chapters-btn",
    content: "Each card will direct you to its designated Chapter.",
  },
  // {
  //   selector: ".ham-btn",
  //   content: "Click on this button to see the menu.",
  //   clickAction: () => document.querySelector('.ham-btn').click(),
  // },
  {
    selector: ".menu-element-i",
    content: "The Chapter Guide button will provide you with a quick overview of the contents of each chapter.",
    showCondition: () => document.querySelector('.ham-btn').classList.contains('is-active')
  },
  {
    selector: ".menu-element-ii",
    content: "The Audio Toggle button allows you to toggle the background music on and off, depending on your preferences. ",
    showCondition: () => document.querySelector('.ham-btn').classList.contains('is-active')
  },
  {
    selector: ".menu-element-iii",
    content: "The About button will give you more information about 5Siglo, about us, and our call to action.",
    showCondition: () => document.querySelector('.ham-btn').classList.contains('is-active')
  },
  {
    selector: ".menu-element-iii",
    content: "Want to send us a message or hit us up? We have a handy feedback form too! 😉",
    showCondition: () => document.querySelector('.ham-btn').classList.contains('is-active')
  },
  {
    selector: ".homepage-start-btn",
    content: "And if you're finally ready to start your journey through our website, simply click the Start button.",
  },
  {
    selector: ".homepage-start-btn",
    content: "We hope you'll find our website both informative and engaging. Thank you for choosing 5Siglo as your resource for learning about the Filipino peasantry.",
  },
];


const App = () => {
  const radius = 10;
  const handleCloseTour = () => {
    setIsOpen(false);
  };

  return (
    <TourProvider 
      steps={steps} 
      startAt={0}
      onClose={handleCloseTour}
      styles={{
        popover: (base) => ({
          ...base,
          '--reactour-accent': '#eec627',
          borderRadius: radius,
          background: "linear-gradient(#f1ede6 50%,#d9c7a8 150%)",
          color: "#31302F",
          padding: '2rem 2rem 0rem 2rem'
        }),
        maskArea: (base) => ({ ...base, rx: radius }),
        badge: (base) => ({ ...base, right: 'auto', left: '-0.8125em' }),
        controls: (base) => ({ ...base, margin: '1.5rem' }),
        close: (base) => ({ ...base, left: 'auto', right: 8, top: 8 }),
      }}

      
    >
    <div className="root-main">

      <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/chapters-directory" element={<ChaptersDirectoryPage />}/>
          <Route path="/chapters-directory/chapter-1" element={<ChapterIPage />}/>
          <Route path="/chapters-directory/chapter-2" element={<ChapterIIPage />}/>
          <Route path="/chapters-directory/chapter-2/spanish" element={<Spanish />}/>
          <Route path="/chapters-directory/chapter-2/american" element={<American />}/>
          <Route path="/chapters-directory/chapter-2/philippines" element={<Philippines />}/>
          <Route path="/chapters-directory/chapter-3" element={<ChapterIIIPage />}/>
          <Route path="/chapters-directory/chapter-4" element={<ChapterIVPage />}/>
          <Route path="/chapters-directory/chapter-5" element={<ChapterVPage />}/>
      </Routes>
    </div>
    </TourProvider>

  )
}

export default App