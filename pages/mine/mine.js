var app = getApp();
Page({
  data: {

  },
  onShow: function () {

  },
  onLoad: function () {
    var self = this;

  },
  jumpCollect: function (event) {
    console.log(event);
    var a = event.currentTarget.id;
    if (a == 2) {
      wx.navigateTo({
        url: '/pages/match/list/list'
      })
    }
    if (a == 3) {
      wx.navigateTo({
        url: '/pages/team/list/list'
      })
    }
  }
});

