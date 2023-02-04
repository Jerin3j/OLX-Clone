import './App.css';
import Ads from './Components/Ads/Ads';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Products/>
      <Ads/>
      <Footer/>
    </div>
  );
}

export default App;
