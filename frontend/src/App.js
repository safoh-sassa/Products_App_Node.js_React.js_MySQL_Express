import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <Router>
      <Fragment>
      {<div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Routes>
             <Route exact path="/" element={<ProductList/>} />
                
              <Route path="/add" element={<AddProduct/>} />
              
              <Route path="/edit/:id" element={<EditProduct/>} />
               
            </Routes>
          </div>
        </div>
      </div>}

      </Fragment>
      
    </Router>
  );
}

export default App;

