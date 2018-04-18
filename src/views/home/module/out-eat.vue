<template>
  <div class="container">
    <div class="out-eat-top">
      <span class="order-title">订单统计</span>
      <Button class="top-btn" :class="{ivu_btn_primary:selectIdx == '1'}" @click="pushName('1')">系统外卖</Button>
      <Button class="top-btn" :class="{ivu_btn_primary:selectIdx == '2'}" @click="pushName('2')">美团</Button>
      <Button class="top-btn" :class="{ivu_btn_primary:selectIdx == '3'}" @click="pushName('3')">百度</Button>
      <Button class="top-btn" :class="{ivu_btn_primary:selectIdx == '4'}" @click="pushName('4')">饿了么</Button>
    </div>
    <div>
      <div v-show="selectIdx == '1'">
        <Table stripe :columns="columns1" :data="systemData"></Table>
      </div>
      <div v-show="selectIdx == '2'">
        <Table stripe :columns="columns2" :data="systemData"></Table>        
      </div>
      <div v-show="selectIdx == '3'">百度</div>
      <div v-show="selectIdx == '4'">饿了么</div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        selectIdx: '1',
        columns1: [
          {
            align: 'center',
            title: '订单号',
            key: 'order'
          },
          {
            align: 'center',
            title: '时间',
            key: 'time'
          },
          {
            align: 'center',
            title: '订单状态',
            key: 'state'
          },
          {
            align: 'center',
            title: '订单详情',
            key: 'details'
          }
        ],
        columns2: [
          {
            align: 'center',
            title: '订单号',
            key: 'order'
          },
          {
            align: 'center',
            title: '时间',
            key: 'time'
          },
          {
            align: 'center',
            title: '订单详情',
            key: 'details'
          }
        ],
        systemData: [
          {
            order: '订单1',
            time: '2016-10-03',
            state: '已接单',
            details: '详情',
          },
          {
            order: '订单2',
            time: '2016-10-01',
            state: '已接单',
            details: '详情',
          },
          {
            order: '订单3',
            time: '2016-10-02',
            state: '已接单',
            details: '详情',
          },
          {
            order: '订单4',
            time: '2016-10-04',
            state: '已接单',
            details: '详情',
          },
          {
            order: '订单5',
            time: '2016-10-04',
            state: '已接单',
            details: '详情',
          },
          {
            order: '订单6',
            time: '2016-10-04',
            state: '已接单',
            details: '详情',
          },
          {
            order: '订单7',
            time: '2016-10-04',
            state: '已接单',
            details: '详情',
          },
          {
            order: '订单8',
            time: '2016-10-04',
            state: '已接单',
            details: '详情',
          },
          {
            order: '订单9',
            time: '2016-10-04',
            state: '已接单',
            details: '详情',
          }
        ]
      }
    },
    methods: {
      pushName (index) {
        this.selectIdx = index
      }
    }
  }
</script>
<style scoped>
  .container {
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    margin: 20px;
    background: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 22px;
  }
  .out-eat-top {
    width: 100%;
    height: 70px;
    line-height: 70px;
    padding-left: 30px;
  }
  .order-title {
    display: inline-block;
    height: 70px;
    vertical-align: bottom;
    font-size: 24px;
    font-weight: bold;
    margin-right: 50px;
  }
  .top-btn {
    margin-right: 10px;
  }
  .ivu_btn_primary {
    color: #fff;
    background-color: #2abbae;
    border-color: #2abbae;
  }
</style>
