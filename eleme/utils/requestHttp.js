/**
 * 抓取远端API的结构
 * https://developers.douban.com/wiki/?title=movie_v2
 * @param  {String} api    api 根地址
 * @param  {String} path   请求路径
 * @param  {Objece} params 参数
 * @return {Promise}       包含抓取任务的Promise
 */


const URI = '/getData'
// const fetch = require('./fetch')

/**
 * 抓取豆瓣电影特定类型的API
 * https://developers.douban.com/wiki/?title=movie_v2
 * @param  {String} type   类型，例如：'coming_soon'
 * @param  {Objece} params 参数
 * @return {Promise}       包含抓取任务的Promise
 */
function fetchApi(type, params) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${URI}/${type}`,
      method:'get',
      data: Object.assign({}, params),
      header: { 'Content-Type': 'json' },
      success: resolve,
      fail: reject
    });
  });
}

/**
 * 获取列表类型的数据
 * @param  {String} type   类型，例如：'coming_soon'
 * @param {Promise}     包含抓取任务的Promise
 * @return {function}  获取数据的方法 
 */

function requestHttp(type, params) {
  var params = {
    userName :userName,
    passWord:passWord
  };
  return fetchApi(type, Object.assign(params, {
         
    })
    .then(res => {
      console.log(res.data);
    }))
}

module.exports = {
  requestHttp
}