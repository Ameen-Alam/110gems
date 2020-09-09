import React, { Component } from 'react';
import NavbarLg from './NavbarLg'
import NavbarXs from './NavbarXs'
import './Nav.css'

class Navigation extends Component {
    state = {
        isUi: true,
    }
    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();

    }
    resize() {
        if (window.innerWidth <= 980) {
            this.setState({ isUi: true });
        } else if (window.innerWidth >= 979) {
            this.setState({ isUi: false });
        }
    }

    render() {
        const { isUi } = this.state
        return (
            <div className="NAV">
                {isUi ?
                    <NavbarXs />
                    :
                    <NavbarLg />
                }
            </div>
        )
    }
}
export default Navigation