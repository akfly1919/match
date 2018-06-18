// pages/add/team/team.js
//获取应用实例
const app = getApp()
//index.js
const network = require('../../../utils/network.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    time: '',
    contact: '',
    num: '',
    picUrl: '',
    lq_desc: '',
    imgList: [],
    arrList: []
  },
  nameInput: function (event) {
    this.setData({
      name: event.detail.value
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
      lq_desc: event.detail.value
    })
  },
  delImg(evt) {
    var _index = evt.currentTarget.id, arr = [];
    arr = this.data.imgList;
    arr.splice(_index, 1);
    this.setData({
      imgList: arr,
    })
  },
  chooseImageTap: function () {
    let self = this;
    let info = app.globalData.serverUserInfo;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#f7982a",
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            self.chooseWxImage('album')
          } else if (res.tapIndex == 1) {
            self.chooseWxImage('camera')
          }
        }
      }
    })

  },
  chooseWxImage(type) {
    let self = this, arr = [];
    arr = self.data.imgList;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: function (res) {
        arr.push(res.tempFilePaths[0])
        self.setData({
          imgList: arr,
        });
        self.upLoadFile(res.tempFilePaths[0], 'res');
      }
    })
  },
  upLoadFile: function (filePath, name) {
    let self = this, arr = [];
    arr = self.data.arrList;
    let info = app.globalData.serverUserInfo;
    wx.uploadFile({
      url: network.upLoadFile,
      filePath: filePath,
      name: name,
      header: {
        'content-type': 'multipart/form-data'
      }, // 设置请求的 header
      formData: {
        // token: info ? info.token : '',
        // user_id: info ? info.user_id : '',
        openId: info ? info.openId : ''
      }, // HTTP 请求中其他额外的 form data
      success: function (res) {
        arr.push(res[0]);
        self.setData({
          arrList: arr,
        });
      },
      fail: function (res) {
        console.log(res);
        typeof fail == "function" && fail(res);
      }
    })
  },
  submitEvt() {
    let info = app.globalData.serverUserInfo;
    var params = {
      name: this.data.name,
      begTime: '2018-08-08',
      endTime: '2018-08-09',
      num: this.data.num,
      openid: info ? info.openId : '',
      picUrl: this.data.imgList[0]
    }
    //发起请求
    network.GET(
      {
        url: network.addMatch,
        params: params,
        success: function (res) {
          console.log(res)
        },
        fail: function () {
          //失败后的逻辑

        }
      })
  }
})