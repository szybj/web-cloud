import { setStore, getStore } from 'utils/store'
import { diffRouter } from 'utils/util'
import website from 'assets/website'

const isFirstPage = website.isFirstPage
const tagWel = website.fistPage
const tagObj = {
  label: '', // 标题名称
  value: '', // 标题的路径
  query: '', // 标题的路径参数
  params: '', // 标题的参数
  group: [] // 分组
}

// 处理首个标签
function setFistTag (list) {
  if (list.length === 1) {
    list[0].close = false
  } else {
    list.forEach(ele => {
      if (ele.value === tagWel.value && isFirstPage === false) {
        ele.close = false
      } else {
        ele.close = true
      }
    })
  }
}

const navs = {
  state: {
    tagList: getStore({ name: 'tagList' }) || [],
    tag: getStore({ name: 'tag' }) || tagObj,
    tagWel: tagWel
  },
  actions: {},
  mutations: {
    ADD_TAG: (state, action) => {
      state.tag = action
      setStore({ name: 'tag', content: state.tag, type: 'session' })
      if (state.tagList.some(ele => diffRouter(ele, action))) return
      state.tagList.push(action)
      setFistTag(state.tagList)
      setStore({ name: 'tagList', content: state.tagList, type: 'session' })
    },
    DEL_TAG: (state, action) => {
      state.tagList = state.tagList.filter(item => {
        return !diffRouter(item, action)
      })
      setFistTag(state.tagList)
      setStore({ name: 'tagList', content: state.tagList, type: 'session' })
    },
    DEL_ALL_TAG: state => {
      state.tagList = [state.tagWel]
      setStore({ name: 'tagList', content: state.tagList, type: 'session' })
    },
    DEL_TAG_OTHER: state => {
      state.tagList = state.tagList.filter(
        item => item.value === state.tag.value
      )
      setFistTag(state.tagList)
      setStore({ name: 'tagList', content: state.tagList, type: 'session' })
    }
  }
}
export default navs
