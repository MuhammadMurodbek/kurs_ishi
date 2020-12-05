import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
export default class Sidebar extends Component {
   constructor(){
       super()
       this.state={
           summa:0,
           arraySum:[]
       }
   }
    render() { 
        return (
            <div className="sidebar">
                <div className="sidebar-item-wrapper">
                    {this.props.massivSelected.map(e=>(
                        <div key={e._id} className="sidebar-item">
                            <div className="sidebar-img-wrapper">
                                <img src={e.image} alt={e.title}/>
                            </div>
                            <div className="sidebar-info-wrapper">
                                <span className="sidebar-info-wrapper-title">
                                    <p>{e.title}</p>
                                </span>
                                <span className="sidebar-info-wrapper-price">
                                    <p>${e.price} x {this.props.counter[e._id]}</p>
                                    <Button 
                                        variant="contained"
                                        color="secondary"
                                        onClick={()=>this.props.removeitem(e._id)}
                                    >
                                        Remove
                                    </Button>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="total-price">
                    <span className="price">
                        Total price: 
                    </span>
                    <span>
                        <Button variant="outlined" style={{color:'#fff', borderColor:'#fff'}}>
                            Submit
                        </Button>
                    </span>
                </div>
                <div className="submit-to-card">
                    <span className="card-img">
                        <img src="../images/undraw.svg" alt="asd"/>
                    </span>
                    <span style={{marginTop:'10px'}}>
                        <Button variant="contained" color="primary">
                            Payment
                        </Button>
                    </span>
                </div>
            </div>
        )
    }
}
