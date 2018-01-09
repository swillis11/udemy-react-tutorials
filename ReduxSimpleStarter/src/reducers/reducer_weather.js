import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    console.log('Action received', action);

    //action.payload.data

    switch (action.type) {
    case FETCH_WEATHER:
        // Never manipulate state directly, state is immutable
        // return state.push(action.payload.data);

        // Concat returns new array with new and old stuff combined
        // return state.concat([action.payload.data]);

        // ES6 Syntax of above
        // New record is at front of array
        return [ action.payload.data, ...state ]; //...state flattens [city, city, city]
    }

    return state;
}