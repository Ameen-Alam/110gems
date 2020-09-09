import React, { Component } from 'react';
import { IoBag } from 'react-icons/lib/io'
import { FaShoppingBag } from 'react-icons/lib/fa'
import "./Comp.css"
//Images
import A1 from '../Images/Gifts/ForHim/1.jpg';
import A2 from '../Images/Gifts/ForHim/2.jpg';
import A3 from '../Images/Gifts/ForHim/3.jpg';
import A4 from '../Images/Gifts/ForHim/4.jpg';
import A5 from '../Images/Gifts/ForHim/5.jpg';
import A6 from '../Images/Gifts/ForHim/6.jpg';
import A7 from '../Images/Gifts/ForHim/7.jpg';
import A8 from '../Images/Gifts/ForHim/8.jpg';
import A9 from '../Images/Gifts/ForHim/9.jpg';
import A10 from '../Images/Gifts/ForHim/10.jpg';
import A11 from '../Images/Gifts/ForHim/11.jpg';
import A12 from '../Images/Gifts/ForHim/12.jpg';
import A13 from '../Images/Gifts/ForHim/13.jpg';
import A14 from '../Images/Gifts/ForHim/14.jpg';


class EngagmentGiftsForHim extends Component {
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
                    <h2 className="pt-3 text-muted pl-3 pl-lg-0" > Most Popular (14)</h2>
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
                    {/* <div className="col-md-3 col-sm-4 col-xs-6" > */}
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A7} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A8} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A9} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A10} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A11} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A12} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A13} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A14} />
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
export default EngagmentGiftsForHim;