//app.js
var network = require('./utils/network.js')
import nbaTeamRank from './utils/nbaTeamRank.js';
import nbaPlayerRank from './utils/nbaPlayerRank.js';
App({
  onLaunch: function () {
    Object.assign(this.globalData, nbaTeamRank);
    Object.assign(this.globalData, nbaPlayerRank);
    // 登录
    wx.login({
      success: (res) => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res);
        this.getUserInfoData(res.code);
      },
      fail:()=> {
        wx.showModal({
          title: '警告通知',
          content: '您点击了拒绝授权,将无法正常显示个人信息,点击确定重新获取授权。',
          success:  (res)=> {
            if (res.confirm) {
              this.getAuth();
            }
          }
        })
      }
    })
  },
  getAuth: function () {
    var self = this;
    wx.openSetting({
      success: (res) => {
        if (res.authSetting["scope.userInfo"]) {////如果用户重新同意了授权登录
          wx.login({
            success: function (res_login) {
              if (res_login.code) {
                self.getUserInfoData(res.code);
              }
            }
          });
        }
      }, fail: function (res) {

      }
    })
  },
  getUserInfoData: function (code) {
    let self = this;
    wx.getUserInfo({
      success: function (res) {
        self.globalData.userInfo = res.userInfo
        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        // 所以此处加入 callback 以防止这种情况
        if (self.userInfoReadyCallback) {
          self.userInfoReadyCallback(res, code)
        }
      },
      fail: function (res) {
        console.log(res)
        wx.showModal({
          title: '警告通知',
          content: '您点击了拒绝授权,将无法正常显示个人信息,点击确定重新获取授权。',
          success: function (res) {
            if (res.confirm) {
              self.getAuth();
            }
          }
        })
      }
    })
  },
  userInfoReadyCallback: function (res, code) {
    let self = this;
    //发起请求
    network.GET(
      {
        url: network.getUser,
        params: {
          jscode: code,
          encryptedData: res.encryptedData,
          iv: res.iv,
          // rawData: res.rawData,
          signature: res.signature,
          // userInfo: res.userInfo
        },
        success: function (res) {
          let dt = res.data;
          self.globalData.serverUserInfo = dt
          console.log(dt);
        },
        fail: function () {
          //失败后的逻辑

        }
      })

  },

  globalData: {
    userInfo: null
  }
})