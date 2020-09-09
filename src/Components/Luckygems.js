import React, { Component } from 'react';
import "./Comp.css";


class Luckygems extends Component {
    state = {
        error: ""
    }
    submit(e) {
        e.preventDefault()
    }
    render() {
        const { error } = this.state
        return (
            <div className="container-fluid padding-2">
                <div className="" style={{ borderBottom: '1px solid #222' }} >
                    <h2 className="pt-3 text-muted pl-3 pl-lg-0" > Most Popular (1000+)</h2>
                    <br />
                </div>
                <div className="mt-3 px-3 " >
                    <div className="drop_box-h text-muted"> Find your lucky gemstones </div>
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
            </div>
        )
    }
}
export default Luckygems;