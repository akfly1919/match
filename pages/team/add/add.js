// pages/add/team/team.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  submitEvt() {
    var params = {
      title: this.data.title,
      time: this.data.time,
      contact: this.data.contact,
      num: this.data.num,
      icon: this.data.icon,
      desc: this.data.desc
    }
    let infos = wx.getStorageSync('info') || [];
    infos.splice(0, 0, params);
    wx.setStorageSync('info', infos);
    wx.showToast({ 'title': '回复成功', 'icon': 'success' });
    setTimeout(function () {
      wx.navigateBack();  //返回上一个页面
    }, 1500);
  }
})