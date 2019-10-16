const proxy = require( 'http-proxy-middleware' )
const backUrl = 'http://localhost:4000'

module.exports = function ( app ) {
    // app.use(proxy(标识，反向代理配置))
 
 

    app.use(proxy('/login/cellphone',{
      target: backUrl,
      changeOrigin: true
    }))

    app.use(proxy('/cellphone/existence/check',{
      target: backUrl,
      changeOrigin: true
    }))
    
    app.use(proxy('/captcha/sent',{
      target: backUrl,
      changeOrigin: true
    }))

    app.use(proxy('/captcha/verify',{
      target: backUrl,
      changeOrigin: true
    }))
 
    app.use(proxy('/register/cellphone',{
      target: backUrl,
      changeOrigin: true
    }))

  
    app.use(proxy('/artist/list',{
      target:'http://localhost:4000',
      changeOrigin:true
    }))
    app.use(proxy('/banner',{
      target: backUrl,
      changeOrigin: true
    }))
    app.use(proxy('/top',{
      target: backUrl,
      changeOrigin: true
    }))

    app.use(proxy('/recommend',{
      target: backUrl,
      changeOrigin: true
    }))

    app.use(proxy('/dj',{
      target: backUrl,
      changeOrigin: true
    }))
    

    app.use(proxy('/personalized',{
      target: backUrl,
      changeOrigin: true
    }))
    
    app.use(proxy('/personal_fm',{
      target: backUrl,
      changeOrigin: true
    }))

    app.use(proxy('/album',{
      target: backUrl,
      changeOrigin: true
    }))

    app.use(proxy('/song',{
      target: backUrl,
      changeOrigin: true
    }))

    app.use(proxy('/mv',{
      target: backUrl,
      changeOrigin: true
    }))
    app.use(proxy('/artists',{
      target:backUrl,
      changeOrigin:true
    }))
    app.use(proxy('/artist/mv',{
      target:backUrl,
      changeOrigin:true
    }))
    app.use(proxy('/artist/desc',{
      target:backUrl,
      changeOrigin:true
    }))

    
    app.use(proxy('/user',{
      target: backUrl,
      changeOrigin: true
    }))

    app.use(proxy('/video',{
      target: backUrl,
      changeOrigin: true
    }))

    app.use(proxy('/song/url',{
      target: backUrl,
      changeOrigin: true
    }))

    
    app.use(proxy('/playlist',{
      target: backUrl,
      changeOrigin: true
    }))
    app.use(proxy('/search',{
      target:backUrl,
      changeOrigin:true
    }))
    app.use(proxy('/search/hot',{
      target:backUrl,
      changeOrigin:true
    }))
   
    app.use(proxy('/comment',{
      target: backUrl,
      changeOrigin: true
    }))
    app.use(proxy('/event',{
      target: backUrl,
      changeOrigin: true
    }))
    app.use(proxy('/user/detail',{
      target: backUrl,
      changeOrigin: true
    }))
    app.use(proxy('/user/playlist',{
      target: backUrl,
      changeOrigin: true
    }))
    app.use(proxy('/logout',{
      target: backUrl,
      changeOrigin: true
    }))
    // app.use(proxy('/login',{
    //   target: backUrl,
    //   changeOrigin: true
    // }))
    app.use(proxy('/login/refresh',{
      target: backUrl,
      changeOrigin: true
    }))
    app.use(proxy('/user/subcount',{
      target: backUrl,
      changeOrigin: true
    }))
  }
