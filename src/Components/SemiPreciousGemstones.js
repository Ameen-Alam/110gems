import React, { Component } from 'react';
import { IoBag } from 'react-icons/lib/io'
import { FaShoppingBag } from 'react-icons/lib/fa'
import "./Comp.css"
//Images
import A1 from '../Images/Gemstones/SemiPreciousGmestones/Agate.jpg';
import A2 from '../Images/Gemstones/SemiPreciousGmestones/Amethyst.jpg';
import A3 from '../Images/Gemstones/SemiPreciousGmestones/MoonStone.jpg';
import A4 from '../Images/Gemstones/SemiPreciousGmestones/Tigereye.jpg';
import A5 from '../Images/Gemstones/SemiPreciousGmestones/YellowCitrine.jpg';
import A6 from '../Images/Gemstones/SemiPreciousGmestones/Zircon.jpg';


class SemiPreciousGemstones extends Component {
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
        const { isAddToCart } = this.state
        return (
            <div className="container-fluid padding-2">
                <div className="" style={{ borderBottom: '1px solid #222' }} >
                    <h2 className="pt-3 text-muted pl-3 pl-lg-0" > Most Popular (6)</h2>
                    <br />
                </div>
                <div className="mt-3 px-0 " >
                    {/* <div className="col-md-3 col-sm-4 col-xs-6" > */}
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A1} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div className="text-center addToBag-full z-depth-1" >
                                    <div className="p-0 m-0">ADDED TO BAG</div>
                                    <div className="p-0 m-0 bag-full"><FaShoppingBag /></div>
                                </div>
                                :
                                <div onClick={this.addToCart.bind(null, "id")} className="text-center addToBag z-depth-1" >
                                    <div className="p-0">ADD TO BAG</div>
                                    <div className="p-0 bag"><IoBag /></div>
                                </div>
                            }
                        </div>
                    </div>
                    {/* </div> */}
                    {/* <div className="col-md-3 col-sm-4 col-xs-6" > */}
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A2} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div className="text-center addToBag-full z-depth-1" >
                                    <div className="p-0 m-0">ADDED TO BAG</div>
                                    <div className="p-0 m-0 bag-full"><FaShoppingBag /></div>
                                </div>
                                :
                                <div onClick={this.addToCart.bind(null, "id")} className="text-center addToBag z-depth-1" >
                                    <div className="p-0">ADD TO BAG</div>
                                    <div className="p-0 bag"><IoBag /></div>
                                </div>
                            }
                        </div>
                    </div>
                    {/* </div> */}
                    {/* <div className="col-md-3 col-sm-4 col-xs-6" > */}
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A3} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div className="text-center addToBag-full z-depth-1" >
                                    <div className="p-0 m-0">ADDED TO BAG</div>
                                    <div className="p-0 m-0 bag-full"><FaShoppingBag /></div>
                                </div>
                                :
                                <div onClick={this.addToCart.bind(null, "id")} className="text-center addToBag z-depth-1" >
                                    <div className="p-0">ADD TO BAG</div>
                                    <div className="p-0 bag"><IoBag /></div>
                                </div>
                            }
                        </div>
                    </div>
                    {/* </div> */}
                    {/* <div className="col-md-3 col-sm-4 col-xs-6" > */}
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A4} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div className="text-center addToBag-full z-depth-1" >
                                    <div className="p-0 m-0">ADDED TO BAG</div>
                                    <div className="p-0 m-0 bag-full"><FaShoppingBag /></div>
                                </div>
                                :
                                <div onClick={this.addToCart.bind(null, "id")} className="text-center addToBag z-depth-1" >
                                    <div className="p-0">ADD TO BAG</div>
                                    <div className="p-0 bag"><IoBag /></div>
                                </div>
                            }
                        </div>
                    </div>
                    {/* </div> */}
                    {/* <div className="col-md-3 col-sm-4 col-xs-6" > */}
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A5} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div className="text-center addToBag-full z-depth-1" >
                                    <div className="p-0 m-0">ADDED TO BAG</div>
                                    <div className="p-0 m-0 bag-full"><FaShoppingBag /></div>
                                </div>
                                :
                                <div onClick={this.addToCart.bind(null, "id")} className="text-center addToBag z-depth-1" >
                                    <div className="p-0">ADD TO BAG</div>
                                    <div className="p-0 bag"><IoBag /></div>
                                </div>
                            }
                        </div>
                    </div>
                    {/* </div> */}
                    {/* <div className="col-md-3 col-sm-4 col-xs-6" > */}
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A6} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div className="text-center addToBag-full z-depth-1" >
                                    <div className="p-0 m-0">ADDED TO BAG</div>
                                    <div className="p-0 m-0 bag-full"><FaShoppingBag /></div>
                                </div>
                                :
                                <div onClick={this.addToCart.bind(null, "id")} className="text-center addToBag z-depth-1" >
                                    <div className="p-0">ADD TO BAG</div>
                                    <div className="p-0 bag"><IoBag /></div>
                                </div>
                            }
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        )
    }
}
export default SemiPreciousGemstones;