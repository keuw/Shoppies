import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './movieDisplay.css';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

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
                    {nominated.find(x=> x.imdbID === movie.imdbID) == null ? 
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
            page: this.props.page,
            pageTemp: this.props.page,
        }
    }

    handleChange = (e) => {
        this.setState({
            pageTemp: e,
        });
    }

    returnPage = (e,pageChange) => {
        if (e === 'Enter'){
            if (parseInt(this.state.pageTemp) !== NaN 
                && this.state.pageTemp <= (Math.floor(this.props.totalResults/10) +1)
                && this.state.pageTemp > 0){
                this.setState({
                    page: this.state.pageTemp
                });
                pageChange(this.state.pageTemp)
            }
            else{
                this.setState({
                    pageTemp: this.state.page
                })
            }
        }
    }

    nextPage = (pageChange) => {
        this.setState({
            pageTemp: parseInt(this.state.page) + 1
        },
        () => {this.returnPage('Enter', pageChange)})
    }

    prevPage = (pageChange) => {
        this.setState({
            pageTemp: parseInt(this.state.page) - 1
        },
        () => {this.returnPage('Enter', pageChange)})
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props){
            this.setState({
                page: this.props.page,
                pageTemp: this.state.page
            });
        }
    }

    render(){
        const { Search, Response, nominated, input, totalResults, addNominee, error,  pageChange} = this.props;
        const movieList = [];
        
        if (Response === "True"){
            for (let i = 0; i < Search.length; i++){
                    let movie = Search[i]
                    movieList.push(<MovieBox
                        key = {i}
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
                { totalResults > 10 ? 
                    <div className = 'pageChangeContainer'>
                        <ArrowLeftIcon id="pageArrow" fontSize = "large" onClick={() => this.prevPage(pageChange)} />
                        <input 
                            className="pageChange" 
                            type="text"
                            value = {this.state.pageTemp}
                            onChange={(e) => this.handleChange(e.target.value)}
                            onKeyDown={(e) => this.returnPage(e.key, pageChange)}
                        /> 
                        <div className="totalPages"> /{Math.floor(this.props.totalResults/10) +1} </div>
                        <ArrowRightIcon id="pageArrow" fontSize = "large" onClick={() => this.nextPage(pageChange)} />
                    </div> :
                    <div />
                }
            </div>
        );
    }
}

export default MovieList;