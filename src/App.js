import './App.css';
import Banner from './Components/Banner/Banner';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Products/>
    </div>
  );
}

export default App;
