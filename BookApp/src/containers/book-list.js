//Conatainer/Smart Component = component that has direct access to redux

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList(){
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title}
                    onClick={() => this.props.selectBook(book)} 
                    className="list-group-item">
                {book.title}
                </li>
            );
        });
    }
    
    render(){
        return (
            <ul className="list-group col-sm-4">
                { this.renderList() }
            </ul>
        );
    }
}

function mapStateToProps(state) {
    //Whatever gets returned from here will show up as props inside of BookList (this.props)
    return {
        books: state.books
    };
}

//Anything returned will end up as props on the BookList container
//this.props.selectBook() will call action creator
function mapDispatchToProps(dispatch) {
    //Whenever selectBook is called, the result should be passed to all reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//Promote BookList from compoent to container
//It needs to know about the new dispatch method selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);