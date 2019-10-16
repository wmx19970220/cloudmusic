import React , { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { TopBg , TopContent ,InfoBox,Page,ListItemContent,MusicLists,ListTop,HeadBox,SearchContent,SearchBox } from './style';
import qs from 'querystring';

class Soaring extends Component {

    labelRender = () => {
        return this.state.label && this.state.label.map( ( item , index ) => {
          return  <span key = { index + 1 } style = {{
                padding : '0 .05rem' ,
                lineHeight : '.2rem' ,
                fontSize : '.12rem' ,
                color : '#F7F7F7' ,
                border : '1px solid white' ,
                borderRadius : '.1rem',
                margin : '0 .05rem'
            }}> { item } </span>
        }  )
    }

    constructor ( props ) {
        super ( props ) ;
        this.state = {
            img : '' ,
            lists : null ,
            flag : false ,           
            name : '',
            detail_flag : false ,
            label : null ,
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

 
    openFlag = () => {
        this.setState({
            detail_flag : true
        })
    }

    closeFlag = ( e ) => {
        if(e.target.className !== 'fa fa-info-circle info' ){
            this.setState({
                detail_flag : false
            }) 
        }
    }

    
    back = () => {
        this.props.history.go(-1) 
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
        const { lists,img,detail_flag,search_flag } = this.state ;
        return (
        <Page onClick = { this.closeFlag }>
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
                }} onClick = { this.changeSearchFlag }></i>

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

            <TopBg>
                <TopContent>
                    <div className = "topcontent_box"> 

                        <div className = "leftbox"> 

                            <img src = { img } alt = ""/>

                            <p className = "img_content">
                                <i className="fa fa-headphones" aria-hidden="true"></i>
                                <span> { lists && (lists.playCount/100000000).toFixed(1) }亿 </span>
                            </p>

                            <i 
                                className="fa fa-info-circle info" 
                                aria-hidden="true"
                                onClick = { this.openFlag }
                            ></i>

                            { detail_flag && 
                                <InfoBox> 
                                    <p style = {{
                                        textAlign : 'right' 
                                    }}> 
                                        <i className="fa fa-times" aria-hidden="true" style = {{
                                            color : 'white' ,
                                            fontSize : '.24rem',
                                            lineHeight : '.45rem',
                                            marginRight : '.25rem'
                                        }}></i> 
                                    </p>

                                    <img src ={ img } alt = "" id = "img-img"/>
                                    <p className = "title"> { lists && lists.name } </p>
                                    <p className = "label"> 标签： { this.labelRender() }  </p>
                                    <p className = "description"> { lists && lists.description } </p>

                                </InfoBox> }

                            </div>
 
                            <div className = "rightbox">

                                <p className = "name"> { lists && lists.name } </p>
    
                                <div className = "office_info">
                                    <img src = "/img/logo.jpg" alt = ""/>
                                    <span style = {{
                                    }}> 网易云音乐 > </span>
                                </div>

                            </div>
                        </div>
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
                            <span style = {{lineHeight : '.35rem'}}>  播放全部 <b> (共{ lists && lists.tracks.length }首)</b> </span>                          
                        </div>
                        <div className = "listTop_right"> +  收藏({ lists && (lists.subscribedCount/10000).toFixed(1) }万) </div>
                    </ListTop>
                    <div className = "list_box">
                        { this.renderList() }
                    </div>
                </MusicLists>

            </Page>
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
            this.setState({
                lists : res.data.playlist ,
                name : res.data.playlist.name ,
                img : res.data.playlist.coverImgUrl ,
                label : res.data.playlist.tags
            })
         } )
        .catch ( err => { console.log( err ) } );
    }



};

export default Soaring;