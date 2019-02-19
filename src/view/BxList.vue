<template>
  <div>
    <el-header class="header">
      <el-menu class="el-menu-demo" mode="horizontal">
        <el-row>
          <el-col :span="2">
            <router-link to="/FailureReporting" tag="li">
              <div class="grid-content">
                <i class="el-icon-arrow-left"></i>
              </div>
            </router-link>
          </el-col>
          <el-col :span="20" class="title_header">
            <div class="grid-content">
              <p class="title">我的报修</p>
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
    <el-main>
    <el-tabs :tab-position="tabPosition" style="height: 200px;">
      <el-tab-pane label="全部">
        <el-card class="box-card" v-for="list in lists" :key="list.id">
          <el-row>
            <el-col :span="18">报修单号:{{list.id}} </el-col>
            <el-col :span="6"><el-button type="primary" size="mini">{{list.state}}</el-button></el-col>
          </el-row>
          <el-row class="description">
            <el-col :span="24">{{list.campus}}-{{list.place}}-{{list.position}}-{{list.equipment}}</el-col>
          </el-row>
          <el-row  class="time">
            <el-col :span="18">{{list.time}}</el-col>
            <el-col :span="6" class="details">
              <el-button type="text" style="font-size:14px;" @click="submitCheck(list.id)">查看详情</el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="待接单">
        <el-card class="box-card" v-for="list in lists" :key="list.state">
          <el-row>
            <el-col :span="18">报修单号:{{list.id}} </el-col>
            <el-col :span="6"><el-button type="primary" size="mini">{{list.state}}</el-button></el-col>
          </el-row>
          <el-row class="description">
            <el-col :span="24">{{list.campus}}-{{list.place}}-{{list.position}}-{{list.equipment}}</el-col>
          </el-row>
          <el-row  class="time">
            <el-col :span="18">{{list.time}}</el-col>
            <el-col :span="6" class="details">
              <el-button type="text" style="font-size:14px;" @click="submitCheck(list.id)">查看详情</el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="维修中">维修中</el-tab-pane>
      <el-tab-pane label="待评价">待评价</el-tab-pane>
    </el-tabs>
</el-main>
    <el-footer class="footer"><p class="footerTitle">程序设计：大连交通大学56工作室</p></el-footer>
  </div>
</template>

<script>
import { getUserLists, postListId } from '../api/baoxiu'
export default {
  data () {
    return {
      tabPosition: '',
      userPhone: '',
      lists: []
    }
  },
  methods: {
    loadCurrentUserPhone: function () {
      this.userPhone = this.$store.getters.userPhone
      if (this.userPhone) {
        this.loadUserLists(this.userPhone)
      } else {
        this.$router.push('/TelCheck')
      }
    },
    loadUserLists: function () {
      getUserLists(this.userPhone).then((res) => {
        let lists = res.data.lists
        this.lists = lists
      })
    },
    submitCheck (listid) {
      postListId(listid).then((res) => {
        this.$store.commit('storeFailureReportingId', listid)
        if (res.data.listid) {
          this.$router.push('/ListDetails')
        }
      })
    }
  },
  mounted () {
    this.loadCurrentUserPhone()
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
.title_header {
  text-align: center;
}
.title {
  margin-top: -3px;
}
.el-main {
  height: 500px;
}
.grid-content {
  margin-top: 15px;
}
.text {
  font-size: 12px;
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
.third {
  margin-top: 8px;
}
.el-icon-success {
  margin-top: 2px;
  font-size: 50px;
  color: #67C23A;
}
.time {
  margin-top: 18px;
}
.description {
  margin-top: 15px
}
.details {
  margin-top: -15px;
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
.el-tabs__item {
  width: 80px;
  margin-left: -8px;
}
.el-row{
  text-align: left
}
</style>
