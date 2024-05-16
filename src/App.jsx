import "./style/App.css"
import { Header } from './components/Header'
import {Hero} from './components/Hero'
import { Products } from "./components/product"
const App = () => {
  return (
    <div className="App">
          <Header />
          <Hero />
          <Products />
    </div>
  );
}

export default App;
