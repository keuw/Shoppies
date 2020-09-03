import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import "./movieInfo.css";

class MovieInfo extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            displayInfo: this.props.displayInfo,
        };
    }

    render() {
        const { displayInfo } = this.props;

        return (
            <div className="movieDisplayContainer">
                <div className="bannerInfoContainer">
                    <img
                        className="imageInfoContainer"
                        src={displayInfo.Poster}
                    ></img>
                    <div className="MovieInfoContainer">
                        <div className="textInfoContainer">
                            <b>Title: </b>
                            {displayInfo.Title}
                        </div>
                        <div className="textInfoContainer">
                            <b>Year: </b>
                            {displayInfo.Year}
                        </div>
                        <div className="textInfoContainer">
                            <b>Rated: </b>
                            {displayInfo.Rated}
                        </div>
                        <div className="textInfoContainer">
                            <b>Runtime: </b>
                            {displayInfo.Runtime}
                        </div>
                        <div className="textInfoContainer">
                            <b>Genre: </b>
                            {displayInfo.Genre}
                        </div>
                        <div className="textInfoContainer">
                            <b>Director: </b>
                            {displayInfo.Director}
                        </div>
                        <div className="textInfoContainer">
                            <b>Actors: </b>
                            {displayInfo.Actors}
                        </div>
                        <div className="textInfoContainer">
                            <b>Metascore: </b>
                            {displayInfo.Metascore}
                        </div>
                        <div className="textInfoContainer">
                            <b>imdbRating: </b>
                            {displayInfo.imdbRating}
                        </div>
                        <div className="textInfoContainer">
                            <b>Country: </b>
                            {displayInfo.Country}
                        </div>
                        <div className="textInfoContainer">
                            <b>Language: </b>
                            {displayInfo.Language}
                        </div>
                    </div>
                </div>
                <div className="synopsisContainer">
                    <div className="textInfoContainer">
                        <b>Plot:</b>
                    </div>
                    <div className="textInfoContainer">{displayInfo.Plot}</div>
                </div>
            </div>
        );
    }
}

export default MovieInfo;
