import React, { Component } from 'react';
import "./Comp.css";
import Cover4 from '../Images/Cover4.jpg'


class aboutEngravingArt extends Component {
    render() {
        return (
            <div className="container-fluid padding-2">
                <div>
                    <img alt="" style={{ width: "100%", height: 200 }} src={Cover4} />
                </div>
                <div className="mt-3 px-0 mb-12" >
                    <div className="card card-body">
                        <div>
                            <img  style={{ width: '40%' }} align="right" src="https://thumb1.shutterstock.com/display_pic_with_logo/3391/318970973/stock-photo-full-length-portrait-of-a-young-man-working-on-a-laptop-seated-on-a-chair-and-looking-at-the-camera-318970973.jpg" className=" ml-auto" alt="Ameen Alam" />
                            <div className="text-center" >
                                <h5 className="font-weight-bold h5 d-block">
                                    <strong>Engraving Art:</strong>
                                </h5>
                                <p className="grey-text">Masters of the Art</p>
                            </div>
                            <p>
                                An <b>engraved gem</b>, frequently referred to as an <b>intaglio</b>, is a small and usually semi-precious gemstone that has been carved, in the Western tradition normally with images or inscriptions only on one face. The engraving of gemstones was a major luxury art form in the ancient world and an important one in some later periods.
                            </p>


                            <h4><strong className="text-dark"> History of Engraving on gemstones: </strong> </h4>

                            <p><strong className="text-warning" > </strong> </p>
                            <p> The art of gem cutting (glyptic in Greek) is one of the oldest testimonies to how installed, fascinating miniatures can transform gemstones into tiny works of art with immense charisma and magical significance. Decoration, symbols and magic formulae that still fascinate and have given gemstone engraving a special place in the cultural history of mankind.</p>
                            <p> The Anthropological Museum in Berlin contains mummies with signet rings still on their fingers. These rings with their symbols cut deep into the stones have been used as stamps for documents and to mark possessions right up into modern times. Their impression made documents legally binding and upheld ownership. The use of gun drills and wheel technology soon enabled the processing of harder gemstones such as ruby, sapphire or quartz and enabled the production of more demanding images.</p>

                            <h4><strong className="text-dark"> What we can engrave: </strong> </h4>
                            <p>As we have been engraving since long time on precious and semi-precious gemstones we have a wide range of engraving art gallery which can give you a different view of nature being modified. We engrave the following items on any kind of gemstone.</p>
                            <ul>
                                <li> 1: Ayat </li>
                                <li> 2: Name or any date </li>
                                <li> 3: Any special sign </li>
                                <li> 4: Any religious sign </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default aboutEngravingArt;