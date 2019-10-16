import http from 'utils/http'
import 'utils/cookie'
import { GET_USER_INFO,GET_USER_MUSIC_LIST,USER_EXIT } from './actionType'

// const uid = window.cookie.get('uid')
// console.log('uid',uid)

export const getUserInfo = () => {
    return async dispatch => {
        const uid = window.cookie.get('uid')
        const result = await http({
            url:'/user/detail',
            params:{
                uid
            }
        })
        // console.log(result)
        const action = {
            type: GET_USER_INFO,
            payload:result
        }

        dispatch( action )
    }
}
export const getUserMusic = () => {
    return async dispatch => {
        const uid = window.cookie.get('uid')
        const result = await http({
            url:'/user/playlist',
            params:{
                uid
            }
        })

        const action = {
            type: GET_USER_MUSIC_LIST,
            payload:result
        }

        dispatch( action )
    }
}
export const exitUser = () => {
    return async dispatch => {
        await http({
            url:'/logout'
        })
        window.cookie.remove('token')
        window.cookie.remove('uid')
        const action = {
            type: USER_EXIT
        }
        dispatch ( action )
    }
}