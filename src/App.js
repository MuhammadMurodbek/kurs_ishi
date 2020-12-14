import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Snowfall from 'react-snowfall'
import Filter from './components/Filter';
import Product from './components/Product';
import Sidebar from './components/Sidebar';
import Categories from "./components/Categories"
import data from "./data.json"
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PaymentForm from './components/CartPayment';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      products:[],
      arrayToCheck:[],
      massivSelected:[],
      setCount:[],
      count:0,
      size:"",
      sort:"",
    }
  }
  componentDidMount=()=>{
    this.setState({
      products:data.products
    })
    this.state.setCount.length=this.state.products.length
    for(var i=0; i<this.state.setCount.length; i++){
      this.state.setCount[i]=0
    }
  }
  // ADD_TO_CARD* 
  addToCart=(idNum)=>{
    var massiv = this.state.arrayToCheck
    this.checkCounter(idNum)
    massiv.push(idNum)
    this.setState({
      arrayToCheck:massiv
    })
    this.addToSidebar(idNum)
    // console.log(this.state.arrayToCheck)
  }
  checkCounter=(e)=>{
    this.state.arrayToCheck.includes(e) ? 
    console.log(true)
    :
    this.setState({
      count:this.state.count+1
    })
    console.log(this.state.countshop)
    
  }
  // ! ADD_TO_CARD*
  // SORT_PRODUCTS*
  sortProducts=(event)=>{
    const valVal = event.target.value
    console.log(valVal)
    valVal==="highest" ? 
    this.setState({
      sort:valVal,
      product:this.state.products.sort(function(a,b){
        return b.price-a.price
      })
    })
    :
    this.setState({
      sort:valVal,
      product:this.state.products.sort(function(a,b){
        return a.price-b.price
      })
    })
    console.log(this.state.products)
  }
  filterProducts=(event)=>{
    //dsaf
    console.log(event.target.value)
    if(event.target.value===""){
      this.setState({
        size:event.target.value,
        products:data.products
      })
    }else{
      this.setState({
        size:event.target.value,
        products:data.products.filter(product =>
          product.avialable.includes(event.target.value)
        )
      })
    }
    console.log(this.state.products)
  }
  // ! SORT_PRODUCTS
  removeSidebarItem=(idRemove)=>{
    this.setState({
      massivSelected:this.state.massivSelected.filter(e=>idRemove!==e._id)
    })
    this.state.setCount[idRemove]=0
  }
  // ! REMOVE ITEM***

  // ADD TO SIDEBAR**
  addToSidebar=(idNum)=>{ 
   this.state.products.map((ab)=>{
     if(ab._id===idNum ){
       if(this.state.massivSelected.includes(ab)){ 
         this.alreadyExist(idNum)
        }
       else{
         this.state.massivSelected.push(ab) 
         this.state.setCount[idNum]+=1
        }
      }
  })
      console.log(this.state.massivSelected)
      // this.addSumma(this.state.massivSelected)
  }
  // ! ADD TO SIDEBAR
  alreadyExist=(idNum)=>{
    this.state.setCount[idNum]+=1
    console.log(this.state.setCount[idNum])
  }
  filterProductItems=(e)=>{
    var sortMassiv=[]
    var dataBase = data.products
    sortMassiv = dataBase.filter(function(oop){
      return oop.title.toLocaleLowerCase().indexOf(e.target.value.toLocaleLowerCase())>=0
    })
    e.target.value.length>0 ?
    this.setState({
      products:sortMassiv
    }):
    this.setState({
      products:data.products
    })
  }
  render(){ 
    return (
      <>
      <div style={{ }}>
            <Snowfall  />
      </div>
      <div className="grid-container">
        <Router>
          <Route path="/" exact>
          <header>
            <AddShoppingCartIcon style={{color:'#fff', fontSize:'large', margin:'0 10px'}}/>
            <a href="/">React shopping cart</a>
            <ul className="header-messenger">
              <li><a href="#telegram"><i className="fa fa-telegram"></i></a></li>
              <li><a href="#instagram"><i className="fa fa-instagram"></i></a></li>
              <li><a href="#youtube"><i className="fa fa-youtube"></i></a></li>
              <li><a href="#facebook"><i className="fa fa-facebook"></i></a></li>
            </ul>
          </header>

          <main>   
              <div className="content">
                <div className="categories">
                  <Categories/>
                </div>
                
                <div className="main">
                  <Filter count={this.state.products.length}
                    size = {this.state.size}
                    sort = {this.state.sort}
                    filterProducts={this.filterProducts}
                    sortProducts={this.sortProducts}
                    filterItems={this.filterProductItems}
                  />
                  <Product products={this.state.products} addToCart={this.addToCart}/>
                </div>
                
                <div className="sidebarItem">
                  <span style={{textAlign:'center'}}>
                    {this.state.massivSelected.length<=0 ? <p>Your shop bag is empty</p> : 
                      <p>you have {this.state.massivSelected.length} items here</p>}
                  </span>
                  <Sidebar 
                    massivSelected={this.state.massivSelected} 
                    counter={this.state.setCount} 
                    removeitem={this.removeSidebarItem}
                  />
                </div>
              </div>
          </main>
            
          <footer>
            All right is reserved
          </footer>
          </Route>
         <Route path="/payment">
          <div className="cart-payment">
            <PaymentForm/>
          </div>
         </Route>
        </Router>
      </div>
      </>
    );
  }  
}

export default App;
///https://www.youtube.com/watch?v=731Ur2HGRBY