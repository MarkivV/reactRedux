import './App.css';
import Header from "./containers/Header";
import ProductList from "./containers/ProductList";
import ProductDetails from "./containers/ProductDetails";
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
                <Routes>
                    <Route path="/" element={<ProductList/>}/>
                    <Route path="/product/:productId" element={<ProductDetails/>}/>
                    <Route>404 Not Found</Route>
                </Routes>
        </Router>

    </div>
  );
}

export default App;
