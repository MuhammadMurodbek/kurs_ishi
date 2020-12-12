import React, { Component } from 'react';
<<<<<<< HEAD
import Button from '@material-ui/core/Button';
=======

>>>>>>> 759918dfdca6819fbeb81678f28183adaa7a9b6c
function formatCurrency(num){
    return "$" + Number(num.toFixed(1).toLocaleString()+' ')
}

class Product extends Component {
    render() {
<<<<<<< HEAD
        
=======
>>>>>>> 759918dfdca6819fbeb81678f28183adaa7a9b6c
        return (
            <div>
                <ul className="product-common">
                    {this.props.products.map(product => (
<<<<<<< HEAD
                        <li key={product._id}>
                            <div className="product">
                                <a href={"#"+product._id}> 
=======
                        <li key={product.id}>
                            <div className="product">
                                <a href={"#"+product.id}> 
>>>>>>> 759918dfdca6819fbeb81678f28183adaa7a9b6c
                                    <img className="product-img" src={product.image} alt={product.title}/>
                                    <p>{product.title}</p>
                                </a>
                                <div className="product-price">
<<<<<<< HEAD
                                    <div>Price: {formatCurrency(product.price)}</div>
                                    <Button 
                                        variant="outlined" color="primary"
                                        onClick={()=>this.props.addToCart(product._id)}
                                    >
                                        Add to Cart
                                    </Button>
=======
                                    <div>{formatCurrency(product.price)}</div>
                                    <button className="button-primary">
                                        Add to Cart
                                    </button>
>>>>>>> 759918dfdca6819fbeb81678f28183adaa7a9b6c
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Product;