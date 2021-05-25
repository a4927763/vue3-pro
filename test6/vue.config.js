module.exports = {
  devServer: {
    proxy: 'https://data.coa.gov.tw/'
  },
  filenameHashing: false,
  
  publicPath: process.env.NODE_ENV === 'production'
  ? '/a4927763/test6/dist/index.html'
  : '/test6/dist/static',

  assetsDir: 'static',
  parallel: false,
  publicPath: './',

  // configureWebpack :{
  //   performance: {
  //     hints: false 
  //   },
  // },
 

}