import React, { Component } from 'react';
import "../Navigation/Nav.css";
import history from '../Routes/History'
import {
    IoSocialFacebook, IoSocialLinkedin, IoSocialTumblr, IoSocialVimeo, IoSocialWhatsapp,
    // IoSocialYoutube ,
    IoSocialGithub, IoSocialGoogleplus, IoSocialPinterest, IoIosEmail, IoEarth, IoSocialInstagram
} from 'react-icons/lib/io';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { MdContentCopy } from 'react-icons/lib/md';


class Fotter extends Component {
    constructor(props) {
        super(props)
        this.history = this.history.bind(this)
        this.state = {
            value: ""
        }
    }
    history(property) {
        history.push(property)
    }
    render() {
        return (
            <div className="container-fluid padding-3" >
                <div className="bg-light" >

                    <div className="my-5 bg-info" style={{ height: "0.4em" }} />
                    <div className="container" >
                        {/* row */}
                        <div className="row">
                            {/* col */}
                            <div className="col-sm-6 col-lg-3 text-left pt-3 pr-3">
                                <ul className="" >
                                    <span className="drop_box-h" ><strong> BY CATEGORY </strong></span>
                                    <li><span onClick={this.history.bind(null, "/jewelry/necklaces_pandant")} className="drop_box-p underline"> Necklaces & Pendants </span></li>
                                    <li><span onClick={this.history.bind(null, "/necklaces_pandant")} className="drop_box-p underline"> Bracelets </span></li>
                                    <li><span onClick={this.history.bind(null, "/jewelry/womens_rings")} className="drop_box-p underline"> Rings </span></li>
                                    <li><span onClick={this.history.bind(null, "/jewelry/womens_rings")} className="drop_box-p underline"> Earrings </span></li>
                                    <li><span onClick={this.history.bind(null, "/jewelry/pearl_jewelry")} className="drop_box-p underline"> Pearl Jewelry </span></li>
                                    <li><span onClick={this.history.bind(null, "/jewelry/mens_rings")} className="drop_box-p underline"> Men’s Jewelry </span></li>
                                    <li><span onClick={this.history.bind(null, "/jewelry/womens_rings")} className="drop_box-p underline"> Women's Jewelry </span></li>
                                    <li><span onClick={this.history.bind(null, "/engraving/art_gallery")} className="drop_box-p underline"> Engraving Art</span></li>
                                    <li><span onClick={this.history.bind(null, "/luckygems")} className="drop_box-p underline"> Find Your Lucky Gemstones </span></li>
                                </ul>
                            </div>
                            {/* col */}
                            {/* col */}
                            <div id="map-container" className="d-none d-sm-none d-md-none d-lg-block d-xl-block col-sm-12 col-lg-6   text-left pt-3 pr-3">
                                <iframe className="rounded z-depth-1-half map-container" id="map-container" title="karchi pakistan" style={{ width: "100%", height: 250 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d750.1418475652371!2d67.07921332916966!3d24.944376815004443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f59ac5527d3%3A0x9e5d303ee51fec57!2sImambargah+Bargah-e-Chahardah+Masoomeen+A.S!5e1!3m2!1sen!2s!4v1523544322416" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            {/* col */}
                            {/* col */}
                            <div className="col-sm-6 col-lg-3   text-left pt-3 pr-3">
                                <ul className="" >
                                    <ul className="" >
                                        <span className="drop_box-h" ><strong> ONE10 Gemstones </strong></span>
                                        <li><a href="#aboutUs"><span onClick={this.history.bind(null, "/about")} className="drop_box-p underline text-dark">About us</span></a></li>
                                        <li><a href="#whyUs"><span onClick={this.history.bind(null, "/about")} className="drop_box-p underline text-dark"> Why us </span></a></li>
                                        <li><a href="#goals"> <span onClick={this.history.bind(null, "/about")} className="drop_box-p underline text-dark"> Our Goals </span></a></li>
                                        <li><span onClick={this.history.bind(null, "/about")} className="drop_box-p underline"> Cash on Delivery System </span></li>
                                        <li><span onClick={this.history.bind(null, "/about")} className="drop_box-p underline"> Privacy and policies </span></li>
                                    </ul>
                                </ul>
                                <div style={{ verticalAlign: "bottom" }} className="pt-lg-3 d-none d-sm-none d-md-none d-lg-block d-xl-block">
                                    {/* <div>
                                    <input placeholder="Email" style={{ border: "none", background: "#eee" }} className=" py-2 px-2" />
                                    <button className=" btn-info px-2 py-2 pointer" > SIGN UP </button>
                                </div> */}
                                    <div className="text-center" >
                                        <IoSocialFacebook onClick={() => window.open("https://www.facebook.com/profile.php?id=100008199347637 ", "_blank")} className="ml-0 footIcons facebook " />
                                        <IoSocialLinkedin onClick={() => window.open("https://www.linkedin.com/in/ameen-alam-375390134/", "_blank")} className="footIcons linkedin" />
                                        <a style={{ textDecoration: "none" }} href="mailto:ameenalam202@gmail.com"><IoIosEmail className="footIcons email" /></a>
                                        <IoSocialGithub onClick={() => window.open("https://github.com/Ameen-Alam", "_blank")} className="footIcons github" />
                                        <IoSocialTumblr onClick={() => window.open("https://twitter.com/Ameen__Alam", "_blank")} className="footIcons tumber" />
                                        <IoSocialWhatsapp data-toggle="modal" data-target="#exampleModal1" className="footIcons whatsapp" />
                                        <IoSocialGoogleplus onClick={() => window.open("https://plus.google.com/u/0/116985777031909596698", "_blank")} className="footIcons googleplus" />
                                        <IoSocialInstagram onClick={() => window.open("https://www.instagram.com/ameen_alam_bootcamp/?hl=en", "_blank")} className="footIcons instagram" />
                                        <IoEarth onClick={() => window.open("http://ameenalam.blogspot.com/", "_blank")} className="footIcons earth" />
                                        <IoSocialVimeo onClick={() => window.open("https://vimeo.com/user83610317", "_blank")} className="footIcons vimeo" />
                                        <IoSocialPinterest onClick={() => window.open("https://www.pinterest.com/ameenalam202/", "_blank")} className="footIcons pinterest" />
                                    </div>
                                </div>
                            </div>
                            {/* col */}
                            {/* col */}
                            <div className=" d-sm-block d-md-block d-lg-none d-xl-none col-sm-12 col-lg-6   text-left pt-3 pr-3">
                                <div><iframe className="rounded z-depth-1-half map-container" id="map-container" title="karchi pakistan" style={{ width: "100%", height: 250 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d750.1418475652371!2d67.07921332916966!3d24.944376815004443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f59ac5527d3%3A0x9e5d303ee51fec57!2sImambargah+Bargah-e-Chahardah+Masoomeen+A.S!5e1!3m2!1sen!2s!4v1523544322416" frameBorder="0" allowFullScreen></iframe></div>
                                <div className="text-center" >
                                    <IoSocialFacebook onClick={() => window.open("https://www.facebook.com/profile.php?id=100008199347637 ", "_blank")} className="ml-0 footIcons facebook " />
                                    <IoSocialLinkedin onClick={() => window.open("https://www.linkedin.com/in/ameen-alam-375390134/", "_blank")} className="footIcons linkedin" />
                                    <a style={{ textDecoration: "none" }} href="mailto:ameenalam202@gmail.com"><IoIosEmail className="footIcons email" /></a>
                                    <IoSocialGithub onClick={() => window.open("https://github.com/Ameen-Alam", "_blank")} className="footIcons github" />
                                    <IoSocialTumblr onClick={() => window.open("https://twitter.com/Ameen__Alam", "_blank")} className="footIcons tumber" />
                                    <IoSocialWhatsapp data-toggle="modal" data-target="#exampleModal1" className="footIcons whatsapp" />
                                    <IoSocialGoogleplus onClick={() => window.open("https://plus.google.com/u/0/116985777031909596698", "_blank")} className="footIcons googleplus" />
                                    <IoSocialInstagram onClick={() => window.open("https://www.instagram.com/ameen_alam_bootcamp/?hl=en", "_blank")} className="footIcons instagram" />
                                    <IoEarth onClick={() => window.open("http://ameenalam.blogspot.com/", "_blank")} className="footIcons earth" />
                                    <IoSocialVimeo onClick={() => window.open("https://vimeo.com/user83610317", "_blank")} className="footIcons vimeo" />
                                    <IoSocialPinterest onClick={() => window.open("https://www.pinterest.com/ameenalam202/", "_blank")} className="footIcons pinterest" />
                                </div>
                            </div>
                            {/* col */}
                        </div>
                        {/* ROW */}
                    </div>
                    <hr className="bg-dark" />
                    <div className="container pt-2 pb-4" >
                        <div className="row text-right" >
                            <div className="col-md-5 text-center text-md-left">
                                <span className="underline"> Choose Your Location - Pakistan directional_up</span>
                            </div>
                            <div className="col-md-7 text-center text-md-right">
                                <span className="underline pr-1" > Privacy  </span>
                                <span className="underline px-1" > Policy </span>
                                <span className="underline px-1" > Terms Of Use </span>
                                <span className="underline px-1" > Site Index </span>
                                <span className="underline pl-1" > © ONE10 Gems & Jewelry. 2018 </span>
                            </div>
                        </div>

                    </div>
                </div>
                {/* popup */}
                <div className="modal fade" id="exampleModal1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel1">Modal title</h5>
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
export default Fotter