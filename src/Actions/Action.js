import { us } from '../Services/UserService';
import { history } from '../Helpers/History';
// Playground
export const TOGGLE_SORT = 'TOGGLE_SORT';

export const ToggleSort = isASC => {
    return {
        type: TOGGLE_SORT,
        isASC
    };
};
// Playground -- Bot mode
export const RESTART = 'RESTART';
export const BACK_TO_HISTORY = 'BACK_TO_HISTORY';
export const MOVE_BOTMODE = 'MOVE_BOTMODE';

export const Restart = () => {
    return {
        type: RESTART
    };
};

export const Back2History = index => {
    return {
        type: BACK_TO_HISTORY,
        index,
    };
};

export const moveBotmode = pos => {
    return {
        type: MOVE_BOTMODE,
        pos
    };
};

// Playground -- PVP mode
export const TOGGLE_CHAT_BOX = 'TOGGLE_CHAT_BOX';

export const toggleChatBox = isChatBoxOpen => {
    return {
        type: TOGGLE_CHAT_BOX,
        isChatBoxOpen,
    }
}

export const GAME_OVER = 'GAME_OVER';
export const SET_STATE_FOR_GAME_OVER = 'SET_STATE_FOR_GAME_OVER';

export const noticeGameOver = gameOverType => {
    return {
        type: GAME_OVER,
        gameOverType,
    }
}


// Dashboard
export const PLAY_AGAINST_BOT = 'PLAY_AGAINST_BOT';
export const PLAY_AGAINST_HUMAN = 'PLAY_AGAINST_HUMAN';

export const playAgainstBot = () => {
    localStorage.setItem('isBotMode',JSON.stringify({value:true}));
    return {
        type: PLAY_AGAINST_BOT,
    }
}

export const playAgainstHuman = () => {
    localStorage.setItem('isBotMode',JSON.stringify({value:false}));
    return {
        type: PLAY_AGAINST_HUMAN,        
    }
}

// User
export const UPDATE_REQUEST = 'UPDATE_REQUEST';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const UPDATE_FAILURE = 'UPDATE_FAILURE';

export const CHANGE_PASSWORD_REQUEST = 'CHANGE_PASSWORD_REQUEST';
export const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS';
export const CHANGE_PASSWORD_FAILURE = 'CHANGE_PASSWORD_FAILURE';

export const CHANGE_AVATAR = 'CHANGE_AVATAR';

export const updateInfo = (id, user) => {
    return dispatch => {
        dispatch(request(user));

        us.update(id, user)
            .then(
                (res) => {
                    if (res.code === 1) {
                        dispatch(success(res.message));
                    }
                    else {
                        dispatch(failure(res.message));
                    }
                },
                (error) => {
                    dispatch(failure('Can not connect to server'));
                }
            );

    };

    function request(user) {
        return {
            type: UPDATE_REQUEST,
            user,
        }
    }
    function success(message) {
        return {
            type: UPDATE_SUCCESS,
            message,
        }
    }
    function failure(message) {
        return {
            type: UPDATE_FAILURE,
            message,
        }
    }
}

export const resetUpdateInfoStatus = () => {
    return {
        type: UPDATE_REQUEST,
    }
}

export const changePassword = (id, password) => {
    return dispatch => {
        dispatch(request());

        us.changePassword(id, password)
            .then(
                (res) => {
                    if (res.code === 1) {
                        dispatch(success(res.message));
                    }
                    else {
                        dispatch(failure(res.message));
                    }
                },
                (error) => {
                    dispatch(failure('Can not connect to server'));
                }
            );

    };

    function request() {
        return {
            type: CHANGE_PASSWORD_REQUEST,
        }
    }
    function success(message) {
        return {
            type: CHANGE_PASSWORD_SUCCESS,
            message,
        }
    }
    function failure(message) {
        return {
            type: CHANGE_PASSWORD_FAILURE,
            message,
        }
    }
}

export const noticeChangePasswordFail = message => {
    return {
        type: CHANGE_PASSWORD_FAILURE,
        message,
    }
}

export const resetChangePasswordStatus = () => {    
    return {
        type: CHANGE_PASSWORD_REQUEST,
    }
}

export const changeAvatar = (id, url,isUpdateAvatar) => {
    return dispatch => {      
        if(isUpdateAvatar)
        {
            us.changeAvatar(id, url)
            .then(
                (res) => {
                    if (res.code === 1) {
                        dispatch(success(url));
                    }
                    else {
                        alert('Can not update image data to database server');
                        return {}
                    }
                },
                (error) => {
                    alert('Can not connect to database server');
                    return {}
                }
            );
        }
        else
        {
            dispatch(success(url));
        }
        
    };

    function success(url)
    {
        return {
            type: CHANGE_AVATAR,
            url,
        }
    }
}

// Login
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const logIn = (user) => {
    return dispatch => {
        dispatch(request(user));
        us.login(user)
            .then(
                (res) => {
                    if (res.info.code === 0) {
                        dispatch(failure(res.info.message));
                    }
                    else if (res.info.code === 1) {
                        dispatch(failure(res.info.message));
                    }
                    else {
                        dispatch(success(res.info.message));
                        history.push('/');
                    }
                },
                (error) => {
                    dispatch(failure('Can not connect to server'));
                }
            );
    };

    function request(user) {
        return {
            type: LOG_IN_REQUEST,
            user,
        }
    }
    function success(message) {
        return {
            type: LOG_IN_SUCCESS,
            message,
        }
    }
    function failure(message) {
        return {
            type: LOG_IN_FAILURE,
            message,
        }
    }
}

// Register
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const register = (user) => {
    return dispatch => {

        dispatch(request(user));

        us.register(user)
            .then(
                res => {
                    if (res.code === 1) {
                        dispatch(success(res.message));
                    }
                    else {
                        dispatch(failure(res.message));
                    }
                },
                (error) => {
                    dispatch(failure('Can not connect to server'));
                }
            )

    }

    function request(user) {
        return {
            type: REGISTER_REQUEST,
            user
        }
    }

    function success(message) {
        return {
            type: REGISTER_SUCCESS,
            message
        }
    }

    function failure(message) {
        return {
            type: REGISTER_FAILURE,
            message
        }
    }
}

export const noticeFail = message => {
    return {
        type: REGISTER_FAILURE,
        message,
    }
}

// Header
export const LOG_OUT = "LOG_OUT";
export const UPDATE_STATUS = "UPDATE_STATUS";

export const logOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('setTimeLogIn');
    localStorage.removeItem('isBotMode');
    localStorage.removeItem('room');
    return {
        type: LOG_OUT,
    }
}

export const updateStatus = login => {
    return {
        type: UPDATE_STATUS,
        login
    }
}