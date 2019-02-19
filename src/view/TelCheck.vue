<template>
  <div>
    <el-header class="header">
      <el-menu class="el-menu-demo" mode="horizontal">
        <el-row>
          <el-col :span="2">
            <router-link to="/" tag="li">
              <div class="grid-content">
                <i class="el-icon-arrow-left"></i>
              </div>
            </router-link>
          </el-col>
          <el-col :span="20">
            <div class="grid-content">
              <p class="title">大连交通大学后勤维修管理系统</p>
            </div>
          </el-col>
          <el-col :span="2">
            <router-link to="/" tag="li">
              <div class="grid-content">
                  <i class="el-icon-menu"></i>
              </div>
            </router-link>
          </el-col>
        </el-row>
      </el-menu>
    </el-header>
    <el-card class="box-card" :model="phoneBaoxiu">
      <el-input v-model="phoneBaoxiu.userPhone" placeholder="请输入您报修时填写的手机号">
      </el-input>
      <el-row>
        <el-button type="warning" @click="submitCheck('phoneBaoxiu')">查询</el-button>
      </el-row>
    </el-card>

    <el-card class="box-card">

    </el-card>
    <el-footer class="footer"><p class="footerTitle">程序设计：大连交通大学56工作室</p></el-footer>
  </div>
</template>

<script>
import { postuserPhone } from '@/api/baoxiu'
export default {
  data () {
    return {
      phoneBaoxiu: {
        userPhone: ''
      }
    }
  },
  methods: {
    submitCheck (phoneBaoxiu) {
      postuserPhone(this.phoneBaoxiu).then((res) => {
        let phoneBaoxiu = JSON.parse(res.data.phoneBaoxiu)
        this.$store.commit('storeUserPhone', phoneBaoxiu.userPhone)
        this.phoneBaoxiu.userPhone = this.$store.getters.userPhone
        if (phoneBaoxiu.userPhone) {
          this.$router.push('/BxList')
        }
      })
    }
  }
}
</script>

<style>
.header {
  width: 100.5%;
  padding: 0px;
  text-align: center;
}
.el-menu-demo {
  background-color: #409EFF;
  height: 50px;
  color:#ffffff;
  font-weight: 400;
  margin-left: -0.9%;
  width: 100%;
}
.title {
  margin-top: -3px;
}
.grid-content {
  margin-top: 15px;
}
.text {
  font-size: 14px;
}
.box-card {
  margin-top: 10px;
  padding: 0px;
}
.el-card__body _{
  margin-top: 30px;
  padding: 0px;
}
.second {
  padding:0px;
}
.el-icon-success {
  margin-top: 2px;
  font-size: 50px;
  color: #67C23A;
}
.footer {
  background-color: #409EFF;
  height: 50px;
  color:#ffffff;
  font-weight: 400;
  margin-left: -0.9%;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
}
.footerTitle {
  margin-top: 16px;
}
.el-button--warning {
  width: 99%;
  margin-top: 20px;
}
</style>
