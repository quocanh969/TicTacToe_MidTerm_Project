import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE } from '../Actions/Action';

const initState = {
    status: 0,
    message: '',
    loading: false,
}

function LogInReducer(state = initState, action) {
    switch (action.type) {
        case LOG_IN_REQUEST:
            return {
                ...state,
                status: 0,
                message: '',
                loading: true,
            };
        case LOG_IN_SUCCESS:
            return {
                ...state,
                status: 1,
                message: action.message,
                loading: false,
            };
        case LOG_IN_FAILURE:
            return {
                ...state,
                status: -1,
                message: action.message,
                loading: false,
            };
        default:
            return state;
    }
}

export default LogInReducer;