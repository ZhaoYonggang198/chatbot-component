// plugin/components/botSay/artical/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    message: {
      type: Object,
      default: {}
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
    clickhandle (event) {
      let contentUrl = this.properties.message['content-url']
      if (contentUrl) {
        this.triggerEvent('articleClick', contentUrl)
      }
    }
  }
})
