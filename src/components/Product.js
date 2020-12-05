import React, { Component } from 'react';

function formatCurrency(num){
    return "$" + Number(num.toFixed(1).toLocaleString()+' ')
}

class Product extends Component {
    render() {
        return (
            <div>
                <ul className="product-common">
                    {this.props.products.map(product => (
                        <li key={product.id}>
                            <div className="product">
                                <a href={"#"+product.id}> 
                                    <img className="product-img" src={product.image} alt={product.title}/>
                                    <p>{product.title}</p>
                                </a>
                                <div className="product-price">
                                    <div>{formatCurrency(product.price)}</div>
                                    <button className="button-primary">
                                        Add to Cart
                                    </button>
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