import logo from './logo.svg';
import './App.css';
import Headers from './Component/Headers';
import Carousel from './Component/Carousel';
import Content from './Component/Content';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Headers/>
      <Carousel/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
