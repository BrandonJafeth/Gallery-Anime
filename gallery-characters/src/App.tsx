import './App.css'
import CharactersGallery from './features/characters/components/CharactersGallery'
import Navbar from './components/ui/Navbar'





function App() {
  return (
    <>
      <Navbar />
      <div className="mt-8">
        <CharactersGallery />
      </div>
    </>
  );
}

export default App
