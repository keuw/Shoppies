import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './nominationDisplay.css';

class MovieBox extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
        }
    }

    render() {
        const { title, year, poster, id, removeNominee} = this.props;

        return (
            <div className = 'movieContainer'>
                <div className = 'bannerContainer'>
                    <img className = 'imageContainer' src = {poster}></img>
                </div>
                <div className = 'infoContainer'>
                    <div className = 'textContainer'>
                        Title: {title} 
                    </div>
                    <div className = 'textContainer'>
                        Year: {year} 
                    </div>
                    <Button variant="contained" color="secondary" onClick={() => removeNominee(id)} >Remove</Button>
                </div>
            </div>
        )
    }
}

class NominationList extends Component {
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            input: '',
        }
    }

    getMovie = async (id, apikey) => {
        const request = await fetch(
            'http://www.omdbapi.com/?i=' + id + '&apikey=' + apikey
        )
        const data = await request.json()
        return data
    }

    render(){
        const { nominated, removeNominee, apikey} = this.props;
        let movieList = [];
        
        for (let i = 0; i < nominated.length; i++){
            const movie = nominated[i];
            if(movie != null){
                movieList.push(<MovieBox
                    key = {i}
                    title= {movie.Title}
                    year={movie.Year}
                    poster= {movie.Poster}
                    removeNominee = {removeNominee}
                    id = {nominated[i]}
                    />)
            }
        }

        return (
            <div className = 'SectionContainer'>
                <div className = 'MovieListContainer'>
                    {movieList}
                </div>
            </div>
        );
    }
}

export default NominationList;