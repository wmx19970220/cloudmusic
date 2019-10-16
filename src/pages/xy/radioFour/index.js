import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { RadioFourStyle } from './RadioFourStyle'

class RadioFour extends Component {
    constructor(props) {
        super(props)
        this.state = {
            radiofour: [
                {
                    id: 1,
                    name: '电台分类',
                    iconName: 'th',
                    path: '/radioFour_1'
                },
                {
                    id: 2,
                    name: '电台排行',
                    iconName: 'list-ol',
                    path: '/radioFour_2'
                },
                {
                    id: 3,
                    name: '付费精品',
                    iconName: 'diamond',
                    path: '/radioFour_3'
                },
                {
                    id: 4,
                    name: '音乐课堂',
                    iconName: 'music',
                    path: ''
                },
            ]
        }
    }

    renderFour = () => {
        return this.state.radiofour.map(item => {
            return (
                <li key={item.id}>
                    <Link to={item.path}>
                        <div className="circle">
                            <i className={'fa fa-' + item.iconName}></i>
                        </div>
                        <span> {item.name} </span>
                    </Link>
                </li>
            )
        })
    }
    render() {
        return (
            <RadioFourStyle>
                {this.renderFour()}
            </RadioFourStyle>
        );
    }
}
export default RadioFour