import React, {useState} from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import Button from '@material-ui/core/Button';
import {Animated} from "react-animated-css";
export default function PaymentForm() {
    const [number, setNumber] = useState('')
    const [name, setName] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvc, setCvc] = useState('')
    const [focus, setFocus] = useState('')

    return(
        <div className="wrapper-card-credit">
           <Animated animationIn="wobble"  isVisible={true}>
            <Cards
            number={number}
            name={name}
            xpiry={expiry}
            cvc={cvc}
            focused={focus}
            />
            </Animated>
            <form>
                <input 
                    type="tel" 
                    name="number" 
                    placeholder="Card Number" 
                    value={number} 
                    onChange={ e =>setNumber(e.target.value)}
                    onFocus={e=>setFocus(e.target.name)}
                    maxLength="16"
                 />
                 <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    value={name} 
                    onChange={ e =>setName(e.target.value)}
                    onFocus={e=>setFocus(e.target.name)}
                 />
                <span>
                 <input 
                    type="text" 
                    name="expiry" 
                    placeholder="MM/YY Expiry" 
                    value={expiry} 
                    onChange={ e =>setExpiry(e.target.value)}
                    onFocus={e=>setFocus(e.target.name)}
                 />
                 <input 
                    type="tel" 
                    name="cvc" 
                    placeholder="CVC" 
                    value={cvc} 
                    onChange={ e =>setCvc(e.target.value)}
                    onFocus={e=>setFocus(e.target.name)}
                 />
                 </span>
                <Button 
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                >
                    Submit
                </Button>
            </form>
        </div>
    )
}