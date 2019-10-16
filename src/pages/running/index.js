import React, { Component } from 'react';
import {RunningContainer} from './RunningStyle'
import {NavLink} from 'react-router-dom'

class Running extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        }
    }

    goBack = () =>{
        const { push } = this.props.history
        push('/home')
    }


    render() { 
        return (
            <RunningContainer>
                <div className="running-box">
                    <div className="top-bar">
                        <span className="iconfont left" onClick={this.goBack}>&#xe603;</span>
                        <div className="fm-category">
                            <div>
                                <NavLink to="/per_fm">
                                    <span className="iconfont">&#xe850;</span>
                                    <span>私人FM</span>
                                </NavLink>
                                
                            </div>
                            <div>
                                <NavLink to="/running" activeClassName="active">
                                    <span className="iconfont">&#xe655;</span>
                                    <span>跑步FM</span>
                                </NavLink>
                            </div> 
                        </div>
                        <span className="right"></span>
                    </div>
                    <div className="running-content">
                        <div className="running-wrapper">
                            <div className="timer">
                                <div>
                                     _ _ _
                                </div>
                                <span className="info">步/分钟</span>
                            </div>
                            <h1>跑步FM</h1>
                            <p>将根据你的步频播放适合的音乐</p>
                        </div>
                        
                    </div>
                </div>
            </RunningContainer> 
            
        );
    }
}
 
export default Running;