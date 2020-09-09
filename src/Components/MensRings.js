import React, { Component } from 'react';
import { IoBag } from 'react-icons/lib/io'
import { FaShoppingBag } from 'react-icons/lib/fa'
import "./Comp.css"
//Images
import A1 from '../Images/jewelry/MensRings/1.jpg';
import A2 from '../Images/jewelry/MensRings/2.jpg';
import A3 from '../Images/jewelry/MensRings/3.jpg';
import A4 from '../Images/jewelry/MensRings/4.jpg';
import A5 from '../Images/jewelry/MensRings/5.jpg';
import A6 from '../Images/jewelry/MensRings/6.jpg';
import A7 from '../Images/jewelry/MensRings/7.jpg';
import A8 from '../Images/jewelry/MensRings/8.jpg';
import A9 from '../Images/jewelry/MensRings/9.jpg';
import A10 from '../Images/jewelry/MensRings/10.jpg';
import A11 from '../Images/jewelry/MensRings/11.jpg';
import A12 from '../Images/jewelry/MensRings/12.jpg';
import A13 from '../Images/jewelry/MensRings/13.jpg';
import A14 from '../Images/jewelry/MensRings/14.jpg';
import A15 from '../Images/jewelry/MensRings/15.jpg';
import A16 from '../Images/jewelry/MensRings/16.jpg';
import A17 from '../Images/jewelry/MensRings/17.jpg';
import A18 from '../Images/jewelry/MensRings/18.jpg';
import A19 from '../Images/jewelry/MensRings/19.jpg';
import A20 from '../Images/jewelry/MensRings/20.jpg';
import A21 from '../Images/jewelry/MensRings/21.jpg';
import A22 from '../Images/jewelry/MensRings/22.jpg';
import A23 from '../Images/jewelry/MensRings/23.jpg';
import A24 from '../Images/jewelry/MensRings/24.jpg';
import A25 from '../Images/jewelry/MensRings/25.jpg';
import A26 from '../Images/jewelry/MensRings/26.jpg';
import A27 from '../Images/jewelry/MensRings/27.jpg';
import A28 from '../Images/jewelry/MensRings/28.jpg';
import A29 from '../Images/jewelry/MensRings/29.jpg';
import A30 from '../Images/jewelry/MensRings/30.jpg';
import A31 from '../Images/jewelry/MensRings/31.jpg';
import A32 from '../Images/jewelry/MensRings/32.jpg';
import A33 from '../Images/jewelry/MensRings/33.jpg';
import A34 from '../Images/jewelry/MensRings/34.jpg';
import A35 from '../Images/jewelry/MensRings/35.jpg';
import A36 from '../Images/jewelry/MensRings/36.jpg';
import A37 from '../Images/jewelry/MensRings/37.jpg';
import A38 from '../Images/jewelry/MensRings/38.jpg';
import A39 from '../Images/jewelry/MensRings/39.jpg';
import A40 from '../Images/jewelry/MensRings/40.jpg';
import A41 from '../Images/jewelry/MensRings/41.jpg';
import A42 from '../Images/jewelry/MensRings/42.jpg';
import A43 from '../Images/jewelry/MensRings/43.jpg';
import A44 from '../Images/jewelry/MensRings/44.jpg';
import A45 from '../Images/jewelry/MensRings/45.jpg';
import A46 from '../Images/jewelry/MensRings/46.jpg';
import A47 from '../Images/jewelry/MensRings/47.jpg';
import A48 from '../Images/jewelry/MensRings/48.jpg';
import A49 from '../Images/jewelry/MensRings/49.jpg';
import A50 from '../Images/jewelry/MensRings/50.jpg';
import A51 from '../Images/jewelry/MensRings/51.jpg';
import A52 from '../Images/jewelry/MensRings/52.jpg';
import A53 from '../Images/jewelry/MensRings/53.jpg';
import A54 from '../Images/jewelry/MensRings/54.jpg';
import A55 from '../Images/jewelry/MensRings/55.jpg';
import A56 from '../Images/jewelry/MensRings/56.jpg';
import A57 from '../Images/jewelry/MensRings/57.jpg';
import A58 from '../Images/jewelry/MensRings/58.jpg';
import A59 from '../Images/jewelry/MensRings/59.jpg';
import A60 from '../Images/jewelry/MensRings/60.jpg';
import A61 from '../Images/jewelry/MensRings/61.jpg';
import A62 from '../Images/jewelry/MensRings/62.jpg';
import A63 from '../Images/jewelry/MensRings/63.jpg';
import A64 from '../Images/jewelry/MensRings/64.jpg';
import A65 from '../Images/jewelry/MensRings/65.jpg';
import A66 from '../Images/jewelry/MensRings/66.jpg';
import A67 from '../Images/jewelry/MensRings/67.jpg';
import A68 from '../Images/jewelry/MensRings/68.jpg';
import A69 from '../Images/jewelry/MensRings/69.jpg';
import A70 from '../Images/jewelry/MensRings/70.jpg';
import A71 from '../Images/jewelry/MensRings/71.jpg';
import A72 from '../Images/jewelry/MensRings/72.jpg';
import A73 from '../Images/jewelry/MensRings/73.jpg';
import A74 from '../Images/jewelry/MensRings/74.jpg';
import A75 from '../Images/jewelry/MensRings/75.jpg';
// import A76 from '../Images/jewelry/MensRings/76.jpg';
import A77 from '../Images/jewelry/MensRings/77.jpg';
import A78 from '../Images/jewelry/MensRings/78.jpg';
import A79 from '../Images/jewelry/MensRings/79.jpg';
import A80 from '../Images/jewelry/MensRings/80.jpg';
import A81 from '../Images/jewelry/MensRings/81.jpg';
import A82 from '../Images/jewelry/MensRings/82.jpg';
import A83 from '../Images/jewelry/MensRings/83.jpg';
import A84 from '../Images/jewelry/MensRings/84.jpg';
import A85 from '../Images/jewelry/MensRings/85.jpg';
import A86 from '../Images/jewelry/MensRings/86.jpg';
import A87 from '../Images/jewelry/MensRings/87.jpg';
import A88 from '../Images/jewelry/MensRings/88.jpg';

class MensRings extends Component {
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
                    <h2 className="pt-3 text-muted pl-3 pl-lg-0" > Most Popular (88)</h2>
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
                                <div  className="text-center addToBag-full z-depth-1" >
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
                                <div  className="text-center addToBag-full z-depth-1" >
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
                                <div  className="text-center addToBag-full z-depth-1" >
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
                                <div  className="text-center addToBag-full z-depth-1" >
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
                                <div  className="text-center addToBag-full z-depth-1" >
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
                                <div  className="text-center addToBag-full z-depth-1" >
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
                                <div  className="text-center addToBag-full z-depth-1" >
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
                                <div  className="text-center addToBag-full z-depth-1" >
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
                                <div  className="text-center addToBag-full z-depth-1" >
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
                                <div  className="text-center addToBag-full z-depth-1" >
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
                                <div  className="text-center addToBag-full z-depth-1" >
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
                                <div  className="text-center addToBag-full z-depth-1" >
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
                                <div  className="text-center addToBag-full z-depth-1" >
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
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A15} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A16} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A17} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A18} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A19} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A20} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A21} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A22} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A23} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A24} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A25} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A26} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A27} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A28} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A29} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A30} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A31} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A32} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A33} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A34} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A35} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A36} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A37} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A38} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A39} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A40} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A41} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A42} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A43} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A44} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A45} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A46} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A47} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A48} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A49} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A50} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A51} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A52} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A53} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A54} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A55} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A56} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A57} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A58} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A59} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A60} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A61} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A62} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A63} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A64} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A65} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A66} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A67} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A68} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A69} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A70} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A71} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A72} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A73} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A74} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A75} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    {/* {/* <div className="col-md-3 col-sm-4 col-xs-6" > */}
                    <  span>{/* <img alt="" className=" jwelry-img" src={A76} /> */}</span>
                    {/* // </div> */}
                    {/* <div className="col-md-3 col-sm-4 col-xs-6" > */}
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A77} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A78} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A79} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A80} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A81} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A82} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A83} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A84} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A85} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A86} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A87} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A88} />
                        <div className={isAddToCart ? "mask p-1 p-lg-3 p-xl-5  rgba-teal-strong" : "mask p-1 p-lg-3 p-xl-5  rgba-black-strong"}>
                            <ul className="text-light addToCart" >
                                <li>Material: <b className="bold" > Silver</b></li>
                                <li>Weight : <b className="bold" > 1-1.5 Tola</b></li>
                                <li>Size: <b className="bold"> Any size Available</b></li>
                                <li>Price: <b className="bold"> 1,500 Pkr</b></li>
                            </ul>
                            {isAddToCart ?
                                <div  className="text-center addToBag-full z-depth-1" >
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
export default MensRings;