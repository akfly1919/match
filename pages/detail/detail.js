//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    info: {}
  },
  onLoad: function () {
    let infos = wx.getStorageSync('info')[0];
    // console.log(infos);
    this.setData({
      info: infos
    })
  }
})
