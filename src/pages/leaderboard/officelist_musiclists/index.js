import React , { Component } from 'react';
import { Content,TopBg,TopContent,MusicLists,ListTop,ListItemContent,HeadBox,SearchBox,SearchContent } from './style';
import qs from 'querystring';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Soaring extends Component {

    constructor ( props ) {
        super ( props );
        this.state = {
            name : '',
            lists : null ,
            flag : false ,
            search_flag : false ,
            searchContent : null
        }
    }

    changeSearchFlag = () => {
        this.setState({
            search_flag : true
        })
    }
    closeSearchFlag = () => {
        this.setState({
            search_flag : false
        })
    }
    search = (e) => {
        if(e.target.value){

        axios({
            url : '/search',
            params : {
                keywords : e.target.value
            }
        }).then( res => {
            this.setState({
                searchContent : res.data.result.songs
            })
        } )
        .catch( err => console.log( err ) )
                    
    }else{
        this.setState({
            searchContent : []
        })
    }
    }
    searchRender = () => {
        return  this.state.searchContent && this.state.searchContent.map( (item,index) => {
            return (
                
                <SearchContent
                key = { index }
                >
                    <Link to = {{
                        pathname : '/Audio',
                        search : `?id=${item.id}&&picUrl=${ item.artists[0].img1v1Url }&index=${index}`,
                        state : this.state.searchContent 
                    }}
                    >
                        <span> { index } </span>
                        <div>
                        <p className = "p_top"> { item.name } </p>
                        <p className = "p_bottom">{ item.artists[0].name } - { item.name } </p>
                        
                        </div>
                    <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </Link>
                </SearchContent>
            )
        } )
        }


    back = () => {
        this.props.history.go(-1) 
    }

    openFlag = () => {
        this.setState({
            flag : true
        })
    }

    closeFlag = ( e ) => {
        // e.stopPropagation(); 
        if(e.target.className !== 'fa fa-caret-square-o-down' ){
            this.setState({
                flag : false
            }) 
        }
    }

    renderList = () => {
        return this.state.lists && this.state.lists.tracks.map ( (item,index) => {

            return (              
                    <div className = "list_item"   key = { item.id }>
                        <Link
                            to = {{
                                pathname : '/audio',
                                search : `?id=${ item.id }&picUrl=${ item.al.picUrl }&index=${index}&songer=${item.ar[0].name}&songName=${item.name}`,
                                state : this.state.lists.tracks
                            }}                 
                        >
                        <div className ="list_num" style = {{  width : '.24rem'}}>
                            { index + 1 }
                        </div>
                        <ListItemContent>
                            <p> { item.name } </p>
                            <span> { item.ar[0].name } - { item.name } </span>
                        </ListItemContent>
                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                        </Link>
                    </div>
               
            )
        })
    }

    render () {
        const { lists,name,search_flag } = this.state ;
        return (
           <Content onClick = { this.closeFlag }>
               <TopBg>
                    <HeadBox>
                            <i 
                                className="fa fa-arrow-left" 
                                aria-hidden="true"
                                onClick = { this.back }
                            ></i>
                            <span> 排行榜 </span>
                            <i className="fa fa-search" aria-hidden="true" style = {{
                                color : 'white',
                                fontSize : '.25rem' ,
                                marginRight : '.15rem' ,
                                float : 'right',
                            }}
                            onClick = { this.changeSearchFlag }></i>
                            { search_flag && <SearchBox>
                            <div className = "search_top">
                                <i className="fa fa-arrow-left" aria-hidden="true"
                                onClick = { this.closeSearchFlag }
                                ></i>
                                <input type = "text" ref = { el => this.inp = el } 
                                onKeyUp = { this.search }
                                />
                            </div>
                            { this.searchRender() }
               </SearchBox> } 
                    </HeadBox>

                   <TopContent>
                        <div className ="biaoshengbang">{ name && name }
                            <i className="fa fa-caret-square-o-down" aria-hidden="true" onClick = { this.openFlag }>
                                {/* { flag && <div className = "sanjiao"> </div>} */}
                            </i> 
                        </div>
                        {/* { flag && <div className = "description"> { lists.description } </div> } */}
                        <div className = "choose"> 
                            <ul>
                                <li> <i className="fa fa-comment-o" aria-hidden="true"></i> <p> {  lists && (lists.commentCount/10000).toFixed(1) }万 </p> </li>
                                <li> <i className="fa fa-link" aria-hidden="true"></i> <p> { lists && lists.shareCount } </p> </li>
                                <li> <i className="fa fa-download" aria-hidden="true"></i> <p> 下载 </p> </li>
                                <li> <i className="fa fa-check-square-o" aria-hidden="true"></i> <p> 多选 </p> </li>
                            </ul>
                        </div>
                   </TopContent>
                </TopBg>
                <MusicLists>
                    <ListTop>
                        <div className = "listTop_left">
                            <i className="fa fa-play-circle" aria-hidden="true"></i>  
                            <span>  播放全部 <b> (共{ lists && lists.tracks.length }首)</b> </span>                          
                        </div>
                        <div className = "listTop_right"> +  收藏({ lists && (lists.subscribedCount/10000).toFixed(1) }万) </div>
                    </ListTop>
                    <div className = "list_box">
                        { this.renderList() }
                    </div>
                </MusicLists>
           </Content>
        )
    };

    componentDidMount () {
        const id  = qs.parse( this.props.location.search.slice(1) );
        axios ({
            url : '/top/list',
            params : {
               idx : id.idx
            }
        }).then ( res => { 
            // console.log( res )
            this.setState({
                lists : res.data.playlist ,
                name : res.data.playlist.name 
            })
         } )
        .catch ( err => { console.log( err ) } );
    }
};

export default Soaring;