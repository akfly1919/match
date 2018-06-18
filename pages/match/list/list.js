// pages/match/list.js
//index.js
//获取应用实例
const app = getApp()
//index.js
const network = require('../../../utils/network.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infos:[
      { title: '小米大力神杯', time: '2012-02-08', count: 7},
      {title:'米BA', time: '2016-09-07' ,count:3},
    ]
  },
  matchList() {
    network.GET({
      url: network.matchList,
      success: res => {
        let resp = res.data;
        console.log(resp)
        if (res.statusCode == 200) {
          this.setData({
            infos: resp
          })
        }
      },
      fail: function (err) {
        //失败后的逻辑
        wx.showToast({ 'title': err || app.globalData.errMsg, 'icon': 'none' });
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.matchList();
  },
  submitEvt(){
    wx.navigateTo({
      url: '/pages/match/add/add'
    })
  }
})