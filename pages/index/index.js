//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    infos:[],
    tab:1,
    tacticsList:[
      {
        title:'美国国家队教学-投篮',
        desc:'标准的投篮训练方法'
      },
      {
        title: '三威胁——姿势',
        desc: '标准的投篮训练方法'
      },
      {
        title: '11种转身过人的方法',
        desc: '转身大全'
      },
      {
        title: '哈登教你进攻三威胁',
        desc: '绝对实用'
      }
    ]
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
