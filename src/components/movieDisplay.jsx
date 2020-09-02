import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './movieDisplay.css';

class MovieBox extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
        }
    }

    render() {
        const { title, year, nominated, poster, movie, addNominee} = this.props;

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
                    {/* <Button variant="contained">Nominate</Button> */}
                    {nominated.find(x=> x === movie) == null ? 
                        <Button variant="contained" onClick={() => addNominee(movie)}>Nominate</Button> :
                        <Button variant="contained"disabled>Nominated</Button>
                    }
                </div>
            </div>
        )
    }
}

class MovieList extends Component {
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            input: '',
        }
    }

    render(){
        const { Search, Response, nominated, input, totalResults, addNominee, error} = this.props;
        let movieList = [];
        
        if (Response == "True"){
            for (let i = 0; i < Search.length; i++){
                    let movie = Search[i]
                    movieList.push(<MovieBox
                        title= {movie.Title}
                        year={movie.Year}
                        nominated={nominated}
                        poster= {movie.Poster}
                        movie= {Search[i]}
                        addNominee = {addNominee}
                        />)
                }
        }

        return (
            <div className = 'SectionContainer'>
                <div className = 'resultsTitle'>
                    { Response === "False" ? 
                        error === "Too many results." ? 
                        <div> Too many results, narrow down your search </div> : 
                        <div> No results found for "{input}" </div> : 
                        <div> {totalResults} Total Results For "{input}" </div>
                    }
                </div>
                <div className = 'MovieListContainer'>
                    {movieList}
                </div>
            </div>
        );
    }
}

export default MovieList;