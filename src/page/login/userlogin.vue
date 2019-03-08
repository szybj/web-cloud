<template>
  <div class="loginWrap">
    <el-form class="login-form" status-icon :rules="loginRules" ref="loginForm" :model="loginForm" label-width="0">
      <el-form-item prop="username">
        <el-input size="small" @keyup.enter.native="handleLogin" v-model="loginForm.username" auto-complete="off" placeholder="请输入用户名">
          <i slot="prefix" class="icon-yonghu"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input size="small" @keyup.enter.native="handleLogin" :type="passwordType" v-model="loginForm.password" auto-complete="off" placeholder="请输入密码">
          <i class="el-icon-view el-input__icon" slot="suffix" @click="showPassword"></i>
          <i slot="prefix" class="icon-mima"></i>
        </el-input>
      </el-form-item>
      <el-checkbox v-model="checked">记住账号</el-checkbox>
      <el-form-item>
        <el-button type="primary" size="small" @click.native.prevent="handleLogin" class="login-submit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import { area } from 'utils/loginUtils'
export default {
  name: "userLogin",
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123456",
        systemId: 1
      },
      checked: false,
      loginRules: {
        username: [
          { required: true, trigger: "blur",  message: "请输入用户名", }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" }
        ]
      },
      passwordType: "password"
    }
  },
  created() {},
  mounted() {},
  computed: {
    ...mapGetters(["tagWel"])
  },
  props: [],
  methods: {
    ...mapActions(['logIn', 'getSalesDistrict']),
    showPassword() {
      this.passwordType == "" ? (this.passwordType = "password") : (this.passwordType = "")
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$store.dispatch("logIn", this.loginForm).then(() => {
            this.getSalesDistrict()
            const areaData = [
              {
                "district_code": "10000000",
                "district": "苏皖大区",
                "subnum": 10,
                "id": 2,
                "district_type": 20,
                "subDistrict": [
                  {
                    "district_code": "10532901",
                    "district": "大理市",
                    "subnum": 2,
                    "id": 8,
                    "district_type": 30
                  },
                  {
                    "district_code": "10340100",
                    "district": "合肥市",
                    "subnum": 0,
                    "id": 19,
                    "district_type": 30
                  },
                  {
                    "district_code": "10320300",
                    "district": "徐州市",
                    "subnum": 0,
                    "id": 28,
                    "district_type": 30
                  },
                  {
                    "district_code": "10320200",
                    "district": "无锡市",
                    "subnum": 0,
                    "id": 29,
                    "district_type": 30
                  },
                  {
                    "district_code": "10320400",
                    "district": "常州市",
                    "subnum": 0,
                    "id": 30,
                    "district_type": 30
                  },
                  {
                    "district_code": "10310000",
                    "district": "上海市",
                    "subnum": 0,
                    "id": 32,
                    "district_type": 30
                  },
                  {
                    "district_code": "10320600",
                    "district": "南通市",
                    "subnum": 0,
                    "id": 41,
                    "district_type": 30
                  },
                  {
                    "district_code": "10320500",
                    "district": "苏州市",
                    "subnum": 0,
                    "id": 42,
                    "district_type": 30
                  },
                  {
                    "district_code": "12010157",
                    "district": "ssss",
                    "subnum": 0,
                    "id": 134,
                    "district_type": 30
                  },
                  {
                    "district_code": "11010157",
                    "district": "不加",
                    "subnum": 0,
                    "id": 135,
                    "district_type": 30
                  },
                  {
                    "parentCode": "10532901",
                    "district_code": "11010277",
                    "district": "ssad",
                    "subnum": 0,
                    "id": 133,
                    "district_type": 40
                  },
                  {
                    "parentCode": "10532901",
                    "district_code": "14020068",
                    "district": "12123",
                    "subnum": 0,
                    "id": 149,
                    "district_type": 40
                  }
                ]
              },
              {
                "district_code": "20000000",
                "district": "粤赣大区",
                "subnum": 6,
                "id": 3,
                "district_type": 20,
                "subDistrict": [
                  {
                    "district_code": "20441900",
                    "district": "东莞市",
                    "subnum": 0,
                    "id": 22,
                    "district_type": 30
                  },
                  {
                    "district_code": "20440500",
                    "district": "汕头市",
                    "subnum": 0,
                    "id": 25,
                    "district_type": 30
                  },
                  {
                    "district_code": "20441300",
                    "district": "惠州市",
                    "subnum": 0,
                    "id": 26,
                    "district_type": 30
                  },
                  {
                    "district_code": "20440600",
                    "district": "佛山市",
                    "subnum": 0,
                    "id": 27,
                    "district_type": 30
                  },
                  {
                    "district_code": "20442000",
                    "district": "中山市",
                    "subnum": 1,
                    "id": 38,
                    "district_type": 30
                  },
                  {
                    "district_code": "20360700",
                    "district": "赣州市",
                    "subnum": 0,
                    "id": 46,
                    "district_type": 30
                  },
                  {
                    "parentCode": "20442000",
                    "district_code": "20360100",
                    "district": "南昌市",
                    "subnum": 0,
                    "id": 47,
                    "district_type": 40
                  }
                ]
              },
              {
                "district_code": "30000000",
                "district": "西部大区",
                "subnum": 7,
                "id": 4,
                "district_type": 20,
                "subDistrict": [
                  {
                    "district_code": "30530100",
                    "district": "昆明市",
                    "subnum": 0,
                    "id": 5,
                    "district_type": 30
                  },
                  {
                    "district_code": "30532601",
                    "district": "文山市",
                    "subnum": 1,
                    "id": 7,
                    "district_type": 30
                  },
                  {
                    "district_code": "30500000",
                    "district": "重庆市",
                    "subnum": 0,
                    "id": 20,
                    "district_type": 30
                  },
                  {
                    "district_code": "30520100",
                    "district": "贵阳市",
                    "subnum": 0,
                    "id": 21,
                    "district_type": 30
                  },
                  {
                    "district_code": "10371300",
                    "district": "临沂市",
                    "subnum": 0,
                    "id": 39,
                    "district_type": 30
                  },
                  {
                    "district_code": "30510700",
                    "district": "绵阳市",
                    "subnum": 0,
                    "id": 55,
                    "district_type": 30
                  },
                  {
                    "parentCode": "30532601",
                    "district_code": "30530300",
                    "district": "曲靖市",
                    "subnum": 0,
                    "id": 9,
                    "district_type": 40
                  }
                ]
              },
              {
                "district_code": "40000000",
                "district": "西北大区",
                "subnum": 3,
                "id": 13,
                "district_type": 20,
                "subDistrict": [
                  {
                    "district_code": "40620100",
                    "district": "兰州市",
                    "subnum": 0,
                    "id": 14,
                    "district_type": 30
                  },
                  {
                    "district_code": "40610100",
                    "district": "西安市",
                    "subnum": 0,
                    "id": 15,
                    "district_type": 30
                  },
                  {
                    "district_code": "40640100",
                    "district": "银川市",
                    "subnum": 0,
                    "id": 24,
                    "district_type": 30
                  }
                ]
              },
              {
                "district_code": "31000000",
                "district": "东北大区",
                "subnum": 5,
                "id": 33,
                "district_type": 20,
                "subDistrict": [
                  {
                    "district_code": "31210100",
                    "district": "沈阳市",
                    "subnum": 0,
                    "id": 11,
                    "district_type": 30
                  },
                  {
                    "district_code": "31210200",
                    "district": "大连市",
                    "subnum": 0,
                    "id": 12,
                    "district_type": 30
                  },
                  {
                    "district_code": "31220100",
                    "district": "长春市",
                    "subnum": 0,
                    "id": 34,
                    "district_type": 30
                  },
                  {
                    "district_code": "31230100",
                    "district": "哈尔滨市",
                    "subnum": 0,
                    "id": 35,
                    "district_type": 30
                  },
                  {
                    "district_code": "31220200",
                    "district": "吉林市",
                    "subnum": 0,
                    "id": 48,
                    "district_type": 30
                  }
                ]
              },
              {
                "district_code": "50000000",
                "district": "湘桂大区",
                "subnum": 10,
                "id": 44,
                "district_type": 20,
                "subDistrict": [
                  {
                    "district_code": "50430100",
                    "district": "长沙市",
                    "subnum": 0,
                    "id": 6,
                    "district_type": 30
                  },
                  {
                    "district_code": "50450100",
                    "district": "南宁市",
                    "subnum": 0,
                    "id": 10,
                    "district_type": 30
                  },
                  {
                    "district_code": "50450200",
                    "district": "柳州市",
                    "subnum": 0,
                    "id": 17,
                    "district_type": 30
                  },
                  {
                    "district_code": "50430200",
                    "district": "株洲市",
                    "subnum": 0,
                    "id": 31,
                    "district_type": 30
                  },
                  {
                    "district_code": "50450300",
                    "district": "桂林市",
                    "subnum": 0,
                    "id": 37,
                    "district_type": 30
                  },
                  {
                    "district_code": "50422801",
                    "district": "恩施市",
                    "subnum": 0,
                    "id": 49,
                    "district_type": 30
                  },
                  {
                    "district_code": "50450900",
                    "district": "玉林市",
                    "subnum": 0,
                    "id": 52,
                    "district_type": 30
                  },
                  {
                    "district_code": "50370900",
                    "district": "泰安市",
                    "subnum": 0,
                    "id": 53,
                    "district_type": 30
                  },
                  {
                    "district_code": "11010137",
                    "district": "df",
                    "subnum": 0,
                    "id": 157,
                    "district_type": 30
                  },
                  {
                    "district_code": "11010265",
                    "district": "faf",
                    "subnum": 0,
                    "id": 158,
                    "district_type": 30
                  }
                ]
              },
              {
                "district_code": "60000000",
                "district": "华北大区",
                "subnum": 5,
                "id": 45,
                "district_type": 20,
                "subDistrict": [
                  {
                    "district_code": "60140100",
                    "district": "太原市",
                    "subnum": 0,
                    "id": 16,
                    "district_type": 30
                  },
                  {
                    "district_code": "60130200",
                    "district": "唐山市",
                    "subnum": 0,
                    "id": 18,
                    "district_type": 30
                  },
                  {
                    "district_code": "60140200",
                    "district": "大同市",
                    "subnum": 2,
                    "id": 23,
                    "district_type": 30
                  },
                  {
                    "district_code": "60130100",
                    "district": "石家庄市",
                    "subnum": 0,
                    "id": 36,
                    "district_type": 30
                  },
                  {
                    "district_code": "60370100",
                    "district": "济南市",
                    "subnum": 0,
                    "id": 54,
                    "district_type": 30
                  },
                  {
                    "parentCode": "60140200",
                    "district_code": "11010199",
                    "district": "那个人联络点",
                    "subnum": 0,
                    "id": 136,
                    "district_type": 40
                  },
                  {
                    "parentCode": "60140200",
                    "district_code": "14020021",
                    "district": "大挺联",
                    "subnum": 0,
                    "id": 137,
                    "district_type": 40
                  }
                ]
              },
              {
                "district_code": "99000000",
                "district": "X项目大区",
                "subnum": 1,
                "id": 50,
                "district_type": 20,
                "subDistrict": [
                  {
                    "district_code": "99000001",
                    "district": "网-湘",
                    "subnum": 0,
                    "id": 51,
                    "district_type": 30
                  }
                ]
              },
              {
                "district_code": "70000000",
                "district": "云贵大区",
                "subnum": 1,
                "id": 57,
                "district_type": 20,
                "subDistrict": [
                  {
                    "district_code": "70510100",
                    "district": "成都市",
                    "subnum": 0,
                    "id": 59,
                    "district_type": 30
                  }
                ]
              },
              {
                "district_code": "64000000",
                "district": "萨芬",
                "subnum": 1,
                "id": 102,
                "district_type": 20,
                "subDistrict": []
              },
              {
                "district_code": "51000000",
                "district": "敬业福啊",
                "subnum": 1,
                "id": 106,
                "district_type": 20,
                "subDistrict": []
              },
              {
                "district_code": "47000000",
                "district": "花花大区",
                "subnum": 1,
                "id": 122,
                "district_type": 20,
                "subDistrict": [
                  {
                    "district_code": "11010168",
                    "district": "花城市",
                    "subnum": 1,
                    "id": 125,
                    "district_type": 30
                  },
                  {
                    "parentCode": "11010168",
                    "district_code": "11010296",
                    "district": "西城市",
                    "subnum": 0,
                    "id": 126,
                    "district_type": 40
                  }
                ]
              },
              {
                "district_code": "22000000",
                "district": "花呗大区",
                "subnum": 0,
                "id": 123,
                "district_type": 20,
                "subDistrict": []
              },
              {
                "district_code": "38000000",
                "district": "六福大区",
                "subnum": 0,
                "id": 140,
                "district_type": 20,
                "subDistrict": []
              },
              {
                "district_code": "89000000",
                "district": "吻别gog",
                "subnum": 1,
                "id": 142,
                "district_type": 20,
                "subDistrict": []
              },
              {
                "district_code": "82000000",
                "district": "文刀大区",
                "subnum": 1,
                "id": 146,
                "district_type": 20,
                "subDistrict": [
                  {
                    "district_code": "15020038",
                    "district": "包头市",
                    "subnum": 3,
                    "id": 150,
                    "district_type": 30
                  },
                  {
                    "parentCode": "15020038",
                    "district_code": "15020072",
                    "district": "呼市",
                    "subnum": 0,
                    "id": 152,
                    "district_type": 40
                  },
                  {
                    "parentCode": "15020038",
                    "district_code": "15040027",
                    "district": "赤峰市",
                    "subnum": 0,
                    "id": 155,
                    "district_type": 40
                  },
                  {
                    "parentCode": "15020038",
                    "district_code": "15030014",
                    "district": "乌海市",
                    "subnum": 0,
                    "id": 156,
                    "district_type": 40
                  }
                ]
              },
              {
                "district_code": "39000000",
                "district": "好的文刀大区",
                "subnum": 1,
                "id": 147,
                "district_type": 20,
                "subDistrict": []
              },
              {
                "district_code": "48000000",
                "district": "好的文刀",
                "subnum": 0,
                "id": 148,
                "district_type": 20,
                "subDistrict": []
              },
              {
                "district_code": "96000000",
                "district": "文刀文刀",
                "subnum": 1,
                "id": 151,
                "district_type": 20,
                "subDistrict": [
                  {
                    "district_code": "15040058",
                    "district": "赤峰市",
                    "subnum": 0,
                    "id": 154,
                    "district_type": 30
                  }
                ]
              },
              {
                "district_code": "21000000",
                "district": "哈哈",
                "subnum": 0,
                "id": 160,
                "district_type": 20,
                "subDistrict": []
              }
            ]
            area(JSON.stringify(areaData))
            this.$router.push({path: this.tagWel.value})
          })
        }
      })
    }
  }
}
</script>
<style>

</style>
