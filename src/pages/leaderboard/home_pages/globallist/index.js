import React ,{ Component } from 'react';
import { GlobalContent,GlobalListBox,GlobalListItem,GlobalText } from './style';
import { Link } from 'react-router-dom';
//  import http from 'utils/http';
import axios from 'axios'

class GlobalList extends Component {

    constructor ( props ) {
        super ( props ) ;
        this.state = {
            /* 说唱榜 */
            RapName : '',
            RapImg : '',
            /* 古典音乐榜 */
            ClassicalName : '',
            ClassicalImg : '',
            /* 电音榜 */
            EleMusicName : '',
            EleMusicImg : '',
            /* 抖音榜 */
            TrillName : '',
            TrillImg : '',
            /* 新歌榜 */
            NewSongName : '',
            NewSongImg : '',
            /* ACG音乐榜 */
            ACGName : '',
            ACGImg : '',
            /* 韩语榜 */
            KoreanName : '',
            KoreanImg : '',
            /* 国电榜 */
            GuodianName : '',
            GuodianImg : '',
            /* Q杂志中文版周榜 */
            QName : '',
            QImg : '',
            /* 电竞音乐榜 */
            EsportsName : '',
            EsportsImg : '',
            /* UK排行榜周榜 */
            WeekName : '',
            WeekImg : '',
            /* Billboard周榜 */
            BillboardName : '',
            BillboardImg : '',
            /* Beatport全球电子舞曲榜 */
            BeatportName : '',
            BeatportImg : '',
            /* KTV唛榜 */
            KTVName : '',
            KTVImg : '',
            /* iTunes榜 */
            iTunesName : '',
            itunesImg : '',
            /* 日本Oricon周榜 */
            OriconName : '',
            OriconImg : '',
            /* Hit FM Top榜 */
            HitName : '',
            HitImg : '',
            /* 台湾Hito排行榜 */
            HitoName : '',
            HitoImg : '',
            /* 云音乐欧美热歌榜 */
            Eu_and_Am_hot_name : '',
            Eu_and_Am_hot_img : '',
            /* 云音乐欧美新歌榜 */
            Eu_and_Am_new_name : '',
            Eu_and_Am_new_img : '',
            /* 说唱TOP榜 */
            RapTopName : '',
            RapTopImg : '',
            /* 法国NRJ Vos Hits 周榜 */
            NRJName : '',
            NRJImg : ''
        }
    }

    render () {
        const { 
            RapName,RapImg,
            ClassicalName,ClassicalImg,
            EleMusicName,EleMusicImg,
            TrillName,TrillImg,
            NewSongName,NewSongImg,
            ACGName,ACGImg,
            KoreanName,KoreanImg,
            GuodianName,GuodianImg,
            QName,QImg,
            EsportsName,EsportsImg,
            WeekName,WeekImg,
            BillboardName,BillboardImg,
            BeatportName,BeatportImg,
            KTVName,KTVImg,
            iTunesName,iTunesImg,
            OriconName,OriconImg,
            HitName,HitImg,
            HitoName,HitoImg,
            Eu_and_Am_hot_name,Eu_and_Am_hot_img,
            Eu_and_Am_new_name,Eu_and_Am_new_img,
            RapTopName,RapTopImg,
            NRJName,NRJImg } = this.state;
        return (
            <GlobalContent>
                <GlobalText> 全球榜 </GlobalText>           
                <GlobalListBox>

                {/* 说唱榜 */}
                    <Link
                        to = {{
                            pathname :"/globalRoute",
                            search :`?idx=23`
                        }}
                    >
                        <GlobalListItem>
                            <img src = { RapImg } alt = ""/>
                            <p> { RapName } </p>
                        </GlobalListItem>
                    </Link>

                {/* 古典音乐榜  */}
                    <Link
                        to = {{
                            pathname :"/globalRoute",
                            search :`?idx=24`
                        }}
                    >
                        <GlobalListItem>
                            <img src = { ClassicalImg } alt = ""/>
                            <p> { ClassicalName } </p>
                        </GlobalListItem>
                    </Link>

                {/* 电音榜  */}
                    <Link
                        to = {{
                            pathname :"/globalRoute",
                            search :`?idx=25`
                        }}
                    >
                        <GlobalListItem>
                            <img src = { EleMusicImg } alt = ""/>
                            <p> { EleMusicName } </p>
                        </GlobalListItem>
                    </Link>

                {/* 抖音榜  */}
                    <Link
                        to = {{
                            pathname :"/globalRoute",
                            search :`?idx=26`
                        }}
                    >
                        <GlobalListItem>
                            <img src = { TrillImg } alt = ""/>
                            <p> { TrillName } </p>
                        </GlobalListItem>
                    </Link>

                {/* 新歌榜  */}
                    <Link
                        to = {{
                            pathname :"/globalRoute",
                            search :`?idx=0`
                        }}
                    >
                        <GlobalListItem>
                            <img src = { NewSongImg } alt = ""/>
                            <p> { NewSongName } </p>
                        </GlobalListItem>
                    </Link>

                {/* ACG音乐榜  */}
                    <Link
                        to = {{
                            pathname :"/globalRoute",
                            search :`?idx=22`
                        }}
                    >
                        <GlobalListItem>
                            <img src = { ACGImg } alt = ""/>
                            <p> { ACGName } </p>
                        </GlobalListItem>
                    </Link>

                {/* 韩语榜  */}
                    <Link
                        to = {{
                            pathname :"/globalRoute",
                            search :`?idx=28`
                        }}
                    >
                        <GlobalListItem>
                            <img src = { KoreanImg } alt = ""/>
                            <p> { KoreanName } </p>
                        </GlobalListItem>
                    </Link>

                {/* 国电榜  */}
                   <Link
                        to = {{
                            pathname :"/globalRoute",
                            search :`?idx=17`
                        }}
                    >
                        <GlobalListItem>
                            <img src = { GuodianImg } alt = ""/>
                            <p> { GuodianName } </p>
                        </GlobalListItem>
                    </Link>

                {/* Q杂志中文版周榜  */}
                    <Link
                        to = {{
                            pathname :"/globalRoute",
                            search :`?idx=29`
                        }}
                    >
                        <GlobalListItem>
                            <img src = { QImg } alt = ""/>
                            <p> { QName } </p>
                        </GlobalListItem>
                    </Link>

                {/* 电竞音乐榜  */}
                    <Link
                        to = {{
                            pathname :"/globalRoute",
                            search :`?idx=30`
                        }}
                    >
                        <GlobalListItem>
                            <img src = { EsportsImg } alt = ""/>
                            <p> { EsportsName } </p>
                        </GlobalListItem>
                    </Link>

                {/* UK排行榜周榜  */}
                    <Link
                        to = {{
                            pathname :"/globalRoute",
                            search :`?idx=5`
                        }}
                    >
                        <GlobalListItem>
                            <img src = { WeekImg } alt = ""/>
                            <p> { WeekName } </p>
                        </GlobalListItem>
                    </Link>

                {/* Billboard周榜  */}
                    <Link
                        to = {{
                            pathname :"/globalRoute",
                            search :`?idx=6`
                        }}
                    >
                        <GlobalListItem>
                            <img src = { BillboardImg } alt = ""/>
                            <p> { BillboardName } </p>
                        </GlobalListItem>
                    </Link>

                {/* Beatport全球电子舞曲榜  */}
                    <Link
                        to = {{
                            pathname :"/globalRoute",
                            search :`?idx=21`
                        }}
                    >
                        <GlobalListItem>
                            <img src = { BeatportImg } alt = ""/>
                            <p> { BeatportName } </p>
                        </GlobalListItem>
                    </Link>

                {/* KTV唛榜  */}
                    <Link
                        to = {{
                            pathname :"/globalRoute",
                            search :`?idx=7`
                        }}
                    >
                        <GlobalListItem>
                            <img src = { KTVImg } alt = ""/>
                            <p> { KTVName } </p>
                        </GlobalListItem>
                    </Link>

                {/* iTunes榜  */}
                    <Link
                        to = {{
                            pathname :"/globalRoute",
                            search :`?idx=8`
                        }}
                    >
                        <GlobalListItem>
                            <img src = { iTunesImg } alt = ""/>
                            <p> { iTunesName } </p>
                        </GlobalListItem>
                    </Link>

                {/* 日本Oricon周榜  */}
                    <Link
                        to = {{
                            pathname :"/globalRoute",
                            search :`?idx=10`
                        }}
                    >
                        <GlobalListItem>
                            <img src = { OriconImg } alt = ""/>
                            <p> { OriconName } </p>
                        </GlobalListItem>
                    </Link>

                {/* Hit FM Top榜  */}
                    <Link
                        to = {{
                            pathname :"/globalRoute",
                            search :`?idx=9`
                        }}
                    >
                        <GlobalListItem>
                            <img src = { HitImg } alt = ""/>
                            <p> { HitName } </p>
                        </GlobalListItem>
                    </Link>

                {/* 台湾Hito排行榜  */}
                    <Link
                        to = {{
                            pathname :"/globalRoute",
                            search :`?idx=20`
                        }}
                    >
                        <GlobalListItem>
                            <img src = { HitoImg } alt = ""/>
                            <p> { HitoName } </p>
                        </GlobalListItem>
                    </Link>

                {/* 云音乐欧美热歌榜  */}
                    <Link
                        to = {{
                            pathname :"/globalRoute",
                            search :`?idx=31`
                        }}
                    >
                        <GlobalListItem>
                            <img src = { Eu_and_Am_hot_img } alt = ""/>
                            <p> { Eu_and_Am_hot_name } </p>
                        </GlobalListItem>
                    </Link>

                {/* 云音乐欧美新歌榜  */}
                    <Link
                        to = {{
                            pathname :"/globalRoute",
                            search :`?idx=32`
                        }}
                    >
                        <GlobalListItem>
                            <img src = { Eu_and_Am_new_img } alt = ""/>
                            <p> { Eu_and_Am_new_name } </p>
                        </GlobalListItem>
                    </Link>

                {/* 说唱TOP榜  */}
                    <Link
                        to = {{
                            pathname :"/globalRoute",
                            search :`?idx=33`
                        }}
                    >
                        <GlobalListItem>
                            <img src = { RapTopImg } alt = ""/>
                            <p> { RapTopName } </p>
                        </GlobalListItem>
                    </Link>

                {/* 法国NRJ Vos Hits 周榜  */}
                    <Link
                        to = {{
                            pathname :"/globalRoute",
                            search :`?idx=19`
                        }}
                    >
                        <GlobalListItem>
                            <img src = { NRJImg } alt = ""/>
                            <p> { NRJName } </p>
                        </GlobalListItem>
                    </Link>

                </GlobalListBox>
            </GlobalContent>    
        )
    };

    componentDidMount () {

        //   setTimeout( async () => {
        //      const shuochang1 = await http({
        //          url : '/top/list',
        //          params : {
        //             idx : 23
        //          }
        //      })
            
        //      const gudian1 = await http({
        //         url : '/top/list',
        //         params : {
        //            idx : 24
        //         }
        //     })

        //     const dianyin1 = await http({
        //         url : '/top/list',
        //         params : {
        //            idx : 25
        //         }
        //     })

        //     const douyin1 = await http({
        //         url : '/top/list',
        //         params : {
        //            idx : 26
        //         }
        //     })

        //     const xinge1 = await http({
        //         url : '/top/list',
        //         params : {
        //            idx : 0
        //         }
        //     })

        //     const acg1 = await http({
        //         url : '/top/list',
        //         params : {
        //            idx : 22
        //         }
        //     })

        //     const hanyu1 = await http({
        //         url : '/top/list',
        //         params : {
        //            idx : 28
        //         }
        //     })

        //     const guodian1 = await http({
        //         url : '/top/list',
        //         params : {
        //            idx : 17
        //         }
        //     })

        //     const qzashi1 = await http({
        //         url : '/top/list',
        //         params : {
        //            idx : 29
        //         }
        //     })

        //     const dianjing1 = await http({
        //         url : '/top/list',
        //         params : {
        //            idx : 30
        //         }
        //     })

        //     const uk1 = await http({
        //         url : '/top/list',
        //         params : {
        //            idx : 5
        //         }
        //     })

        //     const bill1 = await http({
        //         url : '/top/list',
        //         params : {
        //            idx : 6
        //         }
        //     })

        //     const beat1 = await http({
        //         url : '/top/list',
        //         params : {
        //            idx : 21
        //         }
        //     })

        //     const ktv1 = await http({
        //         url : '/top/list',
        //         params : {
        //            idx : 7
        //         }
        //     })

        //     const itu1 = await http({
        //         url : '/top/list',
        //         params : {
        //            idx : 8
        //         }
        //     })

        //     const riben1 = await http({
        //         url : '/top/list',
        //         params : {
        //            idx : 10
        //         }
        //     })

        //     const hit1 = await http({
        //         url : '/top/list',
        //         params : {
        //            idx : 9
        //         }
        //     })

        //     const taiwan1 = await http({
        //         url : '/top/list',
        //         params : {
        //            idx : 20
        //         }
        //     })

        //     const oumeirege1 = await http({
        //         url : '/top/list',
        //         params : {
        //            idx : 31
        //         }
        //     })

        //     const oumei1 = await http({
        //         url : '/top/list',
        //         params : {
        //            idx : 32
        //         }
        //     })

        //     const shuochangTop1 = await http({
        //         url : '/top/list',
        //         params : {
        //            idx : 33
        //         }
        //     })

        //     const faguo1 = await http({
        //         url : '/top/list',
        //         params : {
        //            idx : 19
        //         }
        //     })


        //      this.setState({
        //         RapName : shuochang1.data.playlist,
        //         RapImg : shuochang1.data.playlist.coverImgUrl,
        //         ClassicalName : gudian1.data.playlist,
        //         ClassicalImg : gudian1.data.playlist.coverImgUrl,
        //         EleMusicName : dianyin1.data.playlist,
        //         EleMusicImg : dianyin1.data.playlist.coverImgUrl,
        //         TrillName : douyin1.data.playlist,
        //         TrillImg : douyin1.data.playlist.coverImgUrl,
        //         NewSongName : xinge1.data.playlist,
        //         NewSongImg : xinge1.data.playlist.coverImgUrl,
        //         ACGName : acg1.data.playlist,
        //         ACGImg : acg1.data.playlist.coverImgUrl,
        //         KoreanName : hanyu1.data.playlist,
        //         KoreanImg : hanyu1.data.playlist.coverImgUrl,
        //         GuodianName : guodian1.data.playlist,
        //         GuodianImg : guodian1.data.playlist.coverImgUrl,
        //         QName : qzashi1.data.playlist,
        //         QImg : qzashi1.data.playlist.coverImgUrl,
        //         EsportsName : dianjing1.data.playlist,
        //         EsportsImg : dianjing1.data.playlist.coverImgUrl,
        //         WeekName : uk1.data.playlist,
        //         WeekImg : uk1.data.playlist.coverImgUrl,
        //         BillboardName : bill1.data.playlist,
        //         BillboardImg : bill1.data.playlist.coverImgUrl,
        //         BeatportName : beat1.data.playlist,
        //         BeatportImg : beat1.data.playlist.coverImgUrl,
        //         KTVName : ktv1.data.playlist,
        //         KTVImg : ktv1.data.playlist.coverImgUrl,
        //         iTunesName : itu1.data.playlist,
        //         itunesImg : itu1.data.playlist.coverImgUrl,
        //         OriconName : riben1.data.playlist,
        //         OriconImg : riben1.data.playlist.coverImgUrl,
        //         HitName : hit1.data.playlist,
        //         HitImg :hit1.data.playlist.coverImgUrl,
        //         HitoName : taiwan1.data.playlist,
        //         HitoImg :taiwan1.data.playlist.coverImgUrl,
        //         Eu_and_Am_hot_name : oumeirege1.data.playlist,
        //         Eu_and_Am_hot_img : oumeirege1.data.playlist.coverImgUrl,
        //         Eu_and_Am_new_name : oumei1.data.playlist,
        //         Eu_and_Am_new_img : oumei1.data.playlist.coverImgUrl,
        //         RapTopName : shuochangTop1.data.playlist,
        //         RapTopImg : shuochangTop1.data.playlist.coverImgUrl,
        //         NRJName : faguo1.data.playlist,
        //         Soaring_imgUrl :faguo1.data.playlist.coverImgUrl
        //      })
        //  },0 )

        axios ({
            url : '/top/list',
            params : {
               idx : 23
            }
        }).then ( res => { 
            this.setState({
                RapName : res.data.playlist.name,
                RapImg : ""+res.data.playlist.coverImgUrl
            })
         } )
          /* 古典音乐榜 */
        axios ({
            url : '/top/list',
            params : {
               idx : 24
            }
        }).then ( res => { 
            this.setState({
                ClassicalName : res.data.playlist.name,
                ClassicalImg : ""+res.data.playlist.coverImgUrl
            })
         } )
          /* 电音榜 */
        axios ({
            url : '/top/list',
            params : {
               idx : 25
            }
        }).then ( res => { 
            this.setState({
                EleMusicName : res.data.playlist.name,
                EleMusicImg : ""+res.data.playlist.coverImgUrl
            })
         } )
           /* 抖音排行榜 */
        axios ({
            url : '/top/list',
            params : {
               idx : 26
            }
        }).then ( res => { 
            this.setState({
                TrillName : res.data.playlist.name,
                TrillImg : ""+res.data.playlist.coverImgUrl
            })
         } )
            /* 新歌榜 */
            axios ({
                url : '/top/list',
                params : {
                   idx : 0
                }
            }).then ( res => { 
                this.setState({
                    NewSongName : res.data.playlist.name,
                    NewSongImg : ""+res.data.playlist.coverImgUrl
                })
             } )
            /* ACG音乐榜 */
            axios ({
                url : '/top/list',
                params : {
                   idx : 22
                }
            }).then ( res => { 
                this.setState({
                    ACGName : res.data.playlist.name,
                    ACGImg : ""+res.data.playlist.coverImgUrl
                })
             } )
            /* 韩语榜 */
            axios ({
                url : '/top/list',
                params : {
                   idx : 28
                }
            }).then ( res => { 
                this.setState({
                    KoreanName : res.data.playlist.name,
                    KoreanImg : ""+res.data.playlist.coverImgUrl
                })
             } )
            /* 国电榜 */
            axios ({
                url : '/top/list',
                params : {
                   idx : 17
                }
            }).then ( res => { 
                this.setState({
                    GuodianName : res.data.playlist.name,
                    GuodianImg : ""+res.data.playlist.coverImgUrl
                })
             } )
            /* Q杂志中文版周榜 */
            axios ({
                url : '/top/list',
                params : {
                   idx : 29
                }
            }).then ( res => { 
                this.setState({
                    QName : res.data.playlist.name,
                    QImg : ""+res.data.playlist.coverImgUrl
                })
             } )
            /* 电竞音乐榜 */
            axios ({
                url : '/top/list',
                params : {
                   idx : 30
                }
            }).then ( res => { 
                this.setState({
                    EsportsName : res.data.playlist.name,
                    EsportsImg : ""+res.data.playlist.coverImgUrl
                })
             } )
            /* UK排行榜周榜 */
            axios ({
                url : '/top/list',
                params : {
                   idx : 5
                }
            }).then ( res => { 
                this.setState({
                    WeekName : res.data.playlist.name,
                    WeekImg : ""+res.data.playlist.coverImgUrl
                })
             } )
            /* Billboard周榜 */
            axios ({
                url : '/top/list',
                params : {
                   idx : 6
                }
            }).then ( res => { 
                this.setState({
                    BillboardName : res.data.playlist.name,
                    BillboardImg : ""+res.data.playlist.coverImgUrl
                })
             } )
            /* Beatport全球电子舞曲榜 */
            axios ({
                url : '/top/list',
                params : {
                   idx : 21
                }
            }).then ( res => { 
                this.setState({
                    BeatportName : res.data.playlist.name,
                    BeatportImg : ""+res.data.playlist.coverImgUrl
                })
             } )
            /* KTV唛榜 */
            axios ({
                url : '/top/list',
                params : {
                   idx : 7
                }
            }).then ( res => { 
                this.setState({
                    KTVName : res.data.playlist.name,
                    KTVImg : ""+res.data.playlist.coverImgUrl
                })
             } )
            /* iTunes榜 */
            axios ({
                url : '/top/list',
                params : {
                   idx : 8
                }
            }).then ( res => { 
                this.setState({
                    iTunesName : res.data.playlist.name,
                    iTunesImg : ""+res.data.playlist.coverImgUrl
                })
             } )
            /* 日本Oricon周榜 */
            axios ({
                url : '/top/list',
                params : {
                   idx : 10
                }
            }).then ( res => { 
                this.setState({
                    OriconName : res.data.playlist.name,
                    OriconImg : ""+res.data.playlist.coverImgUrl
                })
             } )
            /* Hit FM Top榜 */
            axios ({
                url : '/top/list',
                params : {
                   idx : 9
                }
            }).then ( res => { 
                this.setState({
                    HitName : res.data.playlist.name,
                    HitImg : ""+res.data.playlist.coverImgUrl
                })
             } )
            /* 台湾Hito排行榜 */
            axios ({
                url : '/top/list',
                params : {
                   idx : 20
                }
            }).then ( res => { 
                this.setState({
                    HitoName : res.data.playlist.name,
                    HitoImg : ""+res.data.playlist.coverImgUrl
                })
             } )
            /* 云音乐欧美热歌榜 */
            axios ({
                url : '/top/list',
                params : {
                   idx : 31
                }
            }).then ( res => { 
                this.setState({
                    Eu_and_Am_hot_name : res.data.playlist.name,
                    Eu_and_Am_hot_img : ""+res.data.playlist.coverImgUrl
                })
             } )
            /* 云音乐欧美新歌榜 */
            axios ({
                url : '/top/list',
                params : {
                   idx : 32
                }
            }).then ( res => { 
                this.setState({
                    Eu_and_Am_new_name : res.data.playlist.name,
                    Eu_and_Am_new_img : ""+res.data.playlist.coverImgUrl
                })
             } )
            /* 说唱TOP榜 */
            axios ({
                url : '/top/list',
                params : {
                   idx : 33
                }
            }).then ( res => { 
                this.setState({
                    RapTopName : res.data.playlist.name,
                    RapTopImg : ""+res.data.playlist.coverImgUrl
                })
             } )
            /* 法国NRJ Vos Hits 周榜 */
            axios ({
                url : '/top/list',
                params : {
                   idx : 19
                }
            }).then ( res => { 
                this.setState({
                    NRJName : res.data.playlist.name,
                    NRJImg : ""+res.data.playlist.coverImgUrl
                })
             } )


    }
    componentWillUnmount(){
        this.setState(()=>{
            return
        })
    }
};

export default GlobalList ;