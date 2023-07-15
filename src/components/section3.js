import React from 'react';
import './section3.css';
import image from '../assets/Vector3.png';

class Section3 extends React.Component {

    render() {

        return (
            <div id="section-3">
                <h1>get on the whitelist</h1>
                <p>As an early adopter you will get exclusive opportunities to get your WhiteList or even get FREE NFT</p>
                <button>
                    <ul>
                        <li><a href="">join</a></li>
                        <li><a href=""><img src={image} alt="img3"></img></a></li>
                        <li><a href="">discord</a></li>
                    </ul>
                </button>
            </div>

        );
    }
}

export default Section3;