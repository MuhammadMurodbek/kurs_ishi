import React from 'react'
import './App.css';
import Product from './components/Product';
import data from "./data.json"

class App extends React.Component{
  constructor(){
    super();
    this.state={
      products:data.products,
      size:"",
      sort:"",
    }
  }
  render(){
    return (
      <div className="grid-container">
        <header>
          <a href="/">React shopping cart</a>
        </header>

        <main>
            <div className="content">
              <div className="main">
                <Product products={this.state.products}/>
              </div>
              <div className="sidebar">Cart Items</div>
            </div>
        </main>
          
        <footer>
          All right is reserved
        </footer>
      </div>
    );
  }  
}

export default App;
///https://www.youtube.com/watch?v=731Ur2HGRBY