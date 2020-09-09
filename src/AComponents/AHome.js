import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import swal from 'sweetalert';
import MarqueeDouble from 'react-marquee-double';
import { connect } from 'react-redux';
import "../Components/Comp.css";
// import VelintineDay from '../Images/VelintineDay.jpg'
import { MdClose } from 'react-icons/lib/md';
import history from '../Routes/History';
import { PanelAction } from '../store/actions'
// images
import Cover1 from '../Images/Cover1.jpg'
import Cover2 from '../Images/Cover2.jpg'
import Cover3 from '../Images/Cover3.jpg'
import Cover4 from '../Images/Cover4.jpg'
import Cover5 from '../Images/Cover5.jpg'
import Cover6 from '../Images/Cover6.jpg'


// let = mapStateToProp = (state) => {
//     return ({

//     })
// }

let mapDispatchToProps = (dispatch) => {
    return ({
        home: (obj) => {
            dispatch(PanelAction.home(obj))
        }
    })
}


class AHome extends Component {
    constructor(props) {
        super(props)
        this.history = this.history.bind(this)
        this.state = {
            isLocation: false,
            file: "",
            imgWidth: "",
            error: ""
        }
    }
    history(property) {
        history.push(property)
    }

    submit(e) {
        let state = this.state
        let obj = {
            file: state.file,
            imgWidth: state.imgWidth
        }
        if (state.imgWidth !== "" && state.file !== "" && state.imgWidth > 19 && state.imgWidth < 101) {
            this.props.home(obj)
            console.log(obj, " obj")
            this.setState({ error: "" })
        } else {
            this.setState({ error: "Image Width Not be NULL" })
        }
    }

    render() {
        const { isLocation, file, imgWidth, error } = this.state
        return (
            <div className="container-fluid padding-2">
                <div style={{ color: "#109c99" }} className="bg-light">
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
                            I’m like TT Just like TT Tell me that you’d be my baby
                            </h5>
                    </MarqueeDouble>
                </div>

                <div>
                    <form onSubmit={this.submit.bind(this)} className="md-form" action="#">
                        <div className="file-field">
                            <div className="d-inline-block">
                                <div className="btn btn-primary py-2 btn">
                                    <span>Choose files </span>
                                    {/* <input onChange={(e) => { this.setState({ file: e.target.file[0] }) }} type="file" multiple /> */}
                                    <TextField
                                        type='file'
                                        // value={this.state.img}
                                        onChange={(e) => { this.setState({ file: e.target.files[0] }) }}
                                    />
                                </div>
                            </div>
                            <div className="file-path-wrapper d-inline-block px-3 ">
                                <input onChange={(e) => { this.setState({ imgWidth: e.target.value }) }} value={imgWidth} placeholder="Image Width in % for every screen responsive" type="number" />
                            </div>
                            <div className="file-path-wrapper d-inline-block">
                                <button type="submit" className={file ? "btn btn-primary " : "btn btn-primary disabled py-2"} >Upload</button>
                            </div>
                            <p className="text-danger d-inline-block" >{error}</p>
                        </div>
                    </form>
                </div>

                <div>
                    <img alt="" className="pointer" onClick={this.history.bind(null, "/engraving/art_gallery")} style={{ width: "100%" }} src={Cover4} />

                    <img alt="" className="pointer" onClick={this.history.bind(null, "/gift/gift_for_him")} style={{ width: "50%" }} src={Cover1} />

                    <img alt="" className="pointer" onClick={this.history.bind(null, "/engagement/womens_engagement_rings")} style={{ width: "50%" }} src={Cover2} />

                    <img alt="" className="pointer" onClick={this.history.bind(null, "/gift/gift_for_her")} style={{ width: "100%" }} src={Cover3} />

                    <img alt="" className="pointer" onClick={this.history.bind(null, "/engagement/womens_engagement_rings")} style={{ width: "50%" }} src={Cover5} />

                    <img alt="" className="pointer" onClick={this.history.bind(null, "/luckygems")} style={{ width: "50%" }} src={Cover6} />
                </div>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(AHome);