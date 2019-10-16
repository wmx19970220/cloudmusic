const { override, fixBabelImports,addWebpackAlias} = require('customize-cra');
const path = require( 'path' )

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
    addWebpackAlias({
        'assets':path.join(__dirname,'./src/assets'),
        'components': path.join( __dirname, './src/components'),
        'lib': path.join( __dirname, './src/lib'),
        'pages': path.join( __dirname, './src/pages'),
        'utils': path.join( __dirname, './src/utils'),
        'theme': path.join(__dirname,'./src/theme'),
        'store': path.join(__dirname,'./src/store'),
        'reducer': path.join(__dirname,'./src/reducer'),
        'action': path.join(__dirname,'./src/action'),
    })
);