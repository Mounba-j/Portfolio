
import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar'
import Experiences from './components/experiences';

function App() {
 

  return (
    <>
      <div>
        <div className="p-2 md: px-[15%]">
          <NavBar />
          <Home />
        </div>

        <About />
        <div className="p-2 md: px-[15%]">
          <Experiences/>
        </div>
      </div>
    </>
  );
}

export default App
