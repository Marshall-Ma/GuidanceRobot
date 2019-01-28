import { 
  promisic 
} from "../../utils/common"

import {
  UserModel
} from "../../models/user"

const userModel = new UserModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    authorized:false,
    userInfo: null,
  },

  onLoad: function (options) {
    // this.userLogin()
    this.userAuthoried()
  },

  userLogin(){
    promisic(wx.login)()
    .then(data =>{
      if(data.code){
        userModel.getOpenId({
          code:data.code
        })
        .then(data => {
          console.log(data)
        })
      }
    })
  },

  userAuthoried(){
    promisic(wx.getSetting)()
    .then(data => {
      if(data.authSetting['scope.userInfo']){
        return promisic(wx.getUserInfo)()
        .then(data => {
          console.log('getUserInfo:', data)
        })
      }
      return false
    })
    .then(data => {
      if(!data) {
        return
      }
      this.setData({
        authorized:true,
        userInfo:data.userInfo
      })
    })
  },

  onGetUserInfo(event) {
    const userInfo = event.detail.userInfo
    if (userInfo) {
      console.log(userInfo)
      this.setData({
        userInfo:userInfo,
        authorized: true
      })
      userModel.postUserBaseinfo({
        "errorCode": 0,
        "msg": userInfo
      }).then(data=>{
        console.log(data)
      })
    }
  },

  onNavigate(event){
    const navPage = event.detail.navPage
    wx.navigateTo({
      url:`/pages/${navPage}/${navPage}`,
      success: (result)=>{},
      fail: ()=>{},
      complete: ()=>{}
    })
  }
})