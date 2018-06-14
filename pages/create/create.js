//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    title: '',
    time: '',
    contact:'',
    num:'',
    icon:'',
    desc:''
  },
  titleInput: function (event) {
    this.setData({
      title: event.detail.value
    })
  },
  timeInput: function (event) {
    this.setData({
      time: event.detail.value
    })
  },
  contactInput: function (event) {
    this.setData({
      contact: event.detail.value
    })
  },
  numInput: function (event) {
    this.setData({
      num: event.detail.value
    })
  },
  iconInput: function (event) {
    this.setData({
      icon: event.detail.value
    })
  },
  descInput: function (event) {
    this.setData({
      desc: event.detail.value
    })
  },
  submitEvt(){
    var params = {
      title: this.data.title,
      time: this.data.time,
      contact: this.data.contact,
      num: this.data.num,
      icon: this.data.icon,
      desc: this.data.desc
    }
    let infos = wx.getStorageSync('info')||[];
    infos.splice(0, 0, params);
    wx.setStorageSync('info', infos);
    wx.showToast({ 'title': '回复成功', 'icon': 'success' });
    setTimeout(function () {
      wx.navigateBack();  //返回上一个页面
    }, 1500);
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
