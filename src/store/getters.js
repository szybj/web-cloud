const getters = {
  website: state => state.common.website,
  tag: state => state.tags.tag,
  tagWel: state => state.tags.tagWel,
  tagList: state => state.tags.tagList,
  userInfo: state => state.user.userInfo,
  roles: state => state.user.roles,
  sysMenu: state => state.user.sysMenu,
  isCollapse: state => state.common.isCollapse,
  detailQuery: state => state.common.detailQuery
}
export default getters
