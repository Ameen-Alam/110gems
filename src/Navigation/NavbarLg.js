import React, { Component } from 'react';
import "./Nav.css"
import tiffanyDark from '../Images/logo.png'
import { Route, Link } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard';
// import {
    // IoSocialFacebook, IoSocialLinkedin, IoSocialTumblr, IoSocialVimeo, IoSocialWhatsapp,
    // IoSocialYoutube ,
    // IoSocialGithub, IoSocialGoogleplus, IoSocialPinterest, IoIosEmail, IoEarth, IoSocialInstagram
// } from 'react-icons/lib/io';
import { MdSearch, MdRoom, MdContentCopy } from 'react-icons/lib/md';
import { FaShoppingBasket } from 'react-icons/lib/fa'
import history from '../Routes/History'
/* images */
import JEWELRY from '../Images/JEWELRY.jpg'
import GEMSTONES from '../Images/GEMSTONES.jpg'
import ENGAGEMENT from '../Images/ENGAGEMENT.jpg'
import ENGRAVING from '../Images/ENGRAVING.jpg'
import GiftForHim from '../Images/GiftForHim.jpg'
import Aboutus from '../Images/Aboutus.jpg'
import LuckyGems from '../Images/LuckyGems.png'

import HHL8661 from '../Images/HHL8661.jpg'

var Loader = require('react-loader');



class NavbarLg extends Component {
    state = {
        fixedd: '',
        topLineHide: "",
        text: "",
        contact: false,
        isStore: false,
        error: ""
    }
    componentWillMount() {
        window.onscroll = function () { myFunction() };
        let that = this
        function myFunction() {
            if ((document.body.scrollTop > 150 || document.documentElement.scrollTop > 150)) {
                that.setState({ fixedd: 'fixed-top animated fadeInDown bg-white', topLineHide: "d-none" })
            }
            else if ((document.body.scrollTop < 150 || document.documentElement.scrollTop < 150)) {
                that.setState({ fixedd: '', topLineHide: "d-block" })
            }
            else {
                that.setState({ fixedd: '' })
            }
        }

    }
    contactHover() {
        if (this.state.isStore === false) {
            setTimeout(() => {
                this.setState({
                    isStore: true
                })
            }, 1500)
        }
    }
    search(e) {
        e.preventDefault()
    }
    submit(e) {
        e.preventDefault()
    }
    render() {
        const { text,  isStore, error } = this.state
        return (
            <div className="bg-white" >
                <div className={this.state.fixedd + "bg-white container-fluid padding-3"}>

                    {/* Navbar LG */}
                    <div style={{ borderBottom: "1px solid #222" }}>

                        {/* Top Line */}
                        <div className={this.state.topLineHide} style={{ background: "#222", height: ".7em" }} />
                        {/* Top Line */}

                        {/* Middle Row */}
                        <div className="text-center py-2 bg-white" style={{ width: '100%', overflowX: "hidden" }}>

                            {/* Search Input */}
                            <div className="float-left mr-auto search-example">
                                <input onChange={(e) => this.setState({ text: e.target.value })} value={text} className="input-same input-sm px-3 py-1 " type="text" placeholder="Search.." />
                                <button onClick={this.search.bind(this)} className="button" type="submit"><i className="fa fa-search"></i></button>
                            </div>
                            {/* Search Input */}

                            {/* LOGO */}
                            <div className="d-inline pointer"> <img onClick={() => history.push("/")} alt="" style={{ width: 130 }} src={tiffanyDark} /> </div>
                            {/* LOGO */}

                            {/* Contact Box */}
                            <div className="float-right ml-auto search-example text-right"> <span onMouseOver={() => { this.setState({ contact: true }) }}><MdRoom style={{ fontSize: 25, paddingBottom: 1, cursor: "pointer" }} /><span onClick={() => history.push("/contact")} className="bottomDecoration"> Contact</span></span>
                                {/* {contact && <div id="contact-lg" className="bg-info" style={{ position: 'absolute', top: 99, right: 49, width: 400, zIndex: 2 }} > */}
                            {/* <div className="text-right" ><span className="pointer pr-2" > <MdClose onClick={() => this.setState({ contact: false })} style={{ fontSize: 18, cursor: "pointer" }} /> </span></div>
                                    <div className="text-left px-3 pb-2" >
                                        <div className="text-center" >
                                            <IoSocialFacebook onClick={() => window.open("https://www.facebook.com/profile.php?id=100008199347637 ", "_blank")} className="footIcon facebook " />
                                            <IoSocialLinkedin onClick={() => window.open("https://www.linkedin.com/in/ameen-alam-375390134/", "_blank")} className="footIcon linkedin" />
                                            <a style={{ textDecoration: "none" }} href="mailto:ameenalam202@gmail.com"><IoIosEmail className="footIcon email" /></a>
                                            <IoSocialGithub onClick={() => window.open("https://github.com/Ameen-Alam", "_blank")} className="footIcon github" />
                                            <IoSocialTumblr onClick={() => window.open("https://twitter.com/Ameen__Alam", "_blank")} className="footIcon tumber" />
                                            <IoSocialWhatsapp data-toggle="modal" data-target="#exampleModal" className="footIcon whatsapp" />
                                            <IoSocialGoogleplus onClick={() => window.open("https://plus.google.com/u/0/116985777031909596698", "_blank")} className="footIcon googleplus" />
                                            <IoSocialInstagram onClick={() => window.open("https://www.instagram.com/ameen_alam_bootcamp/?hl=en", "_blank")} className="footIcon instagram" />
                                            <IoEarth onClick={() => window.open("http://ameenalam.blogspot.com/", "_blank")} className="footIcon earth" />
                                            <IoSocialVimeo onClick={() => window.open("https://vimeo.com/user83610317", "_blank")} className="footIcon vimeo" />
                                            <IoSocialPinterest onClick={() => window.open("https://www.pinterest.com/ameenalam202/", "_blank")} className="footIcon pinterest" /> */}
                            {/* <IoSocialYoutube onClick={() => window.open("youtube.com/ameen_alam", "_blank")} className="footIcon youtube" /> */}
                            {/* </div>
                                    </div>
                                </div>} */}
                            </div>
                            {/* Contact Box */}

                        </div>
                        {/* Middle Row */}

                        {/* Bootom Row  */}
                        <div className="text-center py-2 bg-white" style={{ width: '100%', overflowX: "hidden" }}>

                            {/* SEarch BOX */}
                            <div id="dropdownSearch" className="float-left mr-auto "><span> <span className="bottomDecoration">Search </span><MdSearch className="text-dark" onClick={() => this.setState({ display: true, backAnimation: "" })} style={{ fontSize: 25, paddingBottom: 1, cursor: "pointer" }} /></span>
                                <div className="position_absolute">
                                    <div style={{ marginTop: "2%", background: "#424242" }}>
                                        <div className="px-3 pt-3 pb-2" >
                                            <input style={{ padding: '1.5% 3.5%', width: "70%" }} className="" type="text" placeholder="Search" />
                                            <button style={{ padding: '3% 5.5%', background: "#212121", width: "25%" }} className="btn btn-dark mb-2" > Search </button>
                                            <p className="text-left text-light">  <em>
                                                Explore stores and events
                                            <br />
                                                View all stores in Pakistan
                                        </em> </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* SEarch BOX */}

                            {/* NAV */}
                            <div className="Nav d-inline">

                                <ul className="ul d-inline">
                                    {/* JEWELLERY */}
                                    <li id="dropdown1" className="li bottomDecorationLI"> <NavbarLink to="/jewelry" label="JEWELRY" />
                                        {/* <span className="" >JEWELLERY</span> */}
                                        <div className="position_absolute">
                                            {/* drop box */}
                                            <div className="drop_box pt-2">
                                                <div style={{ width: "100%", overflowX: "hidden" }} className="pb-5 bg-white" >
                                                    {/* 17% */}
                                                    <div style={{ width: "17%", verticalAlign: 'top' }} className="d-inline-block bg-white text-left pt-3 pr-3">

                                                        <ul className="pt-2" >
                                                            <span className="drop_box-h" ><strong> JEWELRY: </strong></span>
                                                            <li><span onClick={() => history.push("/jewelry/mens_rings")} className="drop_box-p">Men’s Rings</span></li>
                                                            <li><span onClick={() => history.push("/jewelry/womens_rings")} className="drop_box-p">Women’s Rings</span></li>
                                                            <li><span onClick={() => history.push("/jewelry/mens_bracelet")} className="drop_box-p">Men’s Bracelet</span></li>
                                                            <li><span onClick={() => history.push("/jewelry/womens_bracelet")} className="drop_box-p">Women’s Bracelet</span></li>
                                                            <li><span onClick={() => history.push("/jewelry/pearl_jewelry")} className="drop_box-p">Pearl Jewelry</span></li>
                                                            <li><span onClick={() => history.push("/jewelry/necklaces_pandant")} className="drop_box-p">Necklaces & Pendants </span></li>
                                                        </ul>

                                                        {/* <ul className="pt-2" >
                                                            <span className="drop_box-h" ><strong> BY CATEGORY </strong></span>
                                                            <li><span className="drop_box-p"> Necklaces & Pendants </span></li>
                                                            <li><span className="drop_box-p"> Bracelets </span></li>
                                                            <li><span className="drop_box-p"> Rings </span></li>
                                                            <li><span className="drop_box-p"> Earrings </span></li>
                                                            <li><span className="drop_box-p"> Wedding Bands </span></li>
                                                            <li><span className="drop_box-p"> 110gems Charms </span></li>
                                                            <li><span className="drop_box-p"> Pearl Jewelry </span></li>
                                                            <li><span className="drop_box-p"> Men’s Jewelry </span></li>
                                                            <li><span className="drop_box-p"> This Is 110gems</span></li>
                                                        </ul> */}

                                                    </div>
                                                    {/* 17% */}
                                                    <div style={{ width: "17%", verticalAlign: 'top' }} className="d-inline-block bg-white text-left pt-3 pr-3">
                                                        {/* <ul className="pt-2" >
                                                            <span className="drop_box-h" ><strong> BY DESIGNER </strong></span>
                                                            <li><span className="drop_box-p"> Elsa Peretti® </span></li>
                                                            <li><span className="drop_box-p"> Paloma Picasso® </span></li>
                                                            <li><span className="drop_box-p"> 110gems & Co. Schlumberger® </span></li>
                                                            <li><span className="drop_box-p"> This Is 110gems </span></li>
                                                        </ul>
                                                        <ul className="pt-2" >
                                                            <span className="drop_box-h" ><strong> BY PRICE </strong></span>
                                                            <li><span className="drop_box-p"> Jewelry $1,500 & Under </span></li>
                                                            <li><span className="drop_box-p"> Jewelry $500 & Under </span></li>
                                                            <li><span className="drop_box-p"> Jewelry $250 & Under </span></li>
                                                        </ul> */}
                                                    </div>
                                                    {/* 17% */}
                                                    {/* 66% */}
                                                    <div style={{ width: "66%" }} className="d-inline-block bg-light text-right">
                                                        <img alt="" style={{ width: '100%', height: 300 }} src={JEWELRY} />
                                                    </div>
                                                    {/* 66% */}
                                                </div>
                                            </div>
                                            {/* drop box End */}
                                        </div>
                                    </li>
                                    {/* JEWELLERY */}
                                    {/* GEMSTONES */}
                                    <li id="dropdown2" className="li bottomDecorationLI"> <NavbarLink to="/gemstones" label="GEMSTONES" />
                                        <div className="position_absolute">
                                            {/* drop box */}
                                            <div className="drop_box pt-2">
                                                <div style={{ width: "100%", overflowX: "hidden" }} className="pb-5 bg-white" >
                                                    {/* 17% */}
                                                    <div style={{ width: "17%", verticalAlign: 'top' }} className="d-inline-block bg-white text-left pt-3 pr-3">

                                                        <ul className="pt-2" >
                                                            <span className="drop_box-h" ><strong> GEMSTONES: </strong></span>
                                                            <li><span onClick={() => history.push("/gemstones/preciousgems")} className="drop_box-p">Precious Gemstiones</span></li>
                                                            <li><span onClick={() => history.push("/gemstones/semipreciousgems")} className="drop_box-p">Semi Precious Gemstones</span></li>
                                                        </ul>

                                                        {/* <ul className="pt-2" >
                                                            <span className="drop_box-h" ><strong> BY CATEGORY </strong></span>
                                                            <li><span className="drop_box-p"> Necklaces & Pendants </span></li>
                                                            <li><span className="drop_box-p"> Bracelets </span></li>
                                                            <li><span className="drop_box-p"> Rings </span></li>
                                                            <li><span className="drop_box-p"> Earrings </span></li>
                                                            <li><span className="drop_box-p"> Wedding Bands </span></li>
                                                            <li><span className="drop_box-p"> 110gems Charms </span></li>
                                                            <li><span className="drop_box-p"> Pearl Jewelry </span></li>
                                                            <li><span className="drop_box-p"> Men’s Jewelry </span></li>
                                                            <li><span className="drop_box-p"> This Is 110gems</span></li>
                                                        </ul> */}

                                                    </div>
                                                    {/* 17% */}
                                                    <div style={{ width: "17%", verticalAlign: 'top' }} className="d-inline-block bg-white text-left pt-3 pr-3">
                                                        {/* <ul className="pt-2" >
                                                            <span className="drop_box-h" ><strong> BY DESIGNER </strong></span>
                                                            <li><span className="drop_box-p"> Elsa Peretti® </span></li>
                                                            <li><span className="drop_box-p"> Paloma Picasso® </span></li>
                                                            <li><span className="drop_box-p"> 110gems & Co. Schlumberger® </span></li>
                                                            <li><span className="drop_box-p"> This Is 110gems </span></li>
                                                        </ul>
                                                        <ul className="pt-2" >
                                                            <span className="drop_box-h" ><strong> BY PRICE </strong></span>
                                                            <li><span className="drop_box-p"> Jewelry $1,500 & Under </span></li>
                                                            <li><span className="drop_box-p"> Jewelry $500 & Under </span></li>
                                                            <li><span className="drop_box-p"> Jewelry $250 & Under </span></li>
                                                        </ul> */}
                                                    </div>
                                                    {/* 17% */}
                                                    {/* 66% */}
                                                    <div style={{ width: "66%" }} className="d-inline-block bg-light text-right">
                                                        <img alt="" style={{ width: '100%', height: 300 }} src={GEMSTONES} />
                                                    </div>
                                                    {/* 66% */}
                                                </div>
                                            </div>
                                            {/* drop box End */}
                                        </div>
                                    </li>
                                    {/* GEMSTONES */}
                                    {/* ENGAGEMENT */}
                                    <li id="dropdown3" className="li bottomDecorationLI"><NavbarLink to="/engagement" label="ENGAGEMENT" />
                                        <div className="position_absolute">
                                            {/* drop box */}
                                            <div className="drop_box pt-2">
                                                <div style={{ width: "100%", overflowX: "hidden" }} className="pb-5 bg-white" >
                                                    {/* 17% */}
                                                    <div style={{ width: "17%", verticalAlign: 'top' }} className="d-inline-block bg-white text-left pt-3 pr-3">

                                                        <ul className="pt-2" >
                                                            <span className="drop_box-h" ><strong>ENGAGEMENT RINGS: </strong></span>
                                                            <li><span onClick={() => history.push("/engagement/mens_engagement_rings")} className="drop_box-p">Men’s Engagement Rings</span></li>
                                                            <li><span onClick={() => history.push("/engagement/womens_engagement_rings")} className="drop_box-p">Women’s Engagement Rings</span></li>
                                                            <li><span onClick={() => history.push("/engagement/engagement_gifts_for_him")} className="drop_box-p">Engagment gifts for him</span></li>
                                                            <li><span onClick={() => history.push("/engagement/engagement_gifts_for_her")} className="drop_box-p">Engagement Rings for her</span></li>
                                                        </ul>

                                                        {/* <ul className="pt-2" >
                                                            <span className="drop_box-h" ><strong> BY CATEGORY </strong></span>
                                                            <li><span className="drop_box-p"> Necklaces & Pendants </span></li>
                                                            <li><span className="drop_box-p"> Bracelets </span></li>
                                                            <li><span className="drop_box-p"> Rings </span></li>
                                                            <li><span className="drop_box-p"> Earrings </span></li>
                                                            <li><span className="drop_box-p"> Wedding Bands </span></li>
                                                            <li><span className="drop_box-p"> 110gems Charms </span></li>
                                                            <li><span className="drop_box-p"> Pearl Jewelry </span></li>
                                                            <li><span className="drop_box-p"> Men’s Jewelry </span></li>
                                                            <li><span className="drop_box-p"> This Is 110gems</span></li>
                                                        </ul> */}

                                                    </div>
                                                    {/* 17% */}
                                                    <div style={{ width: "17%", verticalAlign: 'top' }} className="d-inline-block bg-white text-left pt-3 pr-3">
                                                        {/* <ul className="pt-2" >
                                                            <span className="drop_box-h" ><strong> BY DESIGNER </strong></span>
                                                            <li><span className="drop_box-p"> Elsa Peretti® </span></li>
                                                            <li><span className="drop_box-p"> Paloma Picasso® </span></li>
                                                            <li><span className="drop_box-p"> 110gems & Co. Schlumberger® </span></li>
                                                            <li><span className="drop_box-p"> This Is 110gems </span></li>
                                                        </ul>
                                                        <ul className="pt-2" >
                                                            <span className="drop_box-h" ><strong> BY PRICE </strong></span>
                                                            <li><span className="drop_box-p"> Jewelry $1,500 & Under </span></li>
                                                            <li><span className="drop_box-p"> Jewelry $500 & Under </span></li>
                                                            <li><span className="drop_box-p"> Jewelry $250 & Under </span></li>
                                                        </ul> */}
                                                    </div>
                                                    {/* 17% */}
                                                    {/* 66% */}
                                                    <div style={{ width: "66%" }} className="d-inline-block bg-light text-right">
                                                        <img alt="" style={{ width: '100%', height: 300 }} src={ENGAGEMENT} />
                                                    </div>
                                                    {/* 66% */}
                                                </div>
                                            </div>
                                            {/* drop box End */}
                                        </div>
                                    </li>
                                    {/* ENGAGEMENT */}
                                    {/* ENGRAVING art */}
                                    <li id="dropdown4" className="li bottomDecorationLI"> <NavbarLink to="/engraving" label="ENGRAVING ART" />
                                        <div className="position_absolute">
                                            {/* drop box */}
                                            <div className="drop_box pt-2">
                                                <div style={{ width: "100%", overflowX: "hidden" }} className="pb-5 bg-white" >
                                                    {/* 17% */}
                                                    <div style={{ width: "17%", verticalAlign: 'top' }} className="d-inline-block bg-white text-left pt-3 pr-3">

                                                        <ul className="pt-2" >
                                                            <span className="drop_box-h" ><strong> ENGRAVING ART: </strong></span>
                                                            <li><span onClick={() => history.push("/engraving/about_engraving_art")} className="drop_box-p">What is so special about engraving art</span></li>
                                                            <li><span onClick={() => history.push("/engraving/art_gallery")} className="drop_box-p">Art Gallery</span></li>
                                                        </ul>

                                                        {/* <ul className="pt-2" >
                                                            <span className="drop_box-h" ><strong> BY CATEGORY </strong></span>
                                                            <li><span className="drop_box-p"> Necklaces & Pendants </span></li>
                                                            <li><span className="drop_box-p"> Bracelets </span></li>
                                                            <li><span className="drop_box-p"> Rings </span></li>
                                                            <li><span className="drop_box-p"> Earrings </span></li>
                                                            <li><span className="drop_box-p"> Wedding Bands </span></li>
                                                            <li><span className="drop_box-p"> 110gems Charms </span></li>
                                                            <li><span className="drop_box-p"> Pearl Jewelry </span></li>
                                                            <li><span className="drop_box-p"> Men’s Jewelry </span></li>
                                                            <li><span className="drop_box-p"> This Is 110gems</span></li>
                                                        </ul> */}

                                                    </div>
                                                    {/* 17% */}
                                                    <div style={{ width: "17%", verticalAlign: 'top' }} className="d-inline-block bg-white text-left pt-3 pr-3">
                                                        {/* <ul className="pt-2" >
                                                            <span className="drop_box-h" ><strong> BY COLLECTION </strong></span>
                                                            <li><span className="drop_box-p">110gems HardWear</span></li>
                                                            <li><span className="drop_box-p">110gems T</span></li>
                                                            <li><span className="drop_box-p">Return to 110gems®</span></li>
                                                            <li><span className="drop_box-p">110gems 1837®</span></li>
                                                            <li><span className="drop_box-p">110gems Infinity</span></li>
                                                            <li><span className="drop_box-p">110gems Victoria®</span></li>
                                                            <li><span className="drop_box-p">110gems Celebration® Rings</span></li>
                                                            <li><span className="drop_box-p">The Atlas® Collection</span></li>
                                                            <li><span className="drop_box-p">110gems Keys</span></li>
                                                            <li><span className="drop_box-p">110gems Soleste®</span></li>
                                                            <li><span className="drop_box-p">110gems Yellow Diamonds</span></li>
                                                            <li><span className="drop_box-p">110gems Metro</span></li>
                                                            <li><span className="drop_box-p">110gems Bow</span></li>
                                                            <li><span className="drop_box-p">Out of Retirement®</span></li>
                                                        </ul> */}
                                                    </div>
                                                    {/* 17% */}
                                                    {/* 17% */}
                                                    <div style={{ width: "17%", verticalAlign: 'top' }} className="d-inline-block bg-white text-left pt-3 pr-3">
                                                        {/* <ul className="pt-2" >
                                                            <span className="drop_box-h" ><strong> BY DESIGNER </strong></span>
                                                            <li><span className="drop_box-p"> Elsa Peretti® </span></li>
                                                            <li><span className="drop_box-p"> Paloma Picasso® </span></li>
                                                            <li><span className="drop_box-p"> 110gems & Co. Schlumberger® </span></li>
                                                            <li><span className="drop_box-p"> This Is 110gems </span></li>
                                                        </ul>
                                                        <ul className="pt-2" >
                                                            <span className="drop_box-h" ><strong> BY PRICE </strong></span>
                                                            <li><span className="drop_box-p"> Jewelry $1,500 & Under </span></li>
                                                            <li><span className="drop_box-p"> Jewelry $500 & Under </span></li>
                                                            <li><span className="drop_box-p"> Jewelry $250 & Under </span></li>
                                                        </ul> */}
                                                    </div>
                                                    {/* 17% */}
                                                    {/* 66% */}
                                                    <div style={{ width: "49%" }} className="d-inline-block bg-light text-right">
                                                        <img alt="" style={{ width: '100%', height: 300 }} src={ENGRAVING} />
                                                    </div>
                                                    {/* 66% */}
                                                </div>
                                            </div>
                                            {/* drop box End */}
                                        </div>
                                    </li>
                                    {/* ENGRAVING art */}
                                    {/* GIFTS*/}
                                    <li id="dropdown5" className="li bottomDecorationLI"><NavbarLink to="/gift" label="GIFTS" />
                                        <div className="position_absolute">
                                            {/* drop box */}
                                            <div className="drop_box pt-2">
                                                <div style={{ width: "100%", overflowX: "hidden" }} className="pb-5 bg-white" >
                                                    {/* 17% */}
                                                    <div style={{ width: "17%", verticalAlign: 'top' }} className="d-inline-block bg-white text-left pt-3 pr-3">

                                                        <ul className="pt-2" >
                                                            <span className="drop_box-h" ><strong> GIFTS: </strong></span>
                                                            <li><span onClick={() => history.push("/gift/gift_for_him")} className="drop_box-p">Gift for him</span></li>
                                                            <li><span onClick={() => history.push("/gift/gift_for_her")} className="drop_box-p">Gift for her</span></li>
                                                            <li><span onClick={() => history.push("/gift/wedding_gifts")} className="drop_box-p">Wedding gifts</span></li>
                                                        </ul>

                                                        {/* <ul className="pt-2" >
                                                            <span className="drop_box-h" ><strong> BY CATEGORY </strong></span>
                                                            <li><span className="drop_box-p"> Necklaces & Pendants </span></li>
                                                            <li><span className="drop_box-p"> Bracelets </span></li>
                                                            <li><span className="drop_box-p"> Rings </span></li>
                                                            <li><span className="drop_box-p"> Earrings </span></li>
                                                            <li><span className="drop_box-p"> Wedding Bands </span></li>
                                                            <li><span className="drop_box-p"> 110gems Charms </span></li>
                                                            <li><span className="drop_box-p"> Pearl Jewelry </span></li>
                                                            <li><span className="drop_box-p"> Men’s Jewelry </span></li>
                                                            <li><span className="drop_box-p"> This Is 110gems</span></li>
                                                        </ul> */}

                                                    </div>
                                                    {/* 17% */}
                                                    <div style={{ width: "17%", verticalAlign: 'top' }} className="d-inline-block bg-white text-left pt-3 pr-3">
                                                        {/* <ul className="pt-2" >
                                                            <span className="drop_box-h" ><strong> BY DESIGNER </strong></span>
                                                            <li><span className="drop_box-p"> Elsa Peretti® </span></li>
                                                            <li><span className="drop_box-p"> Paloma Picasso® </span></li>
                                                            <li><span className="drop_box-p"> 110gems & Co. Schlumberger® </span></li>
                                                            <li><span className="drop_box-p"> This Is 110gems </span></li>
                                                        </ul>
                                                        <ul className="pt-2" >
                                                            <span className="drop_box-h" ><strong> BY PRICE </strong></span>
                                                            <li><span className="drop_box-p"> Jewelry $1,500 & Under </span></li>
                                                            <li><span className="drop_box-p"> Jewelry $500 & Under </span></li>
                                                            <li><span className="drop_box-p"> Jewelry $250 & Under </span></li>
                                                        </ul> */}
                                                    </div>
                                                    {/* 17% */}
                                                    {/* 66% */}
                                                    <div style={{ width: "66%" }} className="d-inline-block bg-light text-right">
                                                        <img alt="" style={{ width: '100%', height: 300 }} src={GiftForHim} />
                                                    </div>
                                                    {/* 66% */}
                                                </div>
                                            </div>
                                            {/* drop box End */}
                                        </div>
                                    </li>
                                    {/* GIFTS*/}
                                    {/* ABOUT US*/}
                                    <li id="dropdown6" className="li bottomDecorationLI"><NavbarLink to="/about" label="ABOUT US" />
                                        <div className="position_absolute">
                                            {/* drop box */}
                                            <div className="drop_box pt-0">
                                                <div style={{ width: "100%", overflowX: "hidden" }} className="pb-3 bg-white" >
                                                    {/* 17% */}
                                                    <div style={{ width: "100%", verticalAlign: 'top' }} className="d-inline-block bg-white text-left pt-3 pr-3">
                                                        {/* 17% */}
                                                        <div style={{ width: "17%", verticalAlign: 'top' }} className="d-inline-block bg-white text-left pt-3 pr-3">

                                                            <ul className="pt-2" >
                                                                <span className="drop_box-h" ><strong> ABOUT: </strong></span>
                                                                <li><a href="#aboutUs"><span onClick={() => history.push("/about")} className="drop_box-p text-dark">About us</span></a></li>
                                                                <li><a href="#whyUs"><span onClick={() => history.push("/about")} className="drop_box-p text-dark">Why us</span></a></li>
                                                                <li><span onClick={() => history.push("/about")} className="drop_box-p ">Cash on Delivery System</span></li>
                                                                <li><a href="#goals"> <span onClick={() => history.push("/about")} className="drop_box-p text-dark">Our Goals</span></a></li>
                                                                <li><span onClick={() => history.push("/about")} className="drop_box-p">Privacy and policies</span></li>
                                                            </ul>


                                                        </div>
                                                        {/* 17% */}
                                                        <div style={{ width: "17%", verticalAlign: 'top' }} className="d-inline-block bg-white text-left pt-3 pr-3">

                                                        </div>
                                                        {/* 17% */}
                                                        {/* 66% */}
                                                        <div style={{ width: "66%" }} className="d-inline-block bg-light text-right">
                                                            <img alt="" style={{ width: '100%', height: 300 }} src={Aboutus} />
                                                        </div>

                                                    </div>

                                                    {/* 66% */}
                                                    {/* <div style={{ width: "0%" }} className="d-inline-block bg-light text-right">
                                                        <img alt="" style={{ width: '100%', height: 200 }} src="data:image/jpeg;base64,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" />
                                                    </div> */}
                                                    {/* 66% */}
                                                </div>
                                            </div>
                                            {/* drop box End */}
                                        </div>
                                    </li>

                                    {/* ABOUT US*/}
                                    {/* FIND YOUR LUCKY GEMSTONES*/}
                                    <li id="dropdown7" className="li bottomDecorationLI"><NavbarLink to="/luckygems" label="FIND YOUR LUCKY GEMSTONES" />
                                        <div className="position_absolute">
                                            {/* drop box */}
                                            <div className="drop_box pt-2">
                                                <div style={{ width: "100%", overflowX: "hidden" }} className="pb-3 bg-white" >
                                                    {/* 17% */}
                                                    <div style={{ width: "60%", verticalAlign: 'top' }} className="d-inline-block bg-white text-left pt-3 pr-3">
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

                                                    {/* 66% */}
                                                    <div style={{ width: "40%" }} className="d-inline-block bg-light text-right">
                                                        <img alt="" style={{ width: '100%', height: 300 }} src={LuckyGems} />
                                                    </div>
                                                    {/* 66% */}
                                                </div>
                                            </div>
                                            {/* drop box End */}
                                        </div>
                                    </li>
                                    {/* FIND YOUR LUCKY GEMSTONES*/}
                                </ul>

                            </div>
                            {/* NAV */}

                            {/* Store */}
                            <div id="dropdownStore" className="float-right ml-auto "><span onMouseOver={this.contactHover.bind(this)} ><FaShoppingBasket style={{ fontSize: 25, paddingBottom: 1, cursor: "pointer" }} /> <span onClick={() => history.push("/store")} className="bottomDecoration"> Shopping</span> </span>
                                <div className="position_absolute">
                                    {isStore ? <div style={{ marginTop: 8 }} className="bg-white text-right scrollbar-1 scrollbar-light">
                                        <div className="p-3 d-inline-block text-right w-25">
                                            <div style={{ borderBottom: "1px solid #222" }} >SHOPPING BAG</div>
                                            <img alt="" className="pt-2" style={{ width: "100%", height: 200 }} src={HHL8661} />
                                        </div>
                                        <div className="p-3 d-inline-block text-right w-25">
                                            <div style={{ borderBottom: "1px solid #222" }} >SHOPPING BAG</div>
                                            <img alt="" className="pt-2" style={{ width: "100%", height: 200 }} src={HHL8661} />
                                        </div>
                                        <div className="p-3 d-inline-block text-right w-25">
                                            <div style={{ borderBottom: "1px solid #222" }} >SHOPPING BAG</div>
                                            <img alt="" className="pt-2" style={{ width: "100%", height: 200 }} src={HHL8661} />
                                        </div>
                                        <div className="p-3 d-inline-block text-right w-25">
                                            <div style={{ borderBottom: "1px solid #222" }} >SHOPPING BAG</div>
                                            <img alt="" className="pt-2" style={{ width: "100%", height: 200 }} src={HHL8661} />
                                        </div>
                                        <div className="p-3 d-inline-block text-right w-25">
                                            <div style={{ borderBottom: "1px solid #222" }} >SHOPPING BAG</div>
                                            <img alt="" className="pt-2" style={{ width: "100%", height: 200 }} src={HHL8661} />
                                        </div>
                                        <div className="p-3 d-inline-block text-right w-25">
                                            <div style={{ borderBottom: "1px solid #222" }} >SHOPPING BAG</div>
                                            <img alt="" className="pt-2" style={{ width: "100%", height: 200 }} src={HHL8661} />
                                        </div>
                                        <div className="p-3 d-inline-block text-right w-25">
                                            <div style={{ borderBottom: "1px solid #222" }} >SHOPPING BAG</div>
                                            <img alt="" className="pt-2" style={{ width: "100%", height: 200 }} src={HHL8661} />
                                        </div>
                                        <div className="p-3 d-inline-block text-right w-25">
                                            <div style={{ borderBottom: "1px solid #222" }} >SHOPPING BAG</div>
                                            <img alt="" className="pt-2" style={{ width: "100%", height: 200 }} src={HHL8661} />
                                        </div>
                                        <div className="p-3 d-inline-block text-right w-25">
                                            <div style={{ borderBottom: "1px solid #222" }} >SHOPPING BAG</div>
                                            <img alt="" className="pt-2" style={{ width: "100%", height: 200 }} src={HHL8661} />
                                        </div>
                                    </div>
                                        :
                                        <div style={{ marginTop: 8, height: 250 }} className="bg-white text-center" >
                                            <div style={{ paddingTop: 100 }} >
                                                <Loader loaded={this.state.contact}>
                                                    Loading...
                                            </Loader>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                            {/* Store */}

                        </div>
                        {/* Bottom Row */}

                    </div>
                    {/* Navbar LG */}
                </div>
                {/* popup */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body text-dark font-weight-bold">
                                +92 304 386 6719
                            </div>
                            <div className="modal-footer">
                                {/* <button type="button" className="btn btn-dark" data-dismiss="modal">Close</button> */}
                                <CopyToClipboard text={this.state.value}
                                    onCopy={() => this.setState({ copied: true })}
                                >
                                    {this.state.copied ? <span style={{ color: 'red' }}>Copied.</span> : <button style={{ cursor: "pointer" }} className="px-4 py-2 bg-white text-dark"><MdContentCopy /></button>}
                                </CopyToClipboard>
                            </div>
                        </div>
                    </div>
                </div>
                {/* popup */}
            </div>
        )
    }
}

const NavbarLink = ({ label, to, activeOnlyWhenExact }) => (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
        <span className={match ? 'active' : ''}>
            <Link className="LI_SPAN text-dark px-1 py-1" to={to}>{label}</Link>
        </span>
    )} />
)




export default NavbarLg;
