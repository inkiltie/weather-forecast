import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    // console.log('Action received', action);

    switch (action.type) {
        case FETCH_WEATHER:
            // return state.concat([action.type.data]);
            return [ action.payload.data, ...state ]; // Way to change state in Redux, making new array
        default:

    }

    return state;
}
