const { override, fixBabelImports, addWebpackAlias } = require('customize-cra')
const path = require('path')
module.exports = override(
    //antd-mobile按需加载
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css'
    }),
    //配置路径别名
    addWebpackAlias({
        api: path.resolve(__dirname, './src/api'),
        assets: path.resolve(__dirname, './src/assets'),
        components: path.resolve(__dirname, './src/components'),
        containers: path.resolve(__dirname, './src/containers'),
        pages: path.resolve(__dirname, './src/pages'),
        utils: path.resolve(__dirname, './src/utils')
    })
)