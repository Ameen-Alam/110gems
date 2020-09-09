import React, { Component } from 'react';
import "./Comp.css";
import Cover4 from '../Images/Cover4.jpg'


class About extends Component {
    render() {
        return (
            <div className="container-fluid padding-2">
                <div>
                    <img alt="" style={{ width: "100%", height: 200 }} src={Cover4} />
                </div>
                <div className="mt-3 px-0 mb-12" >
                    <div className="card card-body">
                        <div>
                            <img style={{ width: '40%' }} align="right" src="https://thumb1.shutterstock.com/display_pic_with_logo/3391/318970973/stock-photo-full-length-portrait-of-a-young-man-working-on-a-laptop-seated-on-a-chair-and-looking-at-the-camera-318970973.jpg" className=" ml-auto" alt="Ameen Alam" />
                            <div className="text-center" >
                                <h5 id="aboutUs" className="font-weight-bold h5 d-block">
                                    <strong>ONE10 GEMSTONES & JEWELRY</strong>
                                </h5>
                                <p className="grey-text">Masters of the Art</p>
                            </div>
                            <p>
                                One10 Gems and Jewelry has the pleasure to provide quality astrological gemstones to Pakistan and International market.
    One10 Gems and Jewelry is very grateful for the long-standing relationships built in these long years, including many of the world's finest jewelry stores, designers, artists, suppliers, resellers, and astrologers.
    One10 Gems and Jewelry is not only dealing with gems we are specialized in jewelry, writing, engraving art and so on.
<b> All gemstones are natural and certified by high authority labs only.</b>
                            </p>


                            <h4 id="whyUs" ><strong className="text-dark"> WHY US: </strong> </h4>

                            <p><strong className="text-warning" > </strong> </p>
                            <p> We know choosing the perfect gemstone is an important decision. We want to make customer’s search easy. Simply put, quality, rarity, and value are the cornerstones of our gemstone business.</p>
                            <p> Our gemstones are natural, certified and untreated make us the best in the gemstone market for gemstone buying. These stones have significantly more value, and are far more stable in retaining that value over commercially treated sapphires. We directly bring the stones to our customers from mines and reduce the cost of the middleman that itself reduce the cost of stone that you buy from us around 30 to 40 percent.</p>
                            <ul>
                                <li>* We believe in long term relationships</li>
                                <li>* We have 15000 natural gemstones for you to choose from. We have gemstones that suits every occasion, mood, budget, need</li>
                                <li>* We are best in jewelry making.</li>
                                <li>* 100% transparency. What you see is what you get. All stones presented in the store are live products for selling with a price.</li>
                                <li>* We know your most suitable gem.</li>
                                <li>* We are specialized in engraving art.</li>
                                <li>* The gemstone you buy from us comes with a certificate of authenticity from prestigious laboratories.</li>
                                <li>* Cash on delivery offer.</li>
                                <li>* We are specialized in customized name jewelry.</li>
                                <li>* We give money back guarantee of our product.</li>
                                <li>* We have been providing good customer service.</li>
                            </ul>

                            <h4 id="goals" ><strong className="text-dark"> Our Goals:  </strong> </h4>
                            <p> A onetime sale has little meaning. Making lifetime customers is our goal. Our personal and corporate policy is to develop regular satisfied customers who choose to do their gem buying from One10 Gems and Jewelry. That's why we back up great stones of exceptional value with great service and a "100% Money-back No-Questions-Asked" guarantee.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default About;