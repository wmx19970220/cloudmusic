import React , { Component, } from 'react';
import { UserContent,UserListBox,UserListItem,UserText } from './style'

class UserList extends Component {
    render () {
        return (
            <UserContent>
                <UserText> 用户榜 </UserText>
                <UserListBox>
                    <UserListItem>
                        <img src ="/img/daren.png" alt = ""/>
                        <p> 音乐达人榜 </p>
                    </UserListItem>
                    <UserListItem>
                        <img src ="/img/xinren.png" alt =""/>
                        <p> 音乐新人榜 </p>
                    </UserListItem>
                </UserListBox>              
            </UserContent>

        )
    };
};

export default UserList;