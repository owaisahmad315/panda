import React from 'react';
import './footer.css';
import logo3 from '../assets/logo3.png';
import vector4 from '../assets/Vector4.png';
import instagram from '../assets/instagram-svgrepo-com 1.png';
import vector6 from '../assets/Vector6.png';
import treeLeft from '../assets/footer tree left.png';
import treeRight from '../assets/footer tree right.png';

class Footer extends React.Component {

    render() {
        return (
            <div id="footer">
                <div id="footer-links">
                    <img src={treeLeft} alt="" />
                    <ul>
                        <li><a href="/">GALLERY</a></li>
                        <li><a href="/">TEAM</a></li>
                        <li><a href="/"><img src={logo3} alt="" /> </a></li>
                        <li><a href="/">ROADMAP</a></li>
                        <li><a href="/">FAQ</a></li>
                    </ul>
                </div>
                <div id="social-links">
                    <p>follow us in</p>
                    <div id="icons">
                        <img src={vector4} alt="" />
                        <img src={instagram} alt="" />
                        <img src={vector6} alt="" />
                    </div>
                </div>
                <img src={treeRight} alt="footerImg" />
            </div>

        );
    }
}

export default Footer;