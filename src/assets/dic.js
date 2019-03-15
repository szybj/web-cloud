export const sexDict = {
  0: '女',
  1: '男'
}
export const isHasDict = {
  0: '无',
  1: '有'
}
export const educationDict = {
  1: '研究生及以上',
  2: '本科',
  3: '专科',
  4: '高中',
  5: '高中以下'
}
export const drivingLicenseDict = {
  0: '无驾照',
  11: 'A1',
  12: 'A2',
  13: 'A3',
  21: 'B1',
  22: 'B2',
  31: 'C1',
  32: 'C2'
}
export const directTypeDict = {
  1: '父母',
  2: '配偶',
  3: '子女',
  4: '其他亲属关系',
  5: '工作证明人',
  6: '朋友'
}
export const statusFormatterDict = {
  0: '初始',
  1: '待运营审核',
  2: '待资方审核',
  3: '查询中',
  4: '已查询',
  '-1': '拒查',
  '-2': '查询失败'
}
export const maritalStatusDict = {
  1: '已婚',
  2: '未婚',
  3: '离异',
  4: '丧偶'
}
export const workTypeDict = {
  1: '在职人员',
  2: '个体经营'
}
export const cooperationDict = {
  0: '合作协议',
  1: '营业执照',
  2: '身份证照片',
  3: '银行卡照片'
}
export const districtTypeDict = {
  0: '顶级',
  10: '区域',
  20: '大区',
  30: '城市',
  40: '联络点'
}
export const roleDict = {
  0: '客户经理',
  10: '城市经理',
  15: '高级城市经理',
  20: '大区经理',
  30: '销售负责人'
}
export const accountStatusDict = {
  '1': {
    '0': '待认证'
  },
  '2': {
    '0': '待激活'
  },
  '3': {
    '0': '待审核',
    '1': '已通过',
    '2': '已退回',
    '-1': '已拒绝'
  }
}
export const salesmanStateDict = {
  '2': '在职',
  '-2': '离职'
}
export const attachDict = {
  0: '身份证正面照',
  1: '身份证反面照',
  2: '手持身份证合影',
  3: '公安系统身份证照片',
  4: '用户签章',
  10: '申请人、客户经理与车辆合影',
  203: '申请人手持身份证和借款声明',
  204: '共借人手持身份证、担保申明与客户经理合影',
  11: '共借人与客户经理合影', // 面审阶段
  12: '申请人征信报告',
  13: '共借人征信报告',
  14: '车辆登记证',
  15: '车辆铭牌',
  16: '客户手持身份证正面半身照',
  17: '车辆照片',
  20: '融资服务协议',
  21: '买卖合同',
  22: '抵押合同',
  23: '借据',
  24: '连带承诺责任书',
  28: '车辆登记证首页',
  30: '车辆登记证',
  31: '车辆行驶证',
  32: '交强险保单',
  33: '商业保险单',
  34: '二手车交易发票',
  35: '续保承诺函',
  36: '里程数照片',
  37: '驾驶证',
  121: '主借人配偶征信',
  131: '共借人配偶征信',
  1702: '车辆照片-左前45度',
  1703: '车辆照片-前排座椅',
  1704: '车辆照片-里程表',
  1705: '车辆照片-车辆铭牌',
  1706: '车辆照片-VIN码',
  1707: '车辆照片-后排座椅',
  1708: '车辆照片-中控台',
  1709: '车辆照片-右后45度',
  18: '申请人驾驶证',
  1801: '在考驾驶证',
  1802: '担保人驾驶证'
}
export const carDealerTypeDict = {
  0: '个人',
  1: '公司'
}
export const carDealerStatusDict = {
  '-11': '初审拒绝',
  '-21': '终审拒绝',
  '13': '初审退回',
  '23': '终审退回',
  '12': '待初审',
  '21': '待完善',
  '22': '待终审',
  '24': '已通过'
}
export const repaymentTypeDict = {
  1: '等本等息',
  2: '等额本息'
}
export const loanStatusDict = {
  0: '正常',
  1: '结清',
  2: '逾期',
  3: '逾期结清',
  4: '提前结清'
}
export const orderStatusDict = {
  '0': {
    '1': '风控初审待审批',
    '-1': '模型拒绝'
  },
  '1': {
    '1': '面审材料待上传',
    '2': '面审材料已上传',
    '3': '风控审批已退回',
    '4': '风控审批待共借',
    '5': '风控审批待补件',
    '7': '风控复审通过待终审',
    '8': '风控复审拒绝待终审',
    '9': '终审退回',
    '-1': '风控审批已拒绝',
    '-2': '主动取消',
    '-3': '征信拒绝',
    '-4': '共借人机审拒绝',
    '-5': '共借人征信拒绝',
    '-6': '申请人配偶征信拒绝',
    '-7': '共借人配偶征信拒绝'
  },
  '2': {
    '1': '合影材料待完善',
    '2': '合同材料已完善',
    '3': '合同材料已退回',
    '5': '合同材料待补件',
    '10': '待销售确认签约',
    '11': '合影材料已完善',
    '12': '合影材料已退回',
    '13': '合同材料待完善',
    '-1': '合同材料已拒绝',
    '-2': '主动取消',
    '-3': '征信拒绝',
    '-4': '共借人机审拒绝',
    '-5': '共借人征信拒绝',
    '-6': '申请人配偶征信拒绝',
    '-7': '共借人配偶征信拒绝'
  },
  '3': {
    '1': '放款材料待完善',
    '2': '放款材料已完善',
    '3': '放款材料已退回',
    '5': '放款材料待补件',
    '6': '放款材料待资方审核',
    '7': '放款材料待复审',
    '-1': '放款材料已拒绝',
    '-2': '主动取消',
    '-3': '征信拒绝',
    '-5': '共借人征信拒绝',
    '-6': '申请人配偶征信拒绝',
    '-7': '共借人配偶征信拒绝'
  },
  '4': {
    '1': '待放款',
    '2': '已放款'
  },
  '5': {
    '1': '已结清'
  }
}
export const creditDict = {
  0: '身份证正面照',
  1: '身份证反面照',
  2: '查询授权书',
  3: '手持身份证与授权书合影',
  4: '征信',
  5: '征信'
}
export const specialPlanDict = {
  9: '产品方案C',
  10: '产品方案2-0',
  11: '产品方案3-1',
  12: '产品方案3-2',
  13: '产品方案3-3',
  14: '产品方案3-4',
  15: '产品方案3-5',
  16: '产品方案3-0',
  17: '产品方案3-C',
  18: '产品方案2-1',
  19: '产品方案2-2',
  20: '产品方案2-3',
  21: '产品方案2-4',
  22: '产品方案2-5',
  23: '产品方案2-0',
  24: '产品方案2-C',
  25: '产品方案1-1',
  26: '产品方案1-2',
  27: '产品方案1-3',
  28: '产品方案1-4',
  29: '产品方案1-5',
  30: '产品方案1-0',
  31: '产品方案1-C',
  32: '产品方案1-6',
  34: '产品方案1-8',
  36: '产品方案1-10',
  37: '产品方案2-6',
  39: '产品方案2-8',
  41: '产品方案2-10',
  42: '产品方案3-6',
  44: '产品方案3-8',
  46: '产品方案3-10',
  47: '产品方案2-1',
  48: '产品方案2-2',
  49: '产品方案2-3',
  50: '产品方案2-4',
  51: '产品方案2-5',
  52: '产品方案2-0',
  53: '产品方案2-C',
  54: '产品方案2-6',
  55: '产品方案2-8',
  56: '产品方案2-10',
  1000: '含前置产品方案',
  1010: '低息-前置服务费',
  0: '无前置服务费'
}

export const applicantTypeDict = {
  1: '白户',
  2: '征信不足半年',
  3: '征信半年~1年',
  4: '征信1~2年',
  5: '征信2~5年',
  6: '征信5年以上',
  7: '征信有历史但近期未用',
  99: '征信未查'
}
export const refuseReasonDict = {
  '违反政策类': {
    '1': '命中公安部黑名单',
    '2': '失信人法被执行记录',
    '3': '客户不良生活习惯',
    '4': '禁入行业',
    '5': '禁入户籍',
    '6': '禁入年龄',
    '7': '其他禁入标准'
  },
  '欺诈风险类': {
    '1': '代购风险',
    '2': '身份存疑',
    '3': '车价涉嫌高评',
    '4': '代办包装',
    '5': '其他欺诈情况'
  },
  '提供虚假信息': {
    '1': '虚假面审信息',
    '2': '虚假车辆信息',
    '3': '虚假联系人',
    '4': '虚假工作信息',
    '5': '虚假家庭信息',
    '6': '虚假地址',
    '7': '虚假交易',
    '8': '其他虚假资料'
  },
  '信用类': {
    '1': '信用卡/贷款状态异常',
    '2': '客户征信不良',
    '3': '配偶征信不良',
    '4': '共借人征信不良',
    '5': '信用记录异常',
    '6': '信用记录不足',
    '7': '高风险客户'
  },
  '工作收入类': {
    '1': '收入和工作稳定性欠佳',
    '2': '工作信息无法核实',
    '3': '工作状态存疑',
    '4': '高风险行业',
    '5': '还款能力存疑'
  },
  '经营收入类': {
    '1': '收入和工作稳定性欠佳',
    '2': '收入来源不详',
    '3': '还款能力存疑',
    '4': '高风险行业',
    '5': '公司经营状态异常'
  },
  '其他原因': {
    '1': '贷后管理困难',
    '2': '不配合电核',
    '3': '家庭不同意购车行为',
    '4': '担保人不知道购车/不同意担保',
    '5': '反欺诈高风险客户',
    '6': '其他负面信息',
    '7': '主动放弃',
    '8': '非目标客群'
  },
  '无法联络申请人/公司': {
    '1': '无法联络申请人',
    '2': '无法联络申请人公司',
    '3': '无法联络到客户联系人',
    '4': '其他'
  },
  '降额原因': {
    '1': '家庭稳定性不足',
    '2': '工作稳定性不足',
    '3': '车价存疑',
    '4': '征信瑕疵',
    '5': '其他'
  }
}
export const smallNumDict = {
  1: '申请人小号',
  2: '共借人小号'
}
export const creditRateDict = {
  1: 0.62,
  2: 0.54,
  3: 0.49
}
export const courtBlacklistDict = {
  false: '不在法院黑名单',
  true: '在法院黑名单'
}
export const financialBlacklistCardDict = {
  false: '不在金融机构黑名单',
  true: '在金融机构黑名单'
}
export const financialblacklistcellphoneDict = {
  false: '不在金融机构黑名单',
  true: '在金融机构黑名单'
}

export const courtBlacklistNotDict = {
  false: '运营商未提供身份证号码',
  true: '用户身份证号与运营商提供的身份证号码匹配成功'
}
export const userTypeDict = {
  1: '用户',
  2: '联系人',
  3: '车商',
  5: '销售'
}
export const dataTypeDict = {
  'cpws': '裁判文书',
  'zxgg': '执行公告',
  'shixin': '失信公告',
  'wdhmd': '逾期催收名单',
  'bgt': '曝光台',
  'ktgg': '开庭公告',
  'fygg': '法院公告',
  'ajlc': '案件流程'
}
export const fieldDict = {
  1: '金融类疑似欺诈',
  2: '互联网恶意行为',
  3: '信贷不良',
  4: '社会失信',
  5: '多头申请'
}
export const zmLevelDict = {
  0: '其他',
  1: '低风险',
  2: '中风险',
  3: '高风险'
}
export const zmStatusDict = {
  0: '原始状态',
  1: '用户有异议，信息核查中',
  2: '核查完毕，信息无误',
  3: '核查完毕，信息已修改',
  5: '用户对此记录有异议，但异议主张经核查未获支持'
}
export const zmBizCodeDict = {
  'AA': '金融信贷类',
  'AB': '公检法',
  'AC': '支付行业',
  'AD': '出行行业',
  'AE': '酒店行业',
  'AF': '电商行业',
  'AG': '租房行业 ',
  'AH': '运营商行业',
  'AI': '保险行业',
  'AK': '租赁行业'
}
export const zmTypeDict = {
  'AA001': {
    'type': '逾期未还款',
    'settlement': {
      true: '当前不逾期',
      false: '当前逾期'
    }
  },
  'AA002': {
    'type': '套现',
    'settlement': {
      true: '当前不逾期',
      false: '当前逾期'
    }
  },
  'AB001': {
    'type': '被执行人',
    'settlement': {
      true: '已履行',
      false: '未履行'
    }
  },
  'AC001': {
    'type': '盗卡者/盗卡者同伙',
    'settlement': null
  },
  'AC002': {
    'type': '欺诈者/欺诈同伙',
    'settlement': null
  },
  'AC003': {
    'type': '盗用操作/盗用者同伙',
    'settlement': null
  },
  'AC004': {
    'type': '盗用支出/盗用者同伙',
    'settlement': null
  },
  'AC005': {
    'type': '骗赔',
    'settlement': null
  },
  'AC007': {
    'type': '案件库黑名单',
    'settlement': null
  },
  'AD001': {
    'type': '汽车租赁逾期未付款',
    'settlement': {
      true: '当前不逾期',
      false: '当前逾期'
    }
  },
  'AD002': {
    'type': '汽车租赁逾期未还车',
    'settlement': {
      true: '当前不逾期',
      false: '当前逾期'
    }
  },
  'AD003': {
    'type': '汽车租赁违章逾期未付款',
    'settlement': {
      true: '当前不逾期',
      false: '当前逾期'
    }
  },
  'AD004': {
    'type': '汽车租赁其他逾期未付款',
    'settlement': {
      true: '当前不逾期',
      false: '当前逾期'
    }
  },
  'AD005': {
    'type': '单车租赁逾期未付款',
    'settlement': {
      true: '当前不逾期',
      false: '当前逾期'
    }
  },
  'AD006': {
    'type': '单车租赁逾期未还车',
    'settlement': {
      true: '当前不逾期',
      false: '当前逾期'
    }
  },
  'AD007': {
    'type': '交通工具乘用费逾期未付款',
    'settlement': {
      true: '当前不逾期',
      false: '当前逾期'
    }
  },
  'AD008': {
    'type': '路桥费逾期未付款',
    'settlement': {
      true: '当前不逾期',
      false: '当前逾期'
    }
  },
  'AD009': {
    'type': '停车费逾期未付款',
    'settlement': {
      true: '当前不逾期',
      false: '当前逾期'
    }
  },
  'AD010': {
    'type': '相关违约',
    'settlement': {
      true: '当前不逾期',
      false: '当前逾期'
    }
  },
  'AE001': {
    'type': '逾期未付款',
    'settlement': {
      true: '当前不逾期',
      false: '当前逾期'
    }
  },
  'AF001': {
    'type': '虚假交易',
    'settlement': {
      true: '已处罚',
      false: '未处罚'
    }
  },
  'AF002': {
    'type': '恶意差评',
    'settlement': {
      true: '已处罚',
      false: '未处罚'
    }
  },
  'AF003': {
    'type': '涉嫌售假',
    'settlement': {
      true: '已处罚',
      false: '未处罚'
    }
  },
  'AF004': {
    'type': '卖家套现',
    'settlement': {
      true: '已处罚',
      false: '未处罚'
    }
  },
  'AF005': {
    'type': '逾期未付款',
    'settlement': {
      true: '当前不逾期',
      false: '当前逾期'
    }
  },
  'AG001': {
    'type': '房租逾期未付款',
    'settlement': {
      true: '当前不逾期',
      false: '当前逾期'
    }
  },
  'AG002': {
    'type': '杂费逾期未付款',
    'settlement': {
      true: '当前不逾期',
      false: '当前逾期'
    }
  },
  'AG003': {
    'type': '其他违约未付款',
    'settlement': {
      true: '当前不逾期',
      false: '当前逾期'
    }
  },
  'AG004': {
    'type': '租客其他违约',
    'settlement': {
      true: '已处罚',
      false: '未处罚'
    }
  },
  'AG005': {
    'type': '非正常解约',
    'settlement': {
      true: '已处罚',
      false: '未处罚'
    }
  },
  'AH001': {
    'type': '逾期未付款',
    'settlement': {
      true: '当前不逾期',
      false: '当前逾期'
    }
  },
  'AI003': {
    'type': '保证保险出险',
    'settlement': {
      true: '当前不逾期',
      false: '当前逾期'
    }
  },
  'AK001': {
    'type': '逾期未付款',
    'settlement': {
      true: '当前不逾期',
      false: '当前逾期'
    }
  },
  'AK002': {
    'type': '逾期未归还',
    'settlement': {
      true: '当前不逾期',
      false: '当前逾期'
    }
  }
}
// 犯罪类型
export const caseTypeDict = {
  CTYPE_0001: '其它',
  CTYPE_0002: '背叛、分裂国家案',
  CTYPE_0003: '投敌叛变案',
  CTYPE_0004: '非法提供秘密情报案',
  CTYPE_0005: '危害社会公共安全案',
  CTYPE_0006: '破坏交通运输公共设施案',
  CTYPE_0007: '实施恐怖案',
  CTYPE_0008: '非法枪支弹药爆炸案',
  CTYPE_0009: '违反枪支弹药管理案',
  CTYPE_0010: '重大安全责任事故案',
  CTYPE_0011: '生产、销售伪劣商品案',
  CTYPE_0012: '走私案',
  CTYPE_0013: '妨害对公司、企业的管理秩序案',
  CTYPE_0014: '破坏金融管理秩序案',
  CTYPE_0015: '金融诈骗案',
  CTYPE_0016: '危害税收征管案',
  CTYPE_0017: '侵犯知识产权案',
  CTYPE_0018: '扰乱市场秩序案',
  CTYPE_0019: '非法经营案',
  CTYPE_0020: '侵犯人身权利案',
  CTYPE_0021: '破坏民族平等、宗教信仰案',
  CTYPE_0022: '侵犯民主权利案',
  CTYPE_0023: '出售、非法提供公民个人信息案',
  CTYPE_0024: '实施恐怖案妨碍婚姻家庭权利案',
  CTYPE_0025: '侵犯财产案',
  CTYPE_0026: '扰乱公共秩序案',
  CTYPE_0027: '妨害司法案',
  CTYPE_0028: '妨害国（边）境管理案',
  CTYPE_0029: '妨害文物管理案',
  CTYPE_0030: '危害公共卫生案',
  CTYPE_0031: '破坏环境资源保护案',
  CTYPE_0032: '涉毒案',
  CTYPE_0033: '卖淫、传播淫秽物品案案',
  CTYPE_0034: '危害国防利益案',
  CTYPE_0035: '贪污贿赂案',
  CTYPE_0036: '渎职案',
  CTYPE_0037: '军人违反职责案',
  CTYPE_0038: '在逃',
  CTYPE_0039: '吸毒'
}
// 犯罪时间
export const caseTimeDict = {
  CTIME_0001: '0.25 年(即 3 个月)(不含)以内',
  CTIME_0002: '0.25 年(即 3 个月)以上， 0.5 年(即 6 个月)(不含)以内',
  CTIME_0003: '0.5 年(即 6 个月)以上，1 年(不含)以内',
  CTIME_0004: '1 年以上， 2 年(不含)以内',
  CTIME_0005: '2 年以上， 5 年(不含)以内',
  CTIME_0006: '5 年以上， 10 年(不含)以内',
  CTIME_0007: '10 年以上， 15 年(不含)以内',
  CTIME_0008: '15 年以上， 20(不含)以内',
  CTIME_0009: '20 年(含)以上',
  CTIME_0010: '未知'
}
// 稳定性
export const degreeDict = {
  1: '极强',
  2: '强',
  3: '一般',
  4: '弱',
  5: '极弱'
}
export const isYesDict = {
  0: '否',
  1: '是'
}
// 手机依赖度
export const cellphoneDict = {
  5: '极强',
  4: '强',
  3: '一般',
  2: '弱',
  1: '极弱'
}
export const afuDict = {
  orgType: {
    1110: 'P2P',
    1111: 'P2P-车贷',
    1112: 'P2P-房贷',
    1120: '非持牌消金',
    1121: '非持牌消金-小额现金贷',
    1122: '非持牌消金-消费分期',
    1130: '持牌消费金融',
    1140: '银行',
    1150: '融资租赁',
    1003: '小贷',
    1160: '典当',
    1170: '担保',
    1180: '平台门户',
    1190: '资金平台',
    1200: '保险'
  },
  queryReason: {
    10: '贷款审批',
    11: '贷后管理',
    12: '信用卡审批',
    13: '担保资格审查',
    14: '保前审查'
  },
  // 审批结果
  approvalStatusCode: {
    201: '审核中',
    202: '批贷已放款',
    203: '拒贷',
    204: '客户放弃'
  },
  // 还款状态
  loanStatusCode: {
    301: '正常',
    302: '逾期',
    303: '结清'
  },
  // 借款类型
  loanTypeCode: {
    21: '信用',
    22: '抵押',
    23: '担保'
  },
  // 逾期情况
  overdueStatus: {
    M1: '当前逾期 1 期',
    M2: '当前逾期 2 期',
    M3: '当前逾期 3 期',
    'M3+': '当前逾期 3 期以上的，不含 3 期',
    M4: '当前逾期 4 期',
    M5: '当前逾期 5 期',
    M6: '当前逾期 6 期',
    'M6+': '当前逾期 6 期以上的，不含 6 期'
  },
  riskItemTypeCode: {
    101010: '证件号码'
  },
  // 风险类别
  riskTypeCode: {
    11: '伪冒类',
    12: '资料虚假类',
    10: '丧失还款能力类',
    13: '用途虚假类',
    19: '其他'
  }
}
export const riskDetectionDict = {
  1: '申请人',
  2: '申请人配偶',
  3: '共借人',
  4: '共借人配偶'
}
export const hitDict = {
  0: '未命中',
  1: '命中'
}
export const matchDict = {
  1: '暂无通讯录',
  2: '匹配成功',
  3: '匹配失败'
}
export const youfenDriverDict = {
  'A': '正常',
  'B': '超分',
  'C': '转出',
  'D': '暂扣',
  'E': '撤销',
  'F': '吊销',
  'G': '注销',
  'H': '违法未处理',
  'U': '扣留',
  'I': '事故未处理',
  'J': '停止使用',
  'K': '协查',
  'L': '锁定',
  'M': '逾期未换证',
  'N': '延期换证',
  'P': '延期体检',
  'R': '逾期未体检',
  'Z': '其他',
  'S': '逾期未审验'
}
export const reconsiderStatusDict = {
  '1': '复议中',
  '2': '复议中',
  '3': '通过',
  '-2': '驳回'
}
export const refusalReasonDict = {
  1: '欺诈风险',
  2: '负面信息',
  3: '征信不良',
  4: '规则拒绝'
}
export const applyRegisterDict = {
  1: '本市人',
  2: '本省人',
  3: '外省人异地购车',
  4: '外省人本地长居',
  5: '外省人本地短居'
}
export const currentAddressDict = {
  1: '基本真实',
  2: '无法核实'
}
export const familyLiveDict = {
  1: '配偶居住',
  2: '父母居住',
  3: '自己居住',
  4: '其他'
}
export const orderProgressStep = {
  1: '客户提单',
  5: '提交征信请求',
  10: '模型机审',
  20: '征信机审',
  21: '主借人配偶征信同步',
  24: '共借人配偶征信同步',
  15: '共借人模型机审',
  23: '共借人征信机审',
  25: '继续面审',
  26: '面审提交',
  30: '风控领单',
  35: '风控审核',
  36: '补件完成',
  37: '共借完成',
  38: '重新提交面审',
  40: '合影上传',
  41: '合影审核（领单）',
  45: '合影审核',
  46: '补件完成',
  50: '合同上传',
  51: '合同审核（领单）',
  55: '合同审核',
  56: '补件完成',
  57: '运营修改订单',
  60: '放款材料上传',
  61: '放款材料审核（领单）',
  65: '放款材料审核',
  66: '补件完成',
  70: '资方审核',
  80: '已放款',
  90: '退回风控',
  99: '主动取消'
}
export const familySupportDict = {
  1: '支持',
  2: '不支持',
  3: '无法核实'
}
export const jobDict = {
  1: '可核实',
  2: '基本可核',
  3: '无法核实'
}
export const manCarMatchDict = {
  1: '匹配',
  2: '不匹配'
}
export const riskControlableDict = {
  1: '可控',
  2: '不可控'
}

// 审核操作中的订单类型
export const creditPassTypeDict = {
  1: '正常通过',
  2: '复议通过',
  3: '特批通过',
  4: '关注通过',
  5: '正常拒绝',
  6: '关注拒绝'
}
export const orderProgressStepStatus = {
  0: '',
  1: '通过',
  2: '退回',
  3: '共借',
  4: '补件',
  6: '退回风控',
  7: '取消共借',
  '-1': '拒绝'
}
export const monthlyIncomeDict = {
  1: '0-1000',
  2: '1001-2000',
  3: '2001-3000',
  4: '3001-4000',
  5: '4001-5000',
  6: '5001-6000',
  7: '6001-7000',
  8: '7001-8000',
  9: '8001-9000',
  10: '9001-10000',
  11: '10001-15000',
  12: '15001-20000',
  13: '20000以上'
}
export const tagDict = {
  1: '客户',
  2: '手机号',
  3: '订单'
}
export const area = [{"district_code":"10000000","district":"苏皖大区","subnum":10,"id":2,"district_type":20,"subDistrict":[{"district_code":"10532901","district":"大理市","subnum":2,"id":8,"district_type":30},{"district_code":"10340100","district":"合肥市","subnum":0,"id":19,"district_type":30},{"district_code":"10320300","district":"徐州市","subnum":0,"id":28,"district_type":30},{"district_code":"10320200","district":"无锡市","subnum":0,"id":29,"district_type":30},{"district_code":"10320400","district":"常州市","subnum":0,"id":30,"district_type":30},{"district_code":"10310000","district":"上海市","subnum":0,"id":32,"district_type":30},{"district_code":"10320600","district":"南通市","subnum":0,"id":41,"district_type":30},{"district_code":"10320500","district":"苏州市","subnum":0,"id":42,"district_type":30},{"district_code":"12010157","district":"ssss","subnum":0,"id":134,"district_type":30},{"district_code":"11010157","district":"不加","subnum":0,"id":135,"district_type":30},{"parentCode":"10532901","district_code":"11010277","district":"ssad","subnum":0,"id":133,"district_type":40},{"parentCode":"10532901","district_code":"14020068","district":"12123","subnum":0,"id":149,"district_type":40}]},{"district_code":"20000000","district":"粤赣大区","subnum":6,"id":3,"district_type":20,"subDistrict":[{"district_code":"20441900","district":"东莞市","subnum":0,"id":22,"district_type":30},{"district_code":"20440500","district":"汕头市","subnum":0,"id":25,"district_type":30},{"district_code":"20441300","district":"惠州市","subnum":0,"id":26,"district_type":30},{"district_code":"20440600","district":"佛山市","subnum":0,"id":27,"district_type":30},{"district_code":"20442000","district":"中山市","subnum":1,"id":38,"district_type":30},{"district_code":"20360700","district":"赣州市","subnum":0,"id":46,"district_type":30},{"parentCode":"20442000","district_code":"20360100","district":"南昌市","subnum":0,"id":47,"district_type":40}]},{"district_code":"30000000","district":"西部大区","subnum":7,"id":4,"district_type":20,"subDistrict":[{"district_code":"30530100","district":"昆明市","subnum":0,"id":5,"district_type":30},{"district_code":"30532601","district":"文山市","subnum":1,"id":7,"district_type":30},{"district_code":"30500000","district":"重庆市","subnum":0,"id":20,"district_type":30},{"district_code":"30520100","district":"贵阳市","subnum":0,"id":21,"district_type":30},{"district_code":"10371300","district":"临沂市","subnum":0,"id":39,"district_type":30},{"district_code":"30510700","district":"绵阳市","subnum":0,"id":55,"district_type":30},{"parentCode":"30532601","district_code":"30530300","district":"曲靖市","subnum":0,"id":9,"district_type":40}]},{"district_code":"40000000","district":"西北大区","subnum":3,"id":13,"district_type":20,"subDistrict":[{"district_code":"40620100","district":"兰州市","subnum":0,"id":14,"district_type":30},{"district_code":"40610100","district":"西安市","subnum":0,"id":15,"district_type":30},{"district_code":"40640100","district":"银川市","subnum":0,"id":24,"district_type":30}]},{"district_code":"31000000","district":"东北大区","subnum":5,"id":33,"district_type":20,"subDistrict":[{"district_code":"31210100","district":"沈阳市","subnum":0,"id":11,"district_type":30},{"district_code":"31210200","district":"大连市","subnum":0,"id":12,"district_type":30},{"district_code":"31220100","district":"长春市","subnum":0,"id":34,"district_type":30},{"district_code":"31230100","district":"哈尔滨市","subnum":0,"id":35,"district_type":30},{"district_code":"31220200","district":"吉林市","subnum":0,"id":48,"district_type":30}]},{"district_code":"50000000","district":"湘桂大区","subnum":10,"id":44,"district_type":20,"subDistrict":[{"district_code":"50430100","district":"长沙市","subnum":0,"id":6,"district_type":30},{"district_code":"50450100","district":"南宁市","subnum":0,"id":10,"district_type":30},{"district_code":"50450200","district":"柳州市","subnum":0,"id":17,"district_type":30},{"district_code":"50430200","district":"株洲市","subnum":0,"id":31,"district_type":30},{"district_code":"50450300","district":"桂林市","subnum":0,"id":37,"district_type":30},{"district_code":"50422801","district":"恩施市","subnum":0,"id":49,"district_type":30},{"district_code":"50450900","district":"玉林市","subnum":0,"id":52,"district_type":30},{"district_code":"50370900","district":"泰安市","subnum":0,"id":53,"district_type":30},{"district_code":"11010137","district":"df","subnum":0,"id":157,"district_type":30},{"district_code":"11010265","district":"faf","subnum":0,"id":158,"district_type":30}]},{"district_code":"60000000","district":"华北大区","subnum":5,"id":45,"district_type":20,"subDistrict":[{"district_code":"60140100","district":"太原市","subnum":0,"id":16,"district_type":30},{"district_code":"60130200","district":"唐山市","subnum":0,"id":18,"district_type":30},{"district_code":"60140200","district":"大同市","subnum":2,"id":23,"district_type":30},{"district_code":"60130100","district":"石家庄市","subnum":0,"id":36,"district_type":30},{"district_code":"60370100","district":"济南市","subnum":0,"id":54,"district_type":30},{"parentCode":"60140200","district_code":"11010199","district":"那个人联络点","subnum":0,"id":136,"district_type":40},{"parentCode":"60140200","district_code":"14020021","district":"大挺联","subnum":0,"id":137,"district_type":40}]},{"district_code":"99000000","district":"X项目大区","subnum":1,"id":50,"district_type":20,"subDistrict":[{"district_code":"99000001","district":"网-湘","subnum":0,"id":51,"district_type":30}]},{"district_code":"70000000","district":"云贵大区","subnum":1,"id":57,"district_type":20,"subDistrict":[{"district_code":"70510100","district":"成都市","subnum":0,"id":59,"district_type":30}]},{"district_code":"64000000","district":"萨芬","subnum":1,"id":102,"district_type":20,"subDistrict":[]},{"district_code":"51000000","district":"敬业福啊","subnum":1,"id":106,"district_type":20,"subDistrict":[]},{"district_code":"47000000","district":"花花大区","subnum":1,"id":122,"district_type":20,"subDistrict":[{"district_code":"11010168","district":"花城市","subnum":1,"id":125,"district_type":30},{"parentCode":"11010168","district_code":"11010296","district":"西城市","subnum":0,"id":126,"district_type":40}]},{"district_code":"22000000","district":"花呗大区","subnum":0,"id":123,"district_type":20,"subDistrict":[]},{"district_code":"38000000","district":"六福大区","subnum":0,"id":140,"district_type":20,"subDistrict":[]},{"district_code":"89000000","district":"吻别gog","subnum":1,"id":142,"district_type":20,"subDistrict":[]},{"district_code":"82000000","district":"文刀大区","subnum":1,"id":146,"district_type":20,"subDistrict":[{"district_code":"15020038","district":"包头市","subnum":3,"id":150,"district_type":30},{"parentCode":"15020038","district_code":"15020072","district":"呼市","subnum":0,"id":152,"district_type":40},{"parentCode":"15020038","district_code":"15040027","district":"赤峰市","subnum":0,"id":155,"district_type":40},{"parentCode":"15020038","district_code":"15030014","district":"乌海市","subnum":0,"id":156,"district_type":40}]},{"district_code":"39000000","district":"好的文刀大区","subnum":1,"id":147,"district_type":20,"subDistrict":[]},{"district_code":"48000000","district":"好的文刀","subnum":0,"id":148,"district_type":20,"subDistrict":[]},{"district_code":"96000000","district":"文刀文刀","subnum":1,"id":151,"district_type":20,"subDistrict":[{"district_code":"15040058","district":"赤峰市","subnum":0,"id":154,"district_type":30}]},{"district_code":"21000000","district":"哈哈","subnum":0,"id":160,"district_type":20,"subDistrict":[]}]
export const DIC = {
  sexDict,
  isHasDict,
  educationDict,
  drivingLicenseDict,
  directTypeDict,
  statusFormatterDict,
  maritalStatusDict,
  workTypeDict,
  cooperationDict,
  districtTypeDict,
  roleDict,
  accountStatusDict,
  salesmanStateDict,
  attachDict,
  carDealerTypeDict,
  carDealerStatusDict,
  repaymentTypeDict,
  loanStatusDict,
  orderStatusDict,
  creditDict,
  specialPlanDict,
  applicantTypeDict,
  refuseReasonDict,
  smallNumDict,
  creditRateDict,
  courtBlacklistDict,
  financialBlacklistCardDict,
  financialblacklistcellphoneDict,
  courtBlacklistNotDict,
  userTypeDict,
  dataTypeDict,
  fieldDict,
  zmLevelDict,
  zmStatusDict,
  zmBizCodeDict,
  zmTypeDict,
  caseTypeDict,
  caseTimeDict,
  degreeDict,
  isYesDict,
  cellphoneDict,
  afuDict,
  riskDetectionDict,
  hitDict,
  matchDict,
  youfenDriverDict,
  reconsiderStatusDict,
  refusalReasonDict,
  applyRegisterDict,
  currentAddressDict,
  familyLiveDict,
  orderProgressStep,
  familySupportDict,
  jobDict,
  manCarMatchDict,
  riskControlableDict,
  creditPassTypeDict,
  orderProgressStepStatus,
  monthlyIncomeDict,
  tagDict,
  area
}
export default DIC
