import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-result">{this.props.count} Products</div>
                <div>
                    <input type="search" placeholder="Search" className="filter-search"/>
                </div>
                <div className="filter-sort">
                    Order {" "}
                    <select 
                        style={{
                            border:'none',
                            borderBottom:'1px solid #999'
                        }}
                        value={this.props.sort} 
                        onChange={this.props.sortProducts}
                    >
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
                <div className="filter-size">
                    Filter {" "}
                    <select 
                        style={{
                            border:'none',
                            borderBottom:'1px solid #999'
                        }}
                        value={this.props.size} 
                        onChange={this.props.filterProducts}
                    >
                        <option value="">All</option>
                        <option value="X">X</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default Filter;