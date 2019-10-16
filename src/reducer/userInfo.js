import {
    GET_USER_INFO,
    GET_USER_MUSIC_LIST,
    USER_EXIT
} from 'action/actionType'

const user_info = {
    backgroundUrl:'',
    nickname:'',
    avatarUrl:'',
    musicList:[]
}

const userReducer = ( state = user_info,action) => {
    const newState = {
        ...state
    }

    switch( action.type ) {
        case GET_USER_INFO:
            // console.log(action.payload.data.profile.avatarUrl)
            newState.backgroundUrl = action.payload.data.profile.backgroundUrl
            newState.nickname = action.payload.data.profile.nickname
            newState.avatarUrl = action.payload.data.profile.avatarUrl
        break;
        case GET_USER_MUSIC_LIST:
            newState.musicList = action.payload.data.playlist
            // console.log(action.payload)
        break;
        case USER_EXIT:
            newState.backgroundUrl = ''
            newState.nickname = ''
            newState.avatarUrl = ''
            newState.musicList = []
        break;
        default:
        break;
    }

    return newState
}

export default userReducer