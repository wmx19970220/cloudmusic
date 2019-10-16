import React ,{ Component } from 'react';
import axios from 'axios';
import { OfficeContent,SoaringText,SoaringList,SoaringListImg, SoaringListContent } from './style'
import { Link } from 'react-router-dom';


class OfficeList extends Component {

    constructor ( props ) {
        super ( props );
        this.state = {
            /* 飙升榜 */
            Soaring_lists : [],
            Soaring_imgUrl : '',
            /* 新歌榜 */
            NewSongs_lists : [],
            NewSongs_ImgUrl : '',
            /* 原创榜 */
            OriginalList : [],
            OriginalImgUrl : '',
            /*  热歌榜 */
            HotSong_lists : [],
            HotSong_ImgUrl : '',
            /* 歌手榜 */
            Songer_lists : [],
            /* 周榜 */
            Week_lists : [],
            Week_ImgUrl : '',
            /* 金曲榜 */
            GoodSong_lists : [],
            GoodSong_ImgUrl : ''
        }
    };

    /* 飙升榜 */
    renderSoaringList = () => {
        return this.state.Soaring_lists.tracks && this.state.Soaring_lists.tracks.slice(0,3).map( (item,index) => {
            return (
                <p key = { item.id }> { index + 1 }.{ item.name } - { item.ar[0].name } </p>
            )
        } )
    }

    /* 新歌榜 */
    renderNewSongs = () => {
        return this.state.NewSongs_lists.tracks && this.state.NewSongs_lists.tracks.slice(0,3).map( (item,index) => {
            return (
                <p key = { item.id }> { index + 1 }.{ item.name } - { item.ar[0].name } </p>
            )
        } )
    }

    /* 原创榜 */
    renderOriginalList = () => {
        return this.state.OriginalList.tracks && this.state.OriginalList.tracks.slice(0,3).map( (item,index) => {
            return (
                <p key = { item.id }>  { index + 1 }.{ item.name } - { item.ar[0].name } </p>
            )
        } )
    }

    /*  热歌榜 */
    renderHotSongList = () => {
        return this.state.HotSong_lists.tracks && this.state.HotSong_lists.tracks.slice(0,3).map( (item,index) => {
            return (
                <p key = { item.id }> { index + 1 }.{ item.name } - { item.ar[0].name } </p>
            )
        } )
    }

    /* 歌手榜 */
    renderSongerList = () => {
        return this.state.Songer_lists && this.state.Songer_lists.slice(0,3).map( (item,index) => {
            return (
                <p key = { item.id }> { index + 1 }.{ item.name } &nbsp;&nbsp;&nbsp;&nbsp; hot ：{ item.score } </p>
            )
        } )
    }

     /* 周榜 */
     renderWeekList = () => {
        return this.state.Week_lists.tracks && this.state.Week_lists.tracks.slice(0,3).map( (item,index) => {
            return (
                <p key = { item.id }>  { index + 1 }.{ item.name } - { item.ar[0].name } </p>
            )
        } )
    }

     /* 金曲榜 */
     renderGoodSongList = () => {
        return this.state.GoodSong_lists.tracks && this.state.GoodSong_lists.tracks.slice(0,3).map( (item,index) => {
            return (
                <p key = { item.id }>  { index + 1 }.{ item.name } - { item.ar[0].name } </p>
            )
        } )
    }

    render () {
        const { Soaring_imgUrl,NewSongs_ImgUrl,OriginalImgUrl,HotSong_ImgUrl,GoodSong_ImgUrl } = this.state
        return (
            <OfficeContent>
                <SoaringText> 官方榜 </SoaringText>

                {/* 飙升榜 */}
                <Link
                    to = {{
                        pathname :"/officeRoute",
                        search :`?idx=3`
                    }}
                >
                    <SoaringList>
                        <SoaringListImg>               
                            <img src = { Soaring_imgUrl && Soaring_imgUrl } alt = ""/> 
                        </SoaringListImg>
                        <SoaringListContent>
                            { this.renderSoaringList() }
                        </SoaringListContent>
                    </SoaringList>
                </Link>

                {/* 新歌榜 */}
                <Link
                    to = {{
                        pathname : "/officeRoute",
                        search : `?idx=0`
                    }}
                   
                >
                    <SoaringList>
                        <SoaringListImg>
                        
                            <img src = { NewSongs_ImgUrl && NewSongs_ImgUrl } alt = ""/> 
                        </SoaringListImg>
                        <SoaringListContent>
                            { this.renderNewSongs() }
                        </SoaringListContent>
                    </SoaringList>
                </Link>

                 {/* 原创榜 */}
                 <Link
                    to = {{
                        pathname : "/officeRoute",
                        search : `?idx=2`
                    }}
                >
                    <SoaringList>
                        <SoaringListImg>
                        
                            <img src = { OriginalImgUrl && OriginalImgUrl } alt = ""/> 
                        </SoaringListImg>
                        <SoaringListContent>
                            { this.renderHotSongList() }
                        </SoaringListContent>
                    </SoaringList>
                </Link>

                {/* 热歌榜 */}
                <Link
                     to = {{
                        pathname : "/officeRoute",
                        search : `?idx=1`
                    }}
                >
                    <SoaringList>
                        <SoaringListImg>
                        
                            <img src = { HotSong_ImgUrl && HotSong_ImgUrl } alt = ""/> 
                        </SoaringListImg>
                        <SoaringListContent>
                            { this.renderOriginalList() }
                        </SoaringListContent>
                    </SoaringList>
                </Link>

                {/* 周榜 */}
                <Link
                    to = {{
                        pathname : "/officeRoute",
                        search : `?idx=5`
                    }}
                >
                    <SoaringList>
                        <SoaringListImg>                
                            <img src = "/img/zanshang.png" alt = ""/> 
                        </SoaringListImg>
                        <SoaringListContent>
                            { this.renderWeekList() }
                        </SoaringListContent>
                    </SoaringList>
                </Link>

                {/* 歌手榜 */}
                <SoaringList>
                    <SoaringListImg>
                    
                        <img src = "/img/songer.png" alt = ""/> 
                    </SoaringListImg>
                    <SoaringListContent>
                        { this.renderSongerList() }
                    </SoaringListContent>
                </SoaringList>

                 {/* 金曲榜 */}
                 <Link
                    to = {{
                        pathname : "/officeRoute",
                        search : `?idx=17`
                    }}
                >
                    <SoaringList>
                        <SoaringListImg>                
                            <img src = { GoodSong_ImgUrl && GoodSong_ImgUrl } alt = ""/> 
                        </SoaringListImg>
                        <SoaringListContent>
                            { this.renderGoodSongList() }
                        </SoaringListContent>
                    </SoaringList>
                </Link>

            </OfficeContent>
        )
    }

    componentDidMount () {

        axios ({
            url : '/top/list',
            params : {
               idx : 3
            }
        }).then ( res => { 
            this.setState({
                Soaring_lists : res.data.playlist,
                Soaring_imgUrl : ""+res.data.playlist.coverImgUrl
            })
         } )
        .catch ( err => { console.log( err ) } );
        /* 新歌榜 */
        axios ({
            url : '/top/list',
            params : {
               idx : 0
            }
        }).then ( res => { 
            this.setState({
                NewSongs_lists : res.data.playlist,
                NewSongs_ImgUrl : ""+res.data.playlist.coverImgUrl
            })
         } )
        .catch ( err => { console.log( err ) } );
        /* 原创榜 */
        axios ({
            url : '/top/list',
            params : {
               idx : 2
            }
        }).then ( res => { 
            this.setState({
                OriginalList : res.data.playlist,
                OriginalImgUrl : ""+res.data.playlist.coverImgUrl
            })
         } )
        .catch ( err => { console.log( err ) } );
        /* 热歌榜 */
        axios ({
            url : '/top/list',
            params : {
               idx : 1
            }
        }).then ( res => { 
            this.setState({
                HotSong_lists : res.data.playlist,
                HotSong_ImgUrl : ""+res.data.playlist.coverImgUrl
            })
         } )
        .catch ( err => { console.log( err ) } );
        /* 周榜 */
        axios ({
            url : '/top/list',
            params : {
               idx : 5
            }
        }).then ( res => { 
            this.setState({
                Week_lists : res.data.playlist,
            })
         } )
        .catch ( err => { console.log( err ) } );
        /* 歌手榜 */
        axios({
            url : '/toplist/artist'
        }).then( res => {
            this.setState({
                Songer_lists : res.data.list.artists,
            })
        } )
        .catch( err => { console.log( err ) } )
        /* 金曲榜 */
        axios ({
            url : '/top/list',
            params : {
               idx : 17
            }
        }).then ( res => {
            this.setState({
                GoodSong_lists : res.data.playlist,
                GoodSong_ImgUrl : ""+res.data.playlist.coverImgUrl
            })
         } )
        .catch ( err => { console.log( err ) } );
    }
};

export default OfficeList;