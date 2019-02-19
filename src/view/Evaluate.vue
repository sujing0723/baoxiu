<template>
  <div>
    <el-header class="header">
      <el-menu class="el-menu-demo" mode="horizontal">
        <el-row>
          <el-col :span="2">
            <router-link to="/BxList" tag="li">
              <div class="grid-content">
                <i class="el-icon-arrow-left"></i>
              </div>
            </router-link>
          </el-col>
          <el-col :span="20" class="title_header">
            <div class="grid-content">
              <p class="title">维修结果评价</p>
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
      <el-card class="box-card" :model="list">
        <el-row>
          <h4>区域:<span class="details">{{list.campus}}</span></h4>
          <h4>地点:<span class="details">{{list.place}}</span></h4>
          <h4>位置:<span class="details">{{list.position}}</span></h4>
          <h4>设备:<span class="details">{{list.equipment}}</span></h4>
          <h4>描述:<span class="details">{{list.description}}</span></h4>
        </el-row>
      </el-card>
      <el-card class="box-card" :v-model="value">
        <div slot="header" class="clearfix">
          <span>满意程度:</span>
        </div>
        <div class="text item">
          <el-rate v-model="value" :colors="['#99A9BF', '#F7BA2A', '#FF9900']"></el-rate>
        </div>
      </el-card>
      <el-card class="box-card" :v-model="evaluation">
        <div slot="header" class="clearfix">
          <span>评价:</span>
        </div>
        <el-input type="textarea" :rows="2" placeholder="请填写简短评语" v-model="evaluation.textarea">
        </el-input>
      </el-card>
      <el-row>
        <el-button type="warning" class="el-button el-button--warning tijiao" @click="submitCheck('evaluation')">提交</el-button>
      </el-row>
    </el-main>
    <el-footer class="footer"><p class="footerTitle">程序设计：大连交通大学56工作室</p></el-footer>
  </div>
</template>

<script>
import { getSuccessList, postListEvaluation } from '../api/baoxiu'
export default {
  data () {
    return {
      list: '',
      textarea: '',
      value: null,
      evaluation: {
        textarea: ''
      }
    }
  },
  methods: {
    loadUserLists: function () {
      getSuccessList(this.failureReportingId).then((res) => {
        let list = res.data.list
        this.list = list
      })
    },
    submitCheck (evaluation) {
      postListEvaluation(evaluation).then((res) => {
        console.log(res)
        console.log(this.evaluation)
        if (res.data.evaluation) {
          this.$router.push('/BxList')
        }
      })
    }
  },
  mounted () {
    this.loadUserLists()
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
.tijiao {
  width: 99.9%;
  text-align: center;
  margin: auto;
  margin-top: 20px;
}
.details {
  float: right
}
</style>
