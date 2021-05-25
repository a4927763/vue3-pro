module.exports = {
  devServer: {
    proxy: 'https://data.coa.gov.tw/'
  },
  filenameHashing: false,
  
  publicPath: process.env.NODE_ENV === 'production'
  ? '/a4927763/'
  : '/'
  
  // assetsDir: 'static',
  // parallel: false,
  // publicPath: './',

  // configureWebpack :{
  //   performance: {
  //     hints: false 
  //   },
  // },
 

}