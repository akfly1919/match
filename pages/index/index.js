//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    infos:[],
    tab:1,
  },
  editEvt(event){
    // console.log(evt)
    let latid = event.currentTarget.dataset.id;
    if(latid == 1) {
      let infos = wx.getStorageSync('info');
      this.setData({
        infos: infos
      })
    }else{
      this.setData({
        infos: []
      })
    }
    // console.log(latid);
    this.setData({
      tab: latid
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../add/add'
    })
  },
  bindItemTap(){
    wx.navigateTo({
      url: '../detail/detail'
    })
  },
  onLoad: function () {
    // wx.setStorageSync('info', []);
    let infos = wx.getStorageSync('info');
    // console.log(infos);
    this.setData({
      infos: infos
    })
  }
})
