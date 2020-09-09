import React, { Component } from 'react';
import MarqueeDouble from 'react-marquee-double'
import "./Comp.css";
// import VelintineDay from '../Images/VelintineDay.jpg'
import { MdClose } from 'react-icons/lib/md';
import history from '../Routes/History';
// images
import Cover1 from '../Images/Cover1.jpg'
import Cover2 from '../Images/Cover2.jpg'
import Cover3 from '../Images/Cover3.jpg'
import Cover4 from '../Images/Cover4.jpg'
import Cover5 from '../Images/Cover5.jpg'
import Cover6 from '../Images/Cover6.jpg'

class HOME extends Component {
    constructor(props) {
        super(props)
        this.history = this.history.bind(this)
        this.state = {
            isLocation: false
        }
    }
    history(property) {
        history.push(property)
    }
    render() {
        const { isLocation } = this.state
        return (
            <div className="container-fluid padding-2">
                {isLocation ?
                    <div style={{ zIndex: -1 }} className="bg-dark text-center pb-5 text-light" >
                        <div className="text-right pr-2" > <MdClose onClick={() => this.setState({ isLocation: false })} className="pointer" /> </div>
                        <div className="row" >
                            <div className="col-sm-3" />
                            <div className="col-sm-6" >
                                <h3> PLEASE CONFIRM YOUR LOCATION </h3>
                                <em> Purchases made on this site will ship to U.S. addresses only. </em>
                                <div className="px-3 pt-3 pb-2" >

                                    <select style={{ padding: '10px 15px', width: 200 }} id="inputState" className="pointer mr-lg-5">
                                        <option selected>Choose...</option>
                                        <option>Karachi</option>
                                        <option>Badin</option>
                                        <option>Bhirkan</option>
                                        <option>Bhiria City</option>
                                        <option>Bhiria Road</option>
                                        <option>Rajo Khanani</option>
                                        <option>Chak</option>
                                        <option>Dadu</option>
                                        <option>Digri</option>
                                        <option>Diplo</option>
                                        <option>Dokri</option>
                                        <option>Gambat</option>
                                        <option>Garhi Yasin</option>
                                        <option>Ghotki</option>
                                        <option>Hyderabad</option>
                                        <option>Islamkot</option>
                                        <option>Jacobabad</option>
                                        <option>Jamshoro</option>
                                        <option>Jungshahi</option>
                                        <option>Kandhkot</option>
                                        <option>Kandiaro</option>
                                        <option>Kashmore</option>
                                        <option>Keti Bandar</option>
                                        <option>Khadro</option>
                                        <option>Khairpur</option>
                                        <option>Khipro</option>
                                        <option>Kotri</option>
                                        <option>Larkana</option>
                                        <option>Madeji</option>
                                        <option>Matiari</option>
                                        <option>Mehar</option>
                                        <option>Mirpur Khas</option>
                                        <option>Mithani</option>
                                        <option>Mithi</option>
                                        <option>Mehrabpur</option>
                                        <option>Moro</option>
                                        <option>Nagarparkar</option>
                                        <option>Naudero</option>
                                        <option>Naushahro Feroze</option>
                                        <option>Nawabshah</option>
                                        <option>Qambar</option>
                                        <option>Sijawal Junejo</option>
                                        <option>Qasimabad</option>
                                        <option>Ranipur</option>
                                        <option>Ratodero</option>
                                        <option>Rohri</option>
                                        <option>Sakrand</option>
                                        <option>Sanghar</option>
                                        <option>Shahbandar</option>
                                        <option>Shahdadkot</option>
                                        <option>Shahdadpur</option>
                                        <option>Shahpur Chakar</option>
                                        <option>Shikarpaur</option>
                                        <option>Sinjhoro</option>
                                        <option>Sukkur</option>
                                        <option>Tangwani</option>
                                        <option>Tando Adam Khan</option>
                                        <option>Tando Allahyar</option>
                                        <option>Tando Muhammad Khan</option>
                                        <option>Thatta</option>
                                        <option>Thari Mirwah</option>
                                        <option>Umerkot</option>
                                        <option>Warah</option>
                                        <option>Piryaloi</option>
                                        <option>Tharushah</option>
                                        <option>Sita Road</option>
                                        <option>Pir Jo Goth</option>
                                        <option>Shahpur jahania</option>
                                        <option>Qubo Saeed Khan</option>
                                        <option>Mehrabpur</option>
                                        <option>Samaro</option>
                                        <option>Maqsoodo Rind</option>
                                        <option>Sann</option>
                                        <option>Manjhand</option>
                                        <option>Lakhi ghulam shah</option>
                                        <option>Mian Sahib</option>
                                        <option>Khairpur Nathan Shah</option>
                                        <option>Boriri</option>
                                        <option>Other..</option>
                                    </select>

                                    <button style={{ padding: '11px 45px', background: "#212121" }} className="btn btn-outline-light" > Search </button>

                                </div>
                            </div>
                            <div className="col-sm-3" />
                        </div>
                    </div>
                    :
                    <div style={{ color: "#222" }} className="bg-light">
                        {/* <marquee direction="left" behavior="scroll" >
                            <strong className="font-weight-bold p-0 font-1" > This text will scroll from right to left</strong>
                            <strong className="px-5 mx-5 font-weight-bold p-0 font-1" > This text will scroll from right to left</strong>
                            <strong className="px-5 mx-5 font-weight-bold p-0 font-1" > This text will scroll from right to left</strong>
                        </marquee> */}
                        <MarqueeDouble
                            ref={(ref) => { this.marquee = ref }}
                            step={1} interval={20}
                            autoStart={true}
                            direction={'left'}
                            delay={1000}
                            onStart={() => { this.marquee.delay() }}>
                            <h5 className="px-5 mx-5 font-weight-bold p-0 font-1" >
                                We deal in all kinds of semi-pricies and pricies Gemstones, we also deal in jewelry items such as rings, pendant, earrings, bracelets etc. We are specialized in engraving art. 
                            </h5>
                        </MarqueeDouble>
                    </div>
                }
                <div>
                    <img alt="" className="pointer" onClick={this.history.bind(null, "/engraving/art_gallery")} style={{ width: "100%" }} src={Cover4} />
                </div>
                <div>
                    <img alt="" className="pointer" onClick={this.history.bind(null, "/gift/gift_for_him")} style={{ width: "50%" }} src={Cover1} />
                    {/* </div>
                <div> */}
                    <img alt="" className="pointer" onClick={this.history.bind(null, "/engagement/womens_engagement_rings")} style={{ width: "50%" }} src={Cover2} />
                </div>
                <div>
                    <img alt="" className="pointer" onClick={this.history.bind(null, "/gift/gift_for_her")} style={{ width: "100%" }} src={Cover3} />
                </div>
                <div>
                    <img alt="" className="pointer" onClick={this.history.bind(null, "/engagement/womens_engagement_rings")} style={{ width: "50%" }} src={Cover5} />
                    {/* </div>
                <div> */}
                    <img alt="" className="pointer" onClick={this.history.bind(null, "/luckygems")} style={{ width: "50%" }} src={Cover6} />
                </div>
            </div>
        )
    }
}

export default HOME;