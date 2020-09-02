import React from 'react';
import './App.css';
import SearchBar from './components/search';
import MovieList from './components/movieDisplay';
import NominationList from './components/nominationDisplay';
import Banner from './components/banner';
import { withAlert } from 'react-alert';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

class App extends React.Component{
  constructor(props){
    super(props)
  }

  state = {
    input: null,
    apikey: '88d64122',
    nominations: JSON.parse(localStorage.getItem('nominations')) || [],
    Response: "False",
    Search: null,
    visualID: null,
    error: null,
    totalResults: 0,
    isPaneOpen: false,
    page: 1,
  };


  getMovies = async (name, page) => {
    const request = await fetch(
      'http://www.omdbapi.com/?s=' + name + '&type=movie&apikey=' + this.state.apikey + '&page=' + page
    );
    const data = await request.json();
    if (data.Response === "True"){
      this.setState({
        input: name,
        Response: data.Response,
        Search: data.Search,
        error: null,
        totalResults: data.totalResults,
      })
    }
    else {
      this.setState({
        input:name,
        Response: data.Response,
        Search: null,
        error: data.Error,
        totalResults: 0,
      })
    }
  }

  searchMovie = (name, page) => {
    this.setState({
      input: name,
      page: 1,
    });
    this.getMovies(name, page);
  }

  addNominee = (movie) => {
    const alert = this.props.alert;
    if (this.state.nominations.length < 5){
      this.setState(prevState=>({
        nominations: [...prevState.nominations, movie]
      }), () => {localStorage.setItem('nominations', JSON.stringify(this.state.nominations))}
      );
    }
    else{
      alert.show('5 Nominations already made, Remove one to add');
    }
  }

  removeNominee = (id) => {
    this.setState({nominations: this.state.nominations.filter(function(target) {
      return target !== id
    })});
  }

  pageChange = (val) =>{
    this.setState({
      page: val,
    })
    this.getMovies(this.state.input, val);
  }

  render(){
    const { input, Response, error, Search, nominations, totalResults, apikey, page } = this.state;

    return (
      <div className="App">
        <div className = "container">
          <h1 id = "Title">
            The Shoppies
          </h1>
          <div className = "functionContainer">
            <SearchBar 
              search = {this.searchMovie} />
          </div>
          <div className = "functionContainer">
            <MovieList
              Search = {Search}
              Response = {Response}
              nominated = {nominations}
              input = {input}
              error = {error}
              totalResults = {totalResults}
              addNominee = {this.addNominee}
              error = {error}
              page = {page}
              pageTemp = {page}
              pageChange = {this.pageChange}
              />
          </div>
        </div>
        <div className = "rightPanel" onClick={() => this.setState({ isPaneOpen: true })}>
            Open to view nominations
        </div>
        <SlidingPane
          className="some-custom-class"
          overlayClassName="some-custom-overlay-class"
          isOpen={this.state.isPaneOpen}
          title="Nomination List"
          subtitle="Your top 5 picks"
          width = "800px"
          onRequestClose={() => {
            // triggered on "<" on left top click or on outside click
            this.setState({ isPaneOpen: false });
        }}>
          <NominationList
            nominated = {nominations}
            removeNominee = {this.removeNominee}
            apikey = {apikey}
          />
          {nominations.length === 5 ?
            <Banner nominated = {nominations}/>:
            <div/>
          }
        </SlidingPane>
      </div>
    );
  }
}

export default withAlert()(App);
