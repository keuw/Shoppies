import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import "./search.css";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            input: "",
        };
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value,
        });
    };

    returnSearch = (e, search) => {
        if (e.key === "Enter") {
            search(this.state.input, 1);
        }
    };
    render() {
        const { search } = this.props;
        const { input } = this.state;

        return (
            <div className="Container">
                <div>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <SearchIcon />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="input-with-icon-grid"
                                label="Movie Title"
                                input={input}
                                onChange={(e) => this.handleChange(e)}
                                onKeyDown={(e) => this.returnSearch(e, search)}
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default SearchBar;
