import Mock from 'mockjs'
export default ({ mock }) => {
  if (!mock) {
    return
  }
  // 获取表格数据
  Mock.mock('/getTableData', 'get', () => {
    let list = []
    for (let i = 0; i < 5; i++) {
      list.push(Mock.mock({
        id: '@increment',
        name: Mock.mock('@cname'),
        xing: Mock.mock('@cname'),
        ming: Mock.mock('@name'),
        username: Mock.mock('@last'),
        type: [0, 2],
        checkbox: [0, 1],
        'number|0-100': 0,
        datetime: 1532932422071,
        'sex|0-1': 0,
        moreselect: [0, 1],
        'grade': 0,
        address: Mock.mock('@cparagraph(1, 3)'),
        check: [1, 3, 4]
      }))
    }
    return {
      status: 0,
      data: {
        total: 11,
        pageSize: 10,
        tableData: list
      }
    }
  })
}
