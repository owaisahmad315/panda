import React from "react";
import './navbar.css';
import logo from '../assets/logo 2.png';
import logo1 from '../assets/Vector2.png';
import headerTree from '../assets/Vector.png';
import headerTreeright from '../assets/vector1.png';

class Navbar extends React.Component {

    render() {

        return (
            <header>
                <img src={headerTree} alt="" />
                <nav className='navbar'>
                    <ul>
                        <li><a href="/">GALLERY</a></li>
                        <li><a href="/">TEAM</a></li>
                        <li><a href="/"><img src={logo} alt="" /> </a></li>
                        <li><a href="/">ROADMAP</a></li>
                        <li><a href="/">FAQ</a></li>
                    </ul>
                </nav>
                <NavbarHead />
                <NavbarBottom />
                <img src={headerTreeright} alt="headerTree" />
            </header>
        );
    }
}

class NavbarHead extends React.Component {

    render() {

        return (
            <div className='navbarHead'>
                <h1>panda valley</h1>
                <p><span id='pspan'>4444</span> unique algorithmically generated 3d pandas</p>
                <button>
                    <ul>
                        <li><a href="">join</a></li>
                        <li><a href=""><img src={logo1}></img></a></li>
                        <li><a href="">discord</a></li>
                    </ul>


                </button>
            </div>
        );
    }
}

export class NavbarBottom extends React.Component {

    render() {

        return (
            <div className='header-bottom'>
                <p id='head-bottom-p'>COUNTDOWN TO PRE-SALE</p>
                <div id='time'>
                    <div className="time-container">
                        <h2>18</h2>
                        <p>Days</p>
                    </div>
                    <div className="time-container">
                        <h2>18</h2>
                        <p>Days</p>
                    </div>
                    <div className="time-container">
                        <h2>18</h2>
                        <p>Days</p>
                    </div>
                    <div className="time-container">
                        <h2>18</h2>
                        <p>Days</p>
                    </div>

                </div>
            </div>
        );
    }
}
export default Navbar;