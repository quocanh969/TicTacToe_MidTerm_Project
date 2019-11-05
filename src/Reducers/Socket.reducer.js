const initState = {
    Player: 0,
    P1ID: null,
    P1name: null,
    P2ID: null,
    P2name: null,
    isWaiting: true,
    pauseGame: false,
    undoRequest: false,
    drawRequest: false,
    giveUpRequest: false,
}

function SocketReducer(state = initState, action) {
    switch (action.type) {
        case 'NEW_GAME':
            return {
                ...state,
                isWaiting: true,
            }
        case 'PLAYER_ONE':
            return {
                ...state,
                Player: 1,
                P1ID: action.P1ID,
                P1name: action.P1name,
                P2ID: action.P2ID,
                P2name: action.P2name,
                isWaiting: false,
            }
        case 'PLAYER_TWO':
            return {
                ...state,
                Player: 2,
                P1ID: action.P1ID,
                P1name: action.P1name,
                P2ID: action.P2ID,
                P2name: action.P2name,
                isWaiting: false,
            }
        case 'PAUSE_GAME':
            return {
                ...state,
                pauseGame: true,
            }
        case 'RECEIVE_UNDO_REQUEST':
            return {
                ...state,
                undoRequest: true,
            }
        case 'RECEIVE_DRAW_REQUEST':
            return {
                ...state,
                drawRequest: true,
            }
        case 'RECEIVE_GIVE_UP_REQUEST':
            return {
                ...state,
                giveUpRequest: true,
            }
        case 'RESUME_GAME':
            return {
                ...state,
                pauseGame: false,
            }
        case 'ANSWER_UNDO_REQUEST':
            return {
                ...state,
                undoRequest: false,
            }
        case 'ANSWER_DRAW_REQUEST':
            return {
                ...state,
                drawRequest: false,
            }
        case 'ANSWER_GIVE_UP_REQUEST':
            return {
                ...state,
                giveUpRequest: false,
            }
        
        default:
            return state;
    }
}

export default SocketReducer;