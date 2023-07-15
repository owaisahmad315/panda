import React from 'react';
import './section1.css';
import spider_panda from '../assets/spider panda.png'
import forest_panda from '../assets/forest panda.png'
import austronut_panda from '../assets/austronut panda.png'

class Section1 extends React.Component {

    render() {

        return (

            <div id="section-1">
                <h3>50 hand drawn 3d pandas</h3>
                <div id="pandas-container">
                    <div className="panda">
                        <img src={spider_panda} alt="SpiderPanda" />
                    </div>
                    <div className="panda">
                        <img src={forest_panda} alt="ForestPanda" />
                    </div>
                    <div className="panda">
                        <img src={austronut_panda} alt="AustronutPanda" />
                    </div>
                </div>
                <button>SHOW MORE</button>

            </div>
        );
    }
}

export default Section1;