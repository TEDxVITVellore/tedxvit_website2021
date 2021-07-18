import './App.css';




//Components
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import UpcomingEvents from './components/UpcomingEvents'
import Blog from './components/Blog'
import Team from './components/Team'
import Sponsors from './components/Sponsors'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <LandingPage />
      {/* <AboutUs />
       <UpcomingEvents />
       <Blog />
       <Team />
       <Sponsors />
       <Footer /> */}
    </div>
  );
}

export default App;
