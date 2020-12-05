import React, { Component } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
class Categories extends Component {
    render() {
        return (
            <div className="categories">
                <ul className="list-group">
                    <li className="list-item">
                        <HomeIcon fontSize="large" />
                        <a href="#">Home</a>
                    </li>
                    <li className="list-item">
                        <AddShoppingCartIcon fontSize="large"/>
                        <a href="#">New Products</a>
                        {/* <ul className="list-group">
                            <li className="list-item"><a href="#">New Products</a></li>
                            <li className="list-item"><a href="#">New Products</a></li>
                            <li className="list-item"><a href="#">New Products</a></li>
                        </ul> */}
                    </li>
                    <li className="list-item">
                        <RecordVoiceOverIcon fontSize="large"/>
                        <a href="#">About us</a>
                    </li>
                    <li className="list-item">
                        <SupervisedUserCircleIcon fontSize="large"/>
                        <a href="#">Connect</a>
                    </li>
                    <li className="list-item">
                        <HelpOutlineIcon fontSize="large"/>
                        <a href="#">Help</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Categories;