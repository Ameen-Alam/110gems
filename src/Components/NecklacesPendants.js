import React, { Component } from 'react';
// import { IoBag } from 'react-icons/lib/io'
// import { FaShoppingBag } from 'react-icons/lib/fa'
import "./Comp.css"
//Images


class NecklacesPendants extends Component {
    constructor(props) {
        super(props)
        this.addToCart = this.addToCart.bind(this)
        this.state = {
            isAddToCart: false
        }
    }
    addToCart(id) {
        this.setState({
            isAddToCart: true
        })
    }
    render() {
        // const { isAddToCart } = this.state
        return (
            <div className="container-fluid padding-2">
                <div className="" style={{ borderBottom: '1px solid #222' }} >
                    <h2 className="pt-3 text-muted pl-3 pl-lg-0" > Most Popular (0)</h2>
                    <br />
                </div>
                <div className="mt-3 px-0 " >
                   
                </div>
            </div>
        )
    }
}
export default NecklacesPendants;