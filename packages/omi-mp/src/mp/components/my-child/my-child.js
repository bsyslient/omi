
import componentCss from './my-child.wxss'
import { h, WeElement } from 'omi'
import { setData } from '../../../utils/set-data'


function css() {
  return rpx2px(componentCss)
}
function render() {
  
  return h('span',null,[`my-child`])

}
// components/my-child/my-child.js
const mpOption = Component({
  /**
   * 组件的属性列表
   */
  properties: {

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

  }
})

class Element extends WeElement {
  data = mpOption.data

  render = render

  css = css

  beforeRender() {}

  beforeUpdate() {}

  afterUpdate() {}

  install = mpOption.created || function() {}

  uninstall = mpOption.detached || function() {}

  installed = function() {
    mpOption.attached && mpOption.attached.call(this)
    mpOption.ready && mpOption.ready.call(this)
  }

  setData = setData
}

Object.keys(mpOption.methods).forEach(key => {
  Element.prototype[key] = mpOption.methods[key]
})

customElements.define('my-child', Element)
        