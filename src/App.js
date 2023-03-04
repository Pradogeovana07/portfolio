import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import About from "./components/About"
import Work from "./components/Work"
import Contact from "./components/Contact"


function App() {
  return (
    <div className="App">
      <p id="aboutme-link" />
      <Header/>
      {/***about me section* */}
      <div className="aboutme-container">
        <div className="aboutme profilepic">
        </div>
        <div className="aboutme bio">
          <About/>
        </div>
      </div>
      <Work/>
      {/* **Contact Me box** */}
      {/* **contact me & social media tab will scroll to this section** */}
      <p id="SocialMedia-link" />
      <Contact/>


    </div>
  );
}

export default App;
