//State arg is not app state, only the state that this reducer is responsible for

//state = null assigns undefined argument to null -- ES6
export default function(state = null, action) {
    // state += 1; //If state was a number it would be incremented by 1
    switch(action.type) {
    case 'BOOK_SELECTED':
        return action.payload;
    }

    //Redux does not allow undefined to be returned in reducer
    return state;
}