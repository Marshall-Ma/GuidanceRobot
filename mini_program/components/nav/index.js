// components/nav/index.js
import {NAV_DICT} from '../../utils/common'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgPath:{
      type:String
    },
    navName:{
      type:String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onNav(event){
      const navName = this.properties.navName
      if(NAV_DICT.hasOwnProperty(navName)){
        this.triggerEvent('navigate',{
          navPage:NAV_DICT[navName]
        }, {})
      } else {
        console.log('err: '+navName+'not in NAV_DICT')
      }
    }
  }
})
