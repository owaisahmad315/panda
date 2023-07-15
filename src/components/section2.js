import React from 'react';
import './section2.css';
import robot_panda from '../assets/robot panda.png';

class Section2 extends React.Component {

    render() {

        return (
            <div id="section-2">
                <h3>50 hand drawn 3d pandas</h3>
                <div id="robot-pandas-container">
                    <div className="robot-panda">
                        <img src={robot_panda} alt="" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className="robot-panda">
                        <img src={robot_panda} alt="" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className="robot-panda">
                        <img src={robot_panda} alt="" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
                <button>
                    SHOW MORE
                </button>
            </div>
        );
    }
}

export default Section2;