import './App.scss';
import AboutMe from './Components/AboutMe/AboutMe';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import HomeJs from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import NavRes from './Components/Nav/NavResponsive';
import Subjects from './Components/Subjects/Subjects';

function App() {
  return (
    <div className="App">
      <Nav />
      <NavRes />
      <HomeJs />
      <AboutMe />
      <Subjects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
