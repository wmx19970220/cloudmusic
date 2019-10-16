import React, { Component } from 'react';
import { BackContainer } from './indexstyle'
class Back_header extends Component{
    constructor(props){
        super(props)
    }

    goBack = () => {
        const { go } = this.props.history
        go( -1 )
    }

    render(){
        const { name } = this.props
        return(
            <BackContainer>
                <div className = "icon_box">
                    <i  className="fa fa-chevron-left" aria-hidden="true" onClick = { this.goBack }></i>
                    <span className = "header_title"> { name } </span>
                </div>
            </BackContainer>
        )
    }
}

export default Back_header