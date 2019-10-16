import React , { Component,Fragment } from 'react';
import OfficeList from 'pages/leaderboard/home_pages/officelist';
import GlobalList from '../globallist';
import UserList from '../userlist';
import Head from '../head';


class Charts extends Component {

    render () {
        return (
            <Fragment>
                <Head history={this.props.history}></Head>
                <div style = {{height:`${document.documentElement.clientHeight-50*(document.documentElement.clientHeight/667)}px`,overflowY:'auto',overflowX:'hidden'}} >
                    <OfficeList ></OfficeList>
                    <GlobalList></GlobalList>
                    <UserList></UserList>
                </div>
            </Fragment>
        )
    };
    componentWillUnmount(){
        this.setState(()=>{
            return
        })
    }
};

export default Charts;