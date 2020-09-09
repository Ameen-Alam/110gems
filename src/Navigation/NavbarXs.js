import React, { Component } from 'react';
import "./Nav.css";
import { Route, Link } from 'react-router-dom';
import history from '../Routes/History';
import {
    MdKeyboardArrowLeft, MdViewHeadline, MdClose, MdSearch, MdRoom
} from 'react-icons/lib/md';
import { FaShoppingBasket } from 'react-icons/lib/fa'
import tiffanyLight from '../Images/logo2.png'
import tiffanyDark from '../Images/logo.png'


class NavbarXs extends Component {
    constructor(props) {
        super(props)
        this.backButton = this.backButton.bind(this)
        this.PageSlider = this.PageSlider.bind(this)
        this.historyPush = this.historyPush.bind(this)
        this.state = {
            isMainView: true, isFirstView: false, isSecondView: false, isThirdView: false, isFourView: false, isFiveView: false, isSixView: false, isSevenView: false,
            fixedd: '',
            topLineHide: "",
            display: false,
            text: "",
            backAnimation: "",
            error: ""
        }
    }
    componentWillMount() {
        window.onscroll = function () { myFunction() };
        let that = this
        function myFunction() {
            if ((document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)) {
                that.setState({ fixedd: 'fixed-top animated fadeInDown', topLineHide: "d-none" })
            }
            else if ((document.body.scrollTop < 150 || document.documentElement.scrollTop < 150)) {
                that.setState({ fixedd: '', topLineHide: "d-block" })
            }
            else {
                that.setState({ fixedd: '' })
            }
        }
    }
    PageSlider(property, e) {
        this.setState({
            [property]: true,
            isMainView: false
        })
    }
    backButton(property, e) {
        this.setState({
            [property]: false,
            isMainView: true,
            backAnimation: "fadeInLeft "
        })
    }
    historyPush(property, e) {
        history.push(property)
        this.setState({
            display: false
        })
    }
    submit() {

    }
    render() {
        const { display, fixedd, text, backAnimation, error,
            isMainView, isFirstView, isSecondView, isThirdView, isFourView, isFiveView, isSixView, isSevenView,
        } = this.state
        return (
            <div style={{ width: "100%", overflowX: 'hidden', zIndex: 2 }} >
                {!display ?
                    <div style={{ zIndex: 2 }} className={fixedd + " bg-light"} >
                        <div className={this.state.topLineHide} style={{ background: "#222", height: ".5em" }} />{/* Top Line */}
                        <div className="text-center py-2" style={{ width: '100%', overflowX: "hidden", borderBottom: "1px solid #222" }}>
                            <div onClick={() => this.setState({ display: true, backAnimation: "" })} className="float-left mr-auto pl-2"> <MdViewHeadline className="animated rotateInDownRight" style={{ fontSize: 28, paddingBottom: 3, cursor: "pointer" }} /> </div>
                            <div className="float-left mr-auto pl-3"> <a href="#serachTrue"> <MdSearch className="text-dark" onClick={() => this.setState({ display: true, backAnimation: "" })} style={{ fontSize: 25, paddingBottom: 1, cursor: "pointer" }} /></a> </div>
                            <div className="d-inline"> <img alt="" onClick={() => history.push("/")} style={{ width: 130 }} src={tiffanyDark} /> </div>
                            <div onClick={this.historyPush.bind(null, "store")} className="float-right ml-auto pr-2"> <FaShoppingBasket style={{ fontSize: 25, paddingBottom: 1, cursor: "pointer" }} /> </div>
                            <div onClick={this.historyPush.bind(null, "contact")} className="float-right ml-auto pr-3"> <MdRoom style={{ fontSize: 25, paddingBottom: 1, cursor: "pointer" }} /> </div>
                        </div>

                    </div> // First Bar 
                    :
                    <div style={{ position: 'fixed', width: '100%', zIndex: 2, paddingBottom: "20%" }} className="bg-black scrollbar scrollbar-primary" >
                        <div className={this.state.topLineHide} style={{ background: "#222", height: ".5em" }} />{/* Top Line */}
                        <div className="text-center py-2" style={{ width: '100%', overflowX: "hidden", borderBottom: "1px solid #222" }}>
                            <div onClick={() => this.setState({ display: false })} className="float-left mr-auto pl-2">  <MdClose className="animated rotateInDownLeft" style={{ fontSize: 28, paddingBottom: 3, cursor: "pointer" }} /> </div>
                            <div className="d-inline"> <img alt="" onClick={() => history.push("/")} style={{ width: 130 }} src={tiffanyLight} /> </div>
                            <div className="float-right ml-auto pr-2 black-text "> {"||"}</div>
                        </div>
                        <div style={{ padding: '0px 15%' }} className="text-center" >
                            <div>
                                <input id="serachTrue" className="my-2 px-3 py-1 mx-auto w-100" value={text} onChange={(e) => this.setState({ text: e.target.value })} />
                                <span style={{ position: 'absolute', right: '15%' }} className=""><div style={{ background: "#fff", marginTop: '7.3px', padding: '3px 7px 1px 11px', cursor: "pointer" }} ><i style={{ fontSize: '160%' }} className="text-dark fa fa-search" aria-hidden="true"></i></div> </span>
                            </div>

                            {/* MAin */}
                            {isMainView && <div className={backAnimation + " xs-ul my-3 mb-5 text-left animated"}>
                                <div onClick={this.PageSlider.bind(null, 'isFirstView')} className="xs-li"> JEWELLERY </div>
                                <div onClick={this.PageSlider.bind(null, 'isSecondView')} className="xs-li"> GEMSTONES </div>
                                <div onClick={this.PageSlider.bind(null, 'isThirdView')} className="xs-li"> ENGAGEMENT </div>
                                <div onClick={this.PageSlider.bind(null, 'isFourView')} className="xs-li"> ENGRAVING art </div>
                                <div onClick={this.PageSlider.bind(null, 'isFiveView')} className="xs-li"> GIFTS </div>
                                <div onClick={this.PageSlider.bind(null, 'isSixView')} className="xs-li"> ABOUT US </div>
                                <div onClick={this.PageSlider.bind(null, 'isSevenView')} className="xs-li"> FIND YOUR LUCKY GEMSTONES </div>
                            </div>}
                            {/* Main */}

                            {/* First */}
                            {isFirstView && <div className="xs-ul my-3 text-left animated fadeInRight" >
                                <div className="xs-back-btn" onClick={this.backButton.bind(null, 'isFirstView')}><MdKeyboardArrowLeft style={{ fontSize: 24, paddingBottom: 4 }} /> Back </div>
                                <MenuLink onClick={() => { this.setState({ display: false }) }} to="/jewelry" label="Jewellery" />
                                <div className="pl-5 pt-2 xs-div" >
                                    <div onClick={this.historyPush.bind(null, '/jewelry/mens_rings')} className="py-1 xs-span"> Men’s Rings </div>
                                    <div onClick={this.historyPush.bind(null, '/jewelry/womens_rings')} className="py-1 xs-span"> Women’s Rings </div>
                                    <div onClick={this.historyPush.bind(null, '/jewelry/mens_bracelet')} className="py-1 xs-span"> Men’s Bracelet </div>
                                    <div onClick={this.historyPush.bind(null, '/jewelry/womens_bracelet')} className="py-1 xs-span"> Women’s Bracelet </div>
                                    <div onClick={this.historyPush.bind(null, '/jewelry/pearl_jewelry')} className="py-1 xs-span"> Pearl Jewelry </div>
                                    <div onClick={this.historyPush.bind(null, '/jewelry/necklaces_pandant')} className="py-1 xs-span"> Necklaces & Pendants </div>
                                </div>
                            </div>}
                            {/* First */}
                            {/* Second */}
                            {isSecondView && <div className="xs-ul my-3 text-left  animated fadeInRight" >
                                <div className="xs-back-btn" onClick={this.backButton.bind(null, 'isSecondView')}><MdKeyboardArrowLeft style={{ fontSize: 24, paddingBottom: 4 }} /> Back </div>
                                <MenuLink onClick={() => { this.setState({ display: false }) }} to="/gemstones" label="Gemstones" />
                                <div className="pl-5 pt-2 xs-div" >
                                    <div onClick={this.historyPush.bind(null, '/gemstones/preciousgems')} className="py-1 xs-span" > Precious Gemstiones </div>
                                    <div onClick={this.historyPush.bind(null, '/gemstones/semipreciousgems')} className="py-1 xs-span" > Semi Precious Gemstones </div>
                                </div>
                            </div>}
                            {/* Second */}
                            {/* Third */}
                            {isThirdView && <div className="xs-ul my-3 text-left  animated fadeInRight" >
                                <div className="xs-back-btn" onClick={this.backButton.bind(null, "isThirdView")}><MdKeyboardArrowLeft style={{ fontSize: 24, paddingBottom: 4 }} /> Back </div>
                                <MenuLink onClick={() => { this.setState({ display: false }) }} to="/engagement" label="Engagement" />
                                <div className="pl-5 pt-2 xs-div" >
                                    <div onClick={this.historyPush.bind(null, '/engagement/mens_engagement_rings')} className="py-1 xs-span"> Men’s Engagement Rings </div>
                                    <div onClick={this.historyPush.bind(null, '/engagement/womens_engagement_rings')} className="py-1 xs-span"> Women’s Engagement Rings </div>
                                    <div onClick={this.historyPush.bind(null, '/engagement/engagement_gifts_for_him')} className="py-1 xs-span"> Engagment gifts for him </div>
                                    <div onClick={this.historyPush.bind(null, '/engagement/engagement_gifts_for_her')} className="py-1 xs-span"> Engagement Rings for her </div>
                                </div>
                            </div>}
                            {/* Third */}
                            {/* Four */}
                            {isFourView && <div className="xs-ul my-3 text-left  animated fadeInRight" >
                                <div className="xs-back-btn" onClick={this.backButton.bind(null, 'isFourView')}><MdKeyboardArrowLeft style={{ fontSize: 24, paddingBottom: 4 }} /> Back </div>
                                <MenuLink onClick={() => { this.setState({ display: false }) }} to="/engraving" label="Engraving" />
                                <div className="pl-5 pt-2 xs-div" >
                                    <div onClick={this.historyPush.bind(null, '/engraving/about_engraving_art')} className="py-1 xs-span"> What is so special about engraving art </div>
                                    <div onClick={this.historyPush.bind(null, '/engraving/art_gallery')} className="py-1 xs-span"> Art Gallery </div>
                                </div>
                            </div>}
                            {/* Four */}
                            {/* Five */}
                            {isFiveView && <div className="xs-ul my-3 text-left  animated fadeInRight" >
                                <div className="xs-back-btn" onClick={this.backButton.bind(null, "isFiveView")} ><MdKeyboardArrowLeft style={{ fontSize: 24, paddingBottom: 4 }} /> Back </div>
                                <MenuLink onClick={() => { this.setState({ display: false }) }} to="/gift" label="GIFTS" />
                                <div className="pl-5 pt-2 xs-div" >
                                    <div onClick={this.historyPush.bind(null, '/gift/gift_for_him')} className="py-1 xs-span"> Gift for him </div>
                                    <div onClick={this.historyPush.bind(null, '/gift/gift_for_her')} className="py-1 xs-span"> Gift for her </div>
                                    <div onClick={this.historyPush.bind(null, '/gift/wedding_gifts')} className="py-1 xs-span"> Wedding gifts </div>
                                </div>
                            </div>}
                            {/* Five */}
                            {/* Six */}
                            {isSixView && <div className="xs-ul my-3 text-left  animated fadeInRight" >
                                <div className="xs-back-btn" onClick={this.backButton.bind(null, "isSixView")} ><MdKeyboardArrowLeft style={{ fontSize: 24, paddingBottom: 4 }} /> Back </div>
                                <MenuLink onClick={() => { this.setState({ display: false }) }} to="/about" label="About" />
                                <div className="pl-5 pt-2 xs-div" >
                                    <div onClick={this.historyPush.bind(null, '/about')} className="py-1 xs-span"> <a href="#aboutUs"><span className="text-light" >About us</span></a> </div>
                                    <div onClick={this.historyPush.bind(null, '/about')} className="py-1 xs-span"> <a href="#whyUs"><span className="text-light" >Why us</span></a> </div>
                                    <div onClick={this.historyPush.bind(null, '/about')} className="py-1 xs-span"> <span>Cash on Delivery System</span> </div>
                                    <div onClick={this.historyPush.bind(null, '/about')} className="py-1 xs-span"> <a href="#goals"><span className="text-light" >Our Goals </span></a></div>
                                    <div onClick={this.historyPush.bind(null, '/about')} className="py-1 xs-span"> <span>Privacy and policies</span> </div>
                                </div>
                            </div>}
                            {/* Six */}
                            {/* Seven */}
                            {isSevenView && <div className="xs-ul my-3 text-left mb-5  animated fadeInRight" >
                                <div className="xs-back-btn" onClick={this.backButton.bind(null, "isSevenView")} ><MdKeyboardArrowLeft style={{ fontSize: 24, paddingBottom: 4 }} /> Back </div>
                                <MenuLink onClick={() => { this.setState({ display: false }) }} to="/luckygems" label="Luckygems" />
                                <div className="px-sm-2 px-md-2 pt-2 xs-div pb-5" >
                                    <div onClick={() => history.push("/luckygems")} className="drop_box-h text-muted"> Find your lucky gemstones </div>
                                    <div>
                                        {/*  */}
                                        {/* <!-- Extended default form grid --> */}
                                        <form action="#" onSubmit={this.submit.bind(this)} >
                                            {/* <!-- Grid row --> */}
                                            <div className="form-row">
                                                {/* <!-- Default input --> */}
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="full-name">Full Name</label>
                                                    <input type="text" className="form-control" id="full-name" placeholder="Full Name" />
                                                </div>
                                                {/* <!-- Default input --> */}
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="mName">Mother's Name</label>
                                                    <input type="text" className="form-control" id="mName" placeholder="Mother's Name" />
                                                </div>
                                            </div>
                                            {/* <!-- Grid row --> */}
                                            <div className="form-row">
                                                {/* <!-- Default input --> */}
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="email">Email</label>
                                                    <input type="email" className="form-control" id="email" placeholder="Email" />
                                                </div>
                                                {/* <!-- Default input --> */}
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="whatsApp">Whats App</label>
                                                    <input type="number" className="form-control" id="whatsApp" placeholder="+92333-0000000" />
                                                </div>
                                            </div>
                                            <div className="text-danger"> {error} </div>
                                            <div className="form-row">
                                                {/* <!-- Default input --> */}
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="DOB">Date of Birth</label>
                                                    <input type="date" className="form-control" id="DOB" />
                                                </div>
                                                {/* <!-- Default input --> */}
                                                <div className="form-group col-md-6">
                                                    <button style={{ marginTop: 32 }} type="submit" className=" btn btn-primary btn-md px-5 font-weight-bold"> Submit </button>
                                                </div>
                                            </div>
                                            {/* <!-- Grid row --> */}

                                        </form>
                                        {/* <!-- Extended default form grid --> */}
                                        {/*  */}
                                    </div>
                                </div>
                            </div>}
                            {/* Seven */}

                        </div>

                    </div> // Second Bar

                }

            </div>
        )
    }
}
const MenuLink = ({ label, to, activeOnlyWhenExact }) => (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
        <div className={match ? 'active xs-li' : ' xs-li'}>
            <Link className="text-white" to={to}>{label}</Link>
        </div>
    )} />
)

export default NavbarXs;