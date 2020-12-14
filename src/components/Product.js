import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {Animated} from "react-animated-css";
import TextTruncate from 'react-text-truncate'; 
function formatCurrency(num){
    return "$" + Number(num.toFixed(1).toLocaleString()+' ')
}

class Product extends Component {
    render() {
        return (
            <div>
                <ul className="product-common">
                    {this.props.products.map(product => (
                        <li key={product._id}>
                         <Animated animationIn="bounceInUp" animationOut="bounceInDown" isVisible={true}>
                            <div className="product">
                                <a href={"#"+product._id}> 
                                    <img className="product-img" src={product.image} alt={product.title}/>
                                    {/* <p>{product.title}</p> */}
                                    <TextTruncate
                                        line={1}
                                        element="p"
                                        truncateText="…"
                                        text={product.title}
                                    />
                                </a>
                                <div className="product-price">
                                    <div>Price: {formatCurrency(product.price)}</div>
                                    <Button 
                                        variant="outlined" color="primary"
                                        onClick={()=>this.props.addToCart(product._id)}
                                        size="large"
                                        fontSize="large"
                                    >
                                        Add to Cart
                                    </Button>
                                </div>
                            </div>
                            </Animated>
                        </li>         
                    ))}
                </ul>
            </div>
        );
    }
}

export default Product;