import React, { Component } from 'react';
import './banner.css';
import frame from '../goldFrame.png'

class BannerBox extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
        }
    }

    render() {
        const {poster} = this.props;
        return (
            <div className = 'container'>
                <div className = "goldFrame" alt = "cannot display">
                    <div>
                        <img src={poster} className = "posterFrame"></img>
                    </div>
                </div>
            </div>
        )
    }
}

class Banner extends Component {
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            input: ''
        }
    }
    render(){
        const {nominated} = this.props;
        const topList = [];
        
        if (nominated.length === 5){
            for (let i = 0; i < nominated.length; i++){
                    let poster = nominated[i].Poster
                    topList.push(<BannerBox
                        key = {i}
                        poster= {poster}
                        />)
                }
        }

        return (
            <div className = 'bannerSectionContainer'>
                <h4 id = "topPicksHeader">YOUR TOP PICKS</h4>
                <div className = "topList" >{topList}</div>
            </div>
        );
    }
};

export default Banner;