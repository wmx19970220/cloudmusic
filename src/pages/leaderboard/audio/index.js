import React , { Component } from 'react';
import { 
    AudioContent,
    ImgBox,
    PayPage,
    VipType,
    TopBack,
    HuiseBg,
    PayLists,
    Baoyue,
    Del,
    Shieryue,
    Sangeyue,
    Yigeyue,
    Liangyuan,
    Youhui,
    PayPath,
    Zhifubao,
    Duihuanma,
    Lipinka,
    Attntion,
    Zongji,
    Buttons,
    PlayPage ,
    Topback
 } from './style.js';
import axios from 'axios';
import qs from 'querystring';

class Audio extends Component { 
    constructor ( props ) {
        super ( props ) ;
        this.state = {
            srcUrl : '',
            flag : true,
            picUrl: '',
            heijiao : [
                '会员曲库',
                '无损音质',
                '免费下载',
                '免广告',
                '音画主题',
                '头像挂件',
                '个性皮肤',
                '商城折扣',
                '票务特权',
                '福利券',
                '歌曲图片',
                '专属电台'],
            heijiao_flag : true,
            yinyuebao : ['会员曲库','无损音质','免费下载'],
            yinyuebao_flag : false,
            heijiaoStyle : {
                borderRadius:'.25rem',
                background : '#FF5151' ,
                color : 'white' 
            },  
            yinyuebaoStyle : '',
            prerogative_flag : false ,
            flagone : 'active' ,
            flagtwo : '' ,
            flagthree : '' ,
            falsefour : '',
            weixin_img : '/img/red_pay.png',
            zhifubao_img : '/img/white_pay.png',
            payMoney : '4.8',
            start_flag : true,
            lists : [] ,
            index : '' ,
            songer : '',
            song : ''
        }
    }
    /* 渲染音乐播放页面 */
    renderMusic = () => {
        const { srcUrl,picUrl,start_flag,songer,songName } = this.state ;
             return (
                <PlayPage>
                    <TopBack> 
                        <i className="fa fa-arrow-left" aria-hidden="true"
                         onClick = { this.back }                        
                         ></i> 
                        <div className = "back_content">
                            <p> { songName && songName } </p>
                            <span> { songer && songer } </span>
                        </div>
                    </TopBack>
                     <ImgBox>                      
                         <img src = { picUrl && picUrl.slice(0,-1) } alt ="" /> 
                     </ImgBox>
                     
                     <audio 
                    src = { srcUrl && srcUrl }
                        autoPlay = "autoPlay"
                        controls = "controls"
                    ref = { el => this.ad = el }  
                        >
                            您的浏览器不支持 audio 标签。
                     </audio>
                     <Buttons>
                        <i className="fa fa-fast-backward" aria-hidden="true"
                            onClick = { this.preMusic }
                        ></i>
                        <i className="fa fa-step-backward" aria-hidden="true"
                        onClick = { this.kuaijin }
                        ></i>
                        { !start_flag && <i className="fa fa-play-circle-o" aria-hidden="true"
                        onClick = { this.zanting }
                        style = {{
                           fontSize : '.5rem'
                        }}
                        ></i>}
                        { start_flag && <i className="fa fa-pause-circle" aria-hidden="true"
                        onClick = { this.kaishi }
                        style = {{
                           fontSize : '.5rem'
                        }}
                        ></i> }
                        <i className="fa fa-step-forward" aria-hidden="true"
                        onClick = { this.kuaitui }
                        ></i>
                        <i className="fa fa-fast-forward" aria-hidden="true" 
                        onClick = { this.nextMusic }
                        ></i>
                     
                     </Buttons>
                 </PlayPage>
             )     
     }

     /* 音乐列表中对应按钮所实现的事件 */
     /* 开始 */
     kaishi = () => {
        this.ad.pause();
        this.setState({
            start_flag : false
        })
    }
    /* 暂停 */
    zanting = () => {
        this.ad.play();
        this.setState({
            start_flag : true
        })
    }
    /* 上一首 */
    preMusic = () => {
        
        //  console.log(this.props.location.state)
        let musicIndex = this.state.index
       if(musicIndex>0){
           const preId = this.props.location.state[musicIndex-1].id ;
           axios ({
            url : '/song/url?id=' + preId,
            }).then ( res => {
            if( res.data.data[0].url === null ){
                this.setState({
                    flag : false
                })
            }else{

            this.setState(()=>{
                let pic,songer,songName;
                if(this.props.location.state[musicIndex  - 1].al){
                     pic =this.props.location.state[musicIndex - 1].al.picUrl;
                     songer =this.props.location.state[musicIndex-1].ar[0].name ;
                     songName = this.props.location.state[musicIndex-1].name
                }else{
                     pic = "https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg";
                     songer = "";
                     songName = ""; 
                }

            return{
                srcUrl : res.data.data[0].url ,
                index : musicIndex -0 +1,
                picUrl: pic ,
                songer : songer ,
                songName : songName ,
                start_flag :true
            }
        })
            }
            
        } )
        .catch( err => console.log( err ) );  

       }else{
           alert('没有上一首了')
       }
    }
    /* 下一首 */
    nextMusic = () => {
        let musicIndex = this.state.index && this.state.index ;
        if(musicIndex<this.props.location.state.length-1){
           const nextId = this.props.location.state[ musicIndex -0 + 1].id ;
           axios ({
            url : '/song/url?id=' + nextId,
            }).then ( res => {
            if( res.data.data[0].url === null ){
                this.setState({
                    flag : false
                })
            }else{
                this.setState(()=>{
                    let pic,songer,songName;
                    if(this.props.location.state[musicIndex -0 + 1].al){
                         pic =this.props.location.state[musicIndex -0 + 1].al.picUrl ;
                         songer =this.props.location.state[musicIndex-0+1].ar[0].name ;
                         songName = this.props.location.state[musicIndex-0+1].name
                    }else{
                         pic = "https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg";
                         songer = '';
                         songName = '';
                    }

                return{
                    srcUrl : res.data.data[0].url ,
                    index : musicIndex -0 +1,
                    picUrl: pic ,
                    songer : songer,
                    songName : songName ,
                    start_flag :true
                }
            })
            }
            
        })
        .catch( err => console.log( '1',err ) );  

       }else{
           alert('没有下一首了')
       }
    }
    /* 快进 */
    kuaijin = () => {
        this.ad.currentTime = this.ad.currentTime - 5
    }
    /* 快退 */
    kuaitui = () => {
        this.ad.currentTime = this.ad.currentTime + 5
    }

    /* 下面两个事件分别对应盒子中的两个选项，点击修改开关，显示数据 */
    heijiaoClick = () => {
        this.setState({
            heijiao_flag : true ,
            yinyuebao_flag : false ,
            heijiaoStyle : {
                borderRadius:'.25rem',
                background : '#FF5151' ,
                color : 'white' 
            },
            yinyuebaoStyle : ''
        })
    }

    yinyuebaoClick = () => {
        this.setState({
            heijiao_flag : false ,
            yinyuebao_flag : true ,
            heijiaoStyle : '',
            yinyuebaoStyle : {
                borderRadius:'.25rem',
                background : '#FF5151' ,
                color : 'white' 
            }
        })
    }

    /* 点击显示特权 */
    prerogativeClick = () => {
        this.setState({
            prerogative_flag : !this.state.prerogative_flag
        })
    }
    /* 渲染黑胶特权 */
    heijiaoRender = () => {
        return  this.state.heijiao.map( (item,index) => {
            return (
                    <li style = {{
                        width : '25%',
                        lineHeight : '.25rem' ,
                        fontSize : '.1rem' ,
                        display : 'inline-block' ,
                        textAlign : 'center'
                    }}
                    key = { index }
                    > <span style = {{
                        color : 'red',
                        fontSize : '.18rem',
                        verticalAlign : 'middle'
                    }}>·</span>{ item  } </li>
            )
        } )
    }

    /* 渲染音乐包特权 */
    yinyuebaoRender = () => {
        return  this.state.yinyuebao.map( (item,index) => {
            return (
                    <li style = {{
                        width : '25%',
                        lineHeight : '.25rem' ,
                        fontSize : '.1rem' ,
                        display : 'inline-block' ,
                        textAlign : 'center',
                        verticalAlign : 'middle'
                    }}
                    key = { index }
                    > <span style = {{
                        color : 'red',
                        fontSize : '.18rem'
                    }}>·</span>{ item  } </li>
            )
        } )
    }

    /* 下面四个事件，点击可以显示边框，以及最后需要支付的钱 */
    flagoneClick = () => {
        this.setState({
            flagone : 'active' ,
            flagtwo : '' ,
            flagthree : '' ,
            flagfour : '',
            payMoney : '4.8'

        })
    }
    flagtwoClick = () => {
        this.setState({
            flagone : '' ,
            flagtwo : 'active' ,
            flagthree : '' ,
            flagfour : '',
            payMoney : '138'
        })
    }
    flagthreeClick = () => {
        this.setState({
            flagone : '' ,
            flagtwo : '' ,
            flagthree : 'active' ,
            flagfour : '',
            payMoney : '40'
        })
    }
    flagfourClick = () => {
        this.setState({
            flagone : '' ,
            flagtwo : '' ,
            flagthree : '' ,
            flagfour : 'active',
            payMoney : '15'
        })
    }

    changeWeiXinImg = () => {
        this.setState({
            weixin_img : '/img/red_pay.png',
            zhifubao_img : '/img/white_pay.png'
        })
    }
    changeZhiFuBaoImg = () => {
        this.setState({
            weixin_img : '/img/white_pay.png',
            zhifubao_img : '/img/red_pay.png'
        })
    }

    /* 返回 */
    back = () => {
        this.props.history.go(-1) 
    }

    render () {
        const { 
            flag,
            vipType,
            heijiao_flag,
            yinyuebao_flag,
            heijiaoStyle,
            yinyuebaoStyle,
            prerogative_flag,
            flagone,
            flagtwo,
            flagthree,
            flagfour,
            weixin_img,
            zhifubao_img,
            payMoney
         } = this.state ;
        return (
            <AudioContent>
                {  flag && this.renderMusic() }
                { !flag && <PayPage> 
                    <Topback>
                        <i className="fa fa-arrow-left" aria-hidden="true" onClick = { this.back }></i>
                        <span> 网易云音乐会员 </span>
                    </Topback>
                     <div className="request"> 版权方要求，当前歌曲仅限开通VIP使用 </div>
                    <div className = "isload">
                        <i className="fa fa-user-circle user_head" aria-hidden="true"></i>
                        <div className="load_info">
                            <p> 未登录 </p>
                            <span> 当前未开通{ vipType } </span>
                        </div>
                    </div>
                    <HuiseBg></HuiseBg>
                    <div> 
                        <VipType> 
                            <div 
                                onClick = { this.heijiaoClick }
                                style = {{ ...heijiaoStyle }}
                                > 黑胶VIP </div>
                            <div onClick = { this.yinyuebaoClick }
                                style = { {...yinyuebaoStyle} }
                                > 音乐包 </div>
                        </VipType>  
                        <p style = {{
                            fontSize : '.14rem',
                            textAlign : 'center', 
                            marginTop : '.16rem' 
                        }}
                        onClick = { this.prerogativeClick }
                            > 畅享{ heijiao_flag && '黑胶VIP' }{ yinyuebao_flag && '音乐包' }专属特权 + 音乐包特权
                             { !prerogative_flag && <i className="fa fa-chevron-down" aria-hidden="true" style = {{ marginLeft : '.12rem' }}></i> } 
                             { prerogative_flag && <i className="fa fa-chevron-up" aria-hidden="true" style = {{ marginLeft : '.12rem' }}></i> } </p> 
                        <ul style = {{ 
                            marginTop : '.2rem'
                         }}>
                            { prerogative_flag && heijiao_flag && this.heijiaoRender() }
                            { prerogative_flag && yinyuebao_flag && this.yinyuebaoRender() }
                        </ul>
                        <PayLists>
                            <Baoyue
                            onClick = { this.flagoneClick }
                            className = { flagone } 
                            > 
                            <div className = "leftbox">
                                <p style = {{
                                    fontWeight : '900'
                                }}> 连续包月 <span> 新客首月4.8元 </span>
                                     <Del> ￥11 </Del> </p>
                                <em> 新用户专享首月优惠，到期自动续费11元，可随时取消 </em>
                                 </div>
                                 <div className = "rightbox"> ￥4.8 </div>
                            </Baoyue>
                            <Shieryue
                            onClick = { this.flagtwoClick }
                            className = { flagtwo }
                            > 12个月 
                                <Del> ￥180 </Del> 
                            <div> 
                                <div className = "rightbox">
                                    <p> ￥138 </p> 
                                    <span> ￥11.5/月 </span> 
                                </div>
                                </div> 
                            </Shieryue>
                            <Sangeyue
                            onClick = { this.flagthreeClick } 
                            className = { flagthree }                           
                            > 3个月 
                                <Del> ￥45 </Del> 
                            <div> 
                                <div className = "rightbox">
                                    <p> ￥40 </p> 
                                    <span> ￥13.3/月 </span> 
                                </div>
                            </div> 
                            </Sangeyue>
                            <Yigeyue
                            onClick = { this.flagfourClick } 
                            className = { flagfour }                                                       
                            > 1个月 <span style = {{
                            }}> ￥ 15 </span> 
                            </Yigeyue>
                            <Liangyuan> 
                                2元购买此单曲 
                                 <span> > </span>
                            </Liangyuan>
                        </PayLists>
                        <Youhui> 优惠 
                            <span> 登录查看优惠信息
                                <i className="fa fa-chevron-right" aria-hidden="true"></i> 
                            </span> 
                        </Youhui>
                        <HuiseBg></HuiseBg>
                        <PayPath>
                            <div 
                                className = "weixinbox"
                                onClick = { this.changeWeiXinImg }
                            >
                                <div className = "leftbox">
                                    <img src = "/img/weixin.jpg" alt = ""/>
                                    <p>微信支付 
                                        <span> 推荐 </span> 
                                    </p>
                                </div>
                                <img src = { weixin_img } alt = "" className = "right_img"/> 
                            </div>
                            <Zhifubao
                                className = "zhifubao"
                                onClick = { this.changeZhiFuBaoImg }
                            >
                                <div className = "leftbox">
                                    <img src = "/img/zhifubao.jpg" alt = ""/>
                                    <p> 支付宝支付 </p>
                                </div>
                                <img src = { zhifubao_img } alt = "" className = "right_img"/>
                            </Zhifubao>
                        </PayPath>
                        <HuiseBg></HuiseBg>
                        <Duihuanma>
                            <span> 使用会员兑换码 </span>
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                        </Duihuanma>
                        <HuiseBg></HuiseBg>
                        <Lipinka>
                            <span> 购买会员礼品卡 </span>
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                        </Lipinka>                   
                    </div>
                    <Attntion>
                            <p> 
                                <span> 《黑胶VIP服务协议》 </span> 
                                <span> 《连续包月服务协议》 </span> 
                            </p>
                            <div className = "help"> 帮助和反馈 </div>
                    </Attntion>
                        <Zongji>
                            <div>
                               <i> 总计 </i>  
                               <span> ￥{ payMoney } </span>
                            </div>
                            <span className = "queren"> 确认支付 </span>
                        </Zongji>
                </PayPage>}
            </AudioContent>
        )
    };

    componentDidMount () {
        axios ({
            url : '/song/url' + this.props.history.location.search,
        }).then ( res => {
            if( res.data.data[0].url === null ){
                this.setState({
                    flag : false
                })
            }else{
                this.setState({
                srcUrl :   res.data.data[0].url ,
                picUrl : qs.parse( this.props.location.search.slice(1) ).picUrl,
                lists : this.props.location.state ,
                index : qs.parse( this.props.location.search.slice(1) ).index ,
                songer : qs.parse( this.props.location.search.slice(1) ).songer,
                songName : qs.parse( this.props.location.search.slice(1) ).songName,
            })
            }
            
        })
        .catch( err => console.log( err ) );  
    }
};

export default Audio ;
