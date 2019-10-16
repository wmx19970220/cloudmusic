import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import {TitleContainer} from './TitleStyle'

class Title extends Component {
    
    render() { 
        return (
            <TitleContainer>
                <ul>
                    <li>
                        <NavLink to='/home/recommend' activeClassName="active">
                            <span>推荐</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/home/friend' activeClassName="active">
                            <span>朋友</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/home/radio' activeClassName="active">
                            <span>电台</span>
                        </NavLink>
                    </li>
                </ul>
            </TitleContainer>
         );
    }
}
 
export default Title;