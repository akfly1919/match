//index.js
//获取应用实例
const app = getApp()
//index.js
const network = require('../../utils/network.js')
Page({
  data: {
    infos:[],
    tab:2,
    tacticsList:[],
    aboutList:[{
      title:'北京体育大学公开赛',
      url:'/imgs/basket.png',
      time:'2018/06/13',
      hour:'18:00-19:00',
      desc:'带上你的装备，和我一起鏖战天下',
      location:'北京市海淀区清河中街',
      distance:'4.2km'
    }, {
      title: '北京体育大学公开赛',
      url: '/imgs/basket.png',
      time: '2018/06/13',
      hour: '18:00-19:00',
      desc: '带上你的装备，和我一起鏖战天下',
      location: '北京市海淀区清河中街',
      distance: '4.2km'
    }]
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
  //事件处理函数
  getTactics(){
    network.GET({
      url: network.getTacticsList,
      success: res => {
        let resp = res.data;
        console.log(resp)
        if (res.statusCode == 200){
           this.setData({
             tacticsList: resp
           })
        }
      },
      fail: function (err) {
        //失败后的逻辑
        wx.showToast({ 'title': err || app.globalData.errMsg, 'icon': 'none' });
      }
    })
  },
  onLoad: function () {

    this.getTactics();
  }
})
