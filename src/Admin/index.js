import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AuthAction } from '../store/actions'


// let = mapStateToProp = (state) => {
//     return ({

//     })
// }

let mapDispatchToProps = (dispatch) => {
    return ({
        Signin: (obj) => {
            dispatch(AuthAction.loginAdmin(obj))
        }
    })
}

class Admin extends Component {
    constructor(props) {
        super(props)
        this.changeHandler = this.changeHandler.bind(this)
        this.state = {
            email: "",
            password: ""
        }
    }
    changeHandler(property, event) {
        this.setState({
            [property]: event.target.value
        })
    }

    submit(e) {
        e.preventDefault()
        let state = this.state
        let obj = {
            email: state.email.toLowerCase(),
            password: state.password.toLowerCase()
        }
        this.props.Signin(obj)
    }

    render() {
        const { email, password } = this.state
        return (
            <div className="container" >
                <div>
                    {/* <!--Modal: Contact form--> */}
                    <div className="modal-dialog cascading-modal" role="document">
                        {/* <!--Content--> */}
                        <div className="modal-content">
                            {/* <!--Header--> */}
                            <div className="modal-header primary-color white-text">
                                <h4 className="title">
                                    <i className="fa fa-pencil"></i> Admin Panel </h4>
                                <button type="button" className="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
                                    {/* <span aria-hidden="true">×</span> */}
                                </button>
                            </div>
                            {/* <!--Body--> */}
                            <div className="modal-body">
                                <form action="#" onSubmit={this.submit.bind(this)}>
                                    {/* <!-- Material input email --> */}
                                    <div className="md-form ">
                                        <i className="fa fa-envelope prefix grey-text"></i>
                                        <input value={email} onChange={this.changeHandler.bind(null, "email")} type="text" id="materialFormEmailModalEx1" className="form-control" />
                                        <label htmlFor="materialFormEmailModalEx1">Your email</label>
                                    </div>

                                    {/* <!-- Material textarea message --> */}
                                    {/* <!-- Material input password --> */}
                                    <div className="md-form">
                                        <i className="fa fa-lock prefix grey-text"></i>
                                        <input value={password} onChange={this.changeHandler.bind(null, "password")} type="password" id="materialFormRegisterPasswordEx" className="form-control" />
                                        <label htmlFor="materialFormRegisterPasswordEx">Your password</label>
                                    </div>

                                    <div className="text-center mt-4 mb-2">
                                        <button type="submit" className="btn btn-primary"> Signin <i className="fa fa-send ml-2"></i> </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                        {/* <!--/.Content--> */}
                    </div>
                    {/* <!--/Modal: Contact form--> */}
                </div>
                <br />
                <p>{email}</p>
                <p>{password}</p>
            </div>
        )
    }
}
export default connect(null, mapDispatchToProps)(Admin);