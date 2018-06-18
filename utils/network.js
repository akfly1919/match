//获取应用实例
const app = getApp()

var requestHandler = {
  params: {},
  success: function (res) {
    // success
  },
  fail: function () {
    // fail
  },
}

//GET请求
function GET(requestHandler) {
  request('GET', requestHandler)
}
//POST请求
function POST(requestHandler) {
  requestHandler.params = json2Form(requestHandler.params)
  request('POST', requestHandler)
}
function json2Form(json) {
  var str = [];
  for (var p in json) {
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]));
  }
  return str.join("&");
}
function request(method, requestHandler) {
  // console.log(requestHandler);
  //注意：可以对params加密等处理
  var params = requestHandler.params;

  wx.request({
    url: requestHandler.url,
    data: params,
    method: method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    // header: {}, // 设置请求的 header
    header: {
      "Content-Type": method == 'GET' ? 'application/json;charset=UTF-8' : 'application/x-www-form-urlencoded'
    },
    success: function (res) {
      //注意：可以对参数解密等处理
      requestHandler.success && requestHandler.success(res)
    },
    fail: function () {
      requestHandler.fail && requestHandler.fail()
    },
    complete: function () {
      // complete
    }
  })
}

let protocol = 'https://fei.coucang.com';
let interFace = {
  getUser: protocol +'/xcx/user/login.do',//获取用户信息
  getTacticsList: protocol+'/xcx/lqzs/list.do',//获取篮球战术接口
  upLoadFile: protocol +'/xcx/yewu/upload.do',
  addMatch: protocol + '/xcx/yewu/addMatch.do',
  matchList: protocol + '/xcx/yewu/selMatch.do',
  GET: GET,
  POST: POST
}
module.exports = interFace