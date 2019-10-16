import React,{ Component } from 'react' ;
import {HeadBox} from './style' ;

class Head extends Component {

    back = () => {
        this.props.history.go(-1) 
    }

    render () {
        return (
           <HeadBox>
            <i 
                className="fa fa-arrow-left" 
                aria-hidden="true"
                onClick = { this.back }
            ></i>
            <span> 排行榜 </span>
            
            </HeadBox>
        )
    };
};

export default Head ;