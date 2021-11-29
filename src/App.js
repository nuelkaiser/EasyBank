import NavBar from './Container/NavBar';
import Intro from './Container/Intro';
import Why  from './Container/Why';
import Latest from './Container/Latest'
import Footer from './Container/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Intro/>
     <Why />
     <Latest />
     <Footer />
    </div>
  );
}

export default App;
