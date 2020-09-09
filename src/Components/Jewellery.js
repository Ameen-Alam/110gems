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
/* mens rings */
/* womens rings */
import B1 from '../Images/jewelry/WomensRings/1.jpg';
import B2 from '../Images/jewelry/WomensRings/2.jpg';
import B3 from '../Images/jewelry/WomensRings/3.png';
import B4 from '../Images/jewelry/WomensRings/4.jpg';
import B5 from '../Images/jewelry/WomensRings/5.jpg';
// import B6 from '../Images/jewelry/WomensRings/6.png';
import B7 from '../Images/jewelry/WomensRings/7.jpg';
import B8 from '../Images/jewelry/WomensRings/8.jpg';
import B9 from '../Images/jewelry/WomensRings/9.jpg';
import B10 from '../Images/jewelry/WomensRings/10.jpg';
import B11 from '../Images/jewelry/WomensRings/11.jpg';
import B12 from '../Images/jewelry/WomensRings/12.jpg';
import B13 from '../Images/jewelry/WomensRings/13.jpg';
import B14 from '../Images/jewelry/WomensRings/14.jpg';
import B15 from '../Images/jewelry/WomensRings/15.jpg';
import B16 from '../Images/jewelry/WomensRings/16.jpg';
import B17 from '../Images/jewelry/WomensRings/17.jpg';
import B18 from '../Images/jewelry/WomensRings/18.jpg';
import B19 from '../Images/jewelry/WomensRings/19.jpg';
import B20 from '../Images/jewelry/WomensRings/20.jpg';
import B21 from '../Images/jewelry/WomensRings/21.jpg';
import B22 from '../Images/jewelry/WomensRings/22.jpg';
import B23 from '../Images/jewelry/WomensRings/23.jpg';
import B24 from '../Images/jewelry/WomensRings/24.jpg';
import B25 from '../Images/jewelry/WomensRings/25.jpg';
import B26 from '../Images/jewelry/WomensRings/26.jpg';
import B27 from '../Images/jewelry/WomensRings/27.jpg';
import B28 from '../Images/jewelry/WomensRings/28.jpg';
import B29 from '../Images/jewelry/WomensRings/29.jpg';
import B30 from '../Images/jewelry/WomensRings/30.jpg';
import B31 from '../Images/jewelry/WomensRings/31.jpg';
import B32 from '../Images/jewelry/WomensRings/32.jpg';
import B33 from '../Images/jewelry/WomensRings/33.jpg';
import B34 from '../Images/jewelry/WomensRings/34.jpg';
import B35 from '../Images/jewelry/WomensRings/35.jpg';
/* womens rings */

/* MensBracelet */
import C1 from '../Images/jewelry/MensBracelete/1.jpg';
import C2 from '../Images/jewelry/MensBracelete/2.jpg';
import C3 from '../Images/jewelry/MensBracelete/3.jpg';
import C4 from '../Images/jewelry/MensBracelete/4.png';
import C5 from '../Images/jewelry/MensBracelete/5.jpg';
import C6 from '../Images/jewelry/MensBracelete/6.jpg';
import C7 from '../Images/jewelry/MensBracelete/7.jpg';
import C8 from '../Images/jewelry/MensBracelete/8.jpg';
import C9 from '../Images/jewelry/MensBracelete/9.jpg';
import C10 from '../Images/jewelry/MensBracelete/10.jpg';
/* MensBracelet */
/* WomensBracelet */
import D1 from '../Images/jewelry/WomensBracelete/1.jpg';
import D2 from '../Images/jewelry/WomensBracelete/2.jpg';
import D3 from '../Images/jewelry/WomensBracelete/3.jpg';
import D4 from '../Images/jewelry/WomensBracelete/4.jpg';
import D5 from '../Images/jewelry/WomensBracelete/5.jpg';
import D6 from '../Images/jewelry/WomensBracelete/6.jpg';
import D7 from '../Images/jewelry/WomensBracelete/7.jpg';
import D8 from '../Images/jewelry/WomensBracelete/8.jpg';
import D9 from '../Images/jewelry/WomensBracelete/9.jpg';
import D10 from '../Images/jewelry/WomensBracelete/10.jpg';
import D11 from '../Images/jewelry/WomensBracelete/11.jpg';
import D12 from '../Images/jewelry/WomensBracelete/12.jpg';
import D13 from '../Images/jewelry/WomensBracelete/13.jpg';
import D14 from '../Images/jewelry/WomensBracelete/14.jpg';
import D15 from '../Images/jewelry/WomensBracelete/15.jpg';
import D16 from '../Images/jewelry/WomensBracelete/16.jpg';
import D17 from '../Images/jewelry/WomensBracelete/17.jpg';
import D18 from '../Images/jewelry/WomensBracelete/18.jpg';
import D19 from '../Images/jewelry/WomensBracelete/19.jpg';
import D20 from '../Images/jewelry/WomensBracelete/20.jpg';
import D21 from '../Images/jewelry/WomensBracelete/21.jpg';
import D22 from '../Images/jewelry/WomensBracelete/22.jpg';
import D23 from '../Images/jewelry/WomensBracelete/23.jpg';
import D24 from '../Images/jewelry/WomensBracelete/24.jpg';
import D25 from '../Images/jewelry/WomensBracelete/25.jpg';
import D26 from '../Images/jewelry/WomensBracelete/26.jpg';
import D27 from '../Images/jewelry/WomensBracelete/27.jpg';
import D28 from '../Images/jewelry/WomensBracelete/28.jpg';
/* WomensBracelet */
/* PearlJewelry */
import E1 from '../Images/jewelry/PearlJewelry/1.jpg';
import E2 from '../Images/jewelry/PearlJewelry/2.jpg';
// import E3 from '../Images/jewelry/PearlJewelry/3.png';
// import E4 from '../Images/jewelry/PearlJewelry/4.png';
import E5 from '../Images/jewelry/PearlJewelry/5.png';
import E6 from '../Images/jewelry/PearlJewelry/6.jpg';
import E7 from '../Images/jewelry/PearlJewelry/7.jpg';
import E8 from '../Images/jewelry/PearlJewelry/8.jpg';
import E9 from '../Images/jewelry/PearlJewelry/9.jpg';
import E10 from '../Images/jewelry/PearlJewelry/10.jpg';
import E11 from '../Images/jewelry/PearlJewelry/11.jpg';
import E12 from '../Images/jewelry/PearlJewelry/12.jpg';
import E13 from '../Images/jewelry/PearlJewelry/13.jpg';
/* PearlJewelry */
/* NecklacesPendants */


/* NecklacesPendants */

class Jewellery extends Component {
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
                {/* MENS RINGS */}
                <div className="" style={{ borderBottom: '1px solid #222' }} >
                    <h2 className="pt-3 text-muted pl-3 pl-lg-0" > Men's Rings (88)</h2>
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A16} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A17} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A18} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A19} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A20} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A21} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A22} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A23} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A24} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A25} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A26} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A27} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A28} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A29} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A30} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A31} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A32} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A33} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A34} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A35} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A36} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A37} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A38} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A39} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A40} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A41} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A42} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A43} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A44} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A45} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A46} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A47} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A48} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A49} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A50} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A51} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A52} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A53} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A54} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A55} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A56} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A57} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A58} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A59} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A60} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A61} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A62} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A63} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A64} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A65} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A66} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A67} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A68} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A69} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A70} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A71} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A72} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A73} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A74} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A75} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A78} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A79} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A80} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A81} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A82} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A83} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A84} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A85} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A86} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A87} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={A88} />
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
                {/* MENS RINGS */}
                {/* WOMENS RINGS */}
                <div className="" style={{ borderBottom: '1px solid #222' }} >
                    <h2 className="pt-3 text-muted pl-3 pl-lg-0" > Men's Rings (35)</h2>
                    <br />
                </div>
                <div className="mt-3 px-0 " >
                    {/* <div className="col-md-3 col-sm-4 col-xs-6" > */}
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={B1} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={B2} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={B3} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={B4} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={B5} />
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
                    {/* <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={B6} />
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
                    </div> */}
                    {/* </div> */}
                    {/* <div className="col-md-3 col-sm-4 col-xs-6" > */}
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={B7} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={B8} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={B9} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={B10} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={B11} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={B12} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={B13} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={B14} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={B15} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={B16} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={B17} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={B18} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={B19} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={B20} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={B21} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={B22} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={B23} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={B24} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={B25} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={B26} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={B27} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={B28} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={B29} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={B30} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={B31} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={B32} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={B33} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={B34} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={B35} />
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

                </div>
                {/* WOMENS RINGS */}
                {/* MensBracelet */}
                <div className="" style={{ borderBottom: '1px solid #222' }} >
                    <h2 className="pt-3 text-muted pl-3 pl-lg-0" > Men's Bracelet (10)</h2>
                    <br />
                </div>
                <div className="mt-3 px-0 " >
                    {/* <div className="col-md-3 col-sm-4 col-xs-6" > */}
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={C1} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={C2} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={C3} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={C4} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={C5} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={C6} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={C7} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={C8} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={C9} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={C10} />
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
                </div>
                {/* MensBracelet */}
                {/* WomensBracelet */}
                <div className="" style={{ borderBottom: '1px solid #222' }} >
                    <h2 className="pt-3 text-muted pl-3 pl-lg-0" > Women's Bracelet (28)</h2>
                    <br />
                </div>
                <div className="mt-3 px-0 " >
                    {/* <div className="col-md-3 col-sm-4 col-xs-6" > */}
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={D1} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={D2} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={D3} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={D4} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={D5} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={D6} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={D7} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={D8} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={D9} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={D10} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={D11} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={D12} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={D13} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={D14} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={D15} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={D16} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={D17} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={D18} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={D19} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={D20} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={D21} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={D22} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={D23} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={D24} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={D25} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={D26} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={D27} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={D28} />
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
                {/* WomensBracelet */}
                {/* PearlJewelry */}
                <div className="" style={{ borderBottom: '1px solid #222' }} >
                    <h2 className="pt-3 text-muted pl-3 pl-lg-0" > Pearl Jewelry (13)</h2>
                    <br />
                </div>
                <div className="mt-3 px-0 " >
                    {/* <div className="col-md-3 col-sm-4 col-xs-6" > */}
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={E1} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={E2} />
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
                    {/* <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={E3} />
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
                    </div> */}
                    {/* </div> */}
                    {/* <div className="col-md-3 col-sm-4 col-xs-6" > */}
                    {/* <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={E4} />
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
                    </div> */}
                    {/* </div> */}
                    {/* <div className="col-md-3 col-sm-4 col-xs-6" > */}
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={E5} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={E6} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={E7} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={E8} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={E9} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={E10} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={E11} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={E12} />
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
                    <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={E13} />
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
                </div>
                {/* PearlJewelry */}
                {/* NecklacesPendants */}
                <div className="" style={{ borderBottom: '1px solid #222' }} >
                    <h2 className="pt-3 text-muted pl-3 pl-lg-0" > Necklaces Pendants (0)</h2>
                    <br />
                </div>
                <div className="mt-3 px-0 " >
                    {/* <div className="col-md-3 col-sm-4 col-xs-6" > */}
                    {/* <div className="jwelry-img d-inline-block  animated fadeInUp   view zoom overlay"><img alt="" className="rgba-black-light img-fluid img-full" src={E13} />
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
                    </div> */}
                </div>
                {/* NecklacesPendants */}
            </div>
        )
    }
}
export default Jewellery;