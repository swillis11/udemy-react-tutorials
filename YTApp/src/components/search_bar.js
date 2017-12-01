import React, { Component } from 'react'; //Import since JSX compiled to React.createElement.

//Functional Component since it is a function that renders JSX
// const SearchBar = () => {
//     return <input />;
// }

// class SearchBar extends React.Component {
//Each class has it's own state
class SearchBar extends Component { //{ Component } at top
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    }

    render() {
        // return <input onChange={this.onInputChange} />;        
        return (
            <div className="search-bar">
                <input
                    value={this.state.term} //Controlled component has value set by state
                    onChange={(event) => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    // onInputChange(event) { //JSX event handler always passes event object
    //     console.log(event.target.value);
    // }
}

export default SearchBar;