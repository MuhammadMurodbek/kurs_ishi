import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import TextTruncate from 'react-text-truncate'; 
import {Link} from "react-router-dom"
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
                                    {/* <p>{e.title}</p> */}
                                    <TextTruncate
                                        line={1}
                                        element="p"
                                        truncateText="…"
                                        text={e.title}
                                    
                                    />
                                </span>
                                <span className="sidebar-info-wrapper-price">
                                    <p>${e.price} x {this.props.counter[e._id]}</p>
                                    <Button 
                                        color="secondary"
                                        onClick={()=>this.props.removeitem(e._id)}
                                    >
                                        <DeleteOutlineIcon fontSize="large"/>
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
                        <Link to="/payment" style={{textDecoration:'none'}}>
                            <Button variant="contained" color="primary">
                                Payment
                            </Button>
                        </Link>
                    </span>
                </div>
            </div>
        )
    }
}
