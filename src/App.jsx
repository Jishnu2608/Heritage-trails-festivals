import Header from "./components/Header/Header";
import Hero from './components/Hero/Hero';
import './App.css';
import ContentFestivals from "./components/Content/content-festivals";
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
      </div>
      <ContentFestivals/>
      <Footer/>
    </div>
  );
}

export default App;
