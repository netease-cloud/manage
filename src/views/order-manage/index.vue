<template>
  <div class="containers">
    <div class="top_title">订单管理</div>
    <div class="search">
      订单号：
      <Input v-model="value" placeholder="请输入订单号" style="width: 300px"></Input>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;起止时间：
      <DatePicker type="datetimerange" placeholder="起止时间" style="width: 300px"></DatePicker>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button type="primary" size="large" @click="exportData(1)">搜索</Button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button size="large" @click="exportData(2)">导出</Button>
    </div>
    <div class="table_list">
      <Table height="750" :columns="columns1" :data="data2" @on-row-click="showModale"></Table>
    </div>
    <div class="total">合计：3682.00元</div>
    <Modal
        title="订单详情"
        v-model="modals"
        class-name="vertical-center-modal"
        width="900">
        <div class="modal_title">11号桌</div>
        <div class="order_info">
          <Row>
            <Col :span="10">
              <div>订单编号：HC1001RQ20170822DH00025</div>
            </Col>
            <Col :span="8">
              <div>开单时间：2018-03-20 10:50:28</div>
            </Col>
            <Col :span="6">
              <div>用餐人数：2人</div>
            </Col>
          </Row>
        </div>
        <div>
          <Table :stripe="true" :columns="columnsModal" :data="modalData"></Table>          
        </div>
        <Row style="border-bottom: 1px solid #e9eaec;padding: 10px;">
          <Col :span="12">合计：</Col>
          <Col :span="12" class="item_rgt">172.0</Col>
          <Col :span="12">退菜：</Col>
          <Col :span="12" class="item_rgt">50.0</Col>
          <Col :span="12">优免：</Col>
          <Col :span="12" class="item_rgt">5.0</Col>
        </Row>
        <Row style="padding: 10px;">
          <Col>
            <Row style="background: #f8f8f9;">
              <Col :span="12">实付：</Col>
              <Col :span="12" class="item_rgt">117</Col>
            </Row>
          </Col>
          <Col :span="24" class="item_rgt">系统支付：117</Col>
          <Col :span="24" class="item_rgt">现金支付：0</Col>
        </Row>
        <div slot="footer" style="text-align: left;">备注：不要辣，不要香菜</div>
    </Modal>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value: '',
        modals: true,
        columns1: [
          {
            align: 'center',
            title: '桌号',
            key: 'desk'
          },
          {
            align: 'center',
            title: '订单号',
            key: 'order'
          },
          {
            align: 'center',
            title: '实付',
            key: 'price'
          },
          {
            align: 'center',
            title: '订单时间',
            key: 'time'
          },
          {
            align: 'center',
            title: '操作',
            key: 'operation',
            render: (h, params) => {
              return h('div', [
                h('Icon', {
                  props: {
                    type: 'android-print',
                    size: '15'
                  },
                  style: {
                    marginRight: '5px'
                  },
                }),
                h('strong', params.row.operation)
              ]);
            }
          }
        ],
        data2: [
          {
            id: '1',
            desk: '2号桌',
            order: 'Hc1001RQ20170822DH00025',
            price: '263.00',
            time: '2018-03-20 11:35:20',
            operation: '补充打印'
          },
          {
            desk: '2号桌',
            order: 'Hc1001RQ20170822DH00025',
            price: '263.00',
            time: '2018-03-20 11:35:20',
            operation: '补充打印'
          },
          {
            desk: '2号桌',
            order: 'Hc1001RQ20170822DH00025',
            price: '263.00',
            time: '2018-03-20 11:35:20',
            operation: '补充打印'
          },
          {
            desk: '2号桌',
            order: 'Hc1001RQ20170822DH00025',
            price: '263.00',
            time: '2018-03-20 11:35:20',
            operation: '补充打印'
          },
          {
            desk: '2号桌',
            order: 'Hc1001RQ20170822DH00025',
            price: '263.00',
            time: '2018-03-20 11:35:20',
            operation: '补充打印'
          },
          {
            desk: '2号桌',
            order: 'Hc1001RQ20170822DH00025',
            price: '263.00',
            time: '2018-03-20 11:35:20',
            operation: '补充打印'
          },
          {
            desk: '2号桌',
            order: 'Hc1001RQ20170822DH00025',
            price: '263.00',
            time: '2018-03-20 11:35:20',
            operation: '补充打印'
          },
          {
            desk: '2号桌',
            order: 'Hc1001RQ20170822DH00025',
            price: '263.00',
            time: '2018-03-20 11:35:20',
            operation: '补充打印'
          },
          {
            desk: '2号桌',
            order: 'Hc1001RQ20170822DH00025',
            price: '263.00',
            time: '2018-03-20 11:35:20',
            operation: '补充打印'
          },
          {
            desk: '2号桌',
            order: 'Hc1001RQ20170822DH00025',
            price: '263.00',
            time: '2018-03-20 11:35:20',
            operation: '补充打印'
          },
          {
            desk: '2号桌',
            order: 'Hc1001RQ20170822DH00025',
            price: '263.00',
            time: '2018-03-20 11:35:20',
            operation: '补充打印'
          },
          {
            desk: '2号桌',
            order: 'Hc1001RQ20170822DH00025',
            price: '263.00',
            time: '2018-03-20 11:35:20',
            operation: '补充打印'
          },
          {
            desk: '2号桌',
            order: 'Hc1001RQ20170822DH00025',
            price: '263.00',
            time: '2018-03-20 11:35:20',
            operation: '补充打印'
          },
          {
            desk: '2号桌',
            order: 'Hc1001RQ20170822DH00025',
            price: '263.00',
            time: '2018-03-20 11:35:20',
            operation: '补充打印'
          },
          {
            desk: '2号桌',
            order: 'Hc1001RQ20170822DH00025',
            price: '263.00',
            time: '2018-03-20 11:35:20',
            operation: '补充打印'
          },
          {
            desk: '2号桌',
            order: 'Hc1001RQ20170822DH00025',
            price: '263.00',
            time: '2018-03-20 11:35:20',
            operation: '补充打印'
          },
          {
            desk: '2号桌',
            order: 'Hc1001RQ20170822DH00025',
            price: '263.00',
            time: '2018-03-20 11:35:20',
            operation: '补充打印'
          },
          {
            desk: '2号桌',
            order: 'Hc1001RQ20170822DH00025',
            price: '263.00',
            time: '2018-03-20 11:35:20',
            operation: '补充打印'
          },
        ],
        columnsModal: [
          {
            title: '商品',
            key: 'goods'
          },
          {
            align: 'center',
            title: '单价',
            key: 'price'
          },
          {
            align: 'center',
            title: '数量',
            key: 'num'
          },
          {
            align: 'center',
            title: '总价',
            key: 'allPrice'
          },
          {
            align: 'center',
            title: '加菜',
            key: 'addOrder',
          },
          {
            align: 'center',
            title: '退菜数量',
            key: 'removeNum',
          }
        ],
        modalData: [
          {
            goods: '宫保鸡丁',
            price: '20.0',
            num: '1',
            allPrice: '20',
            addOrder: '1',
            removeNum: '1'
          },
          {
            goods: '宫保鸡丁',
            price: '20.0',
            num: '1',
            allPrice: '20',
            addOrder: '1',
            removeNum: '1'
          },
          {
            goods: '宫保鸡丁',
            price: '20.0',
            num: '1',
            allPrice: '20',
            addOrder: '1',
            removeNum: '1'
          },
          {
            goods: '宫保鸡丁',
            price: '20.0',
            num: '1',
            allPrice: '20',
            addOrder: '1',
            removeNum: '1'
          },
          {
            goods: '宫保鸡丁',
            price: '20.0',
            num: '1',
            allPrice: '20',
            addOrder: '1',
            removeNum: '1'
          },
          {
            goods: '宫保鸡丁',
            price: '20.0',
            num: '1',
            allPrice: '20',
            addOrder: '1',
            removeNum: '1'
          },
        ],
      }
    },
    methods: {
      showModale (e) {
        console.log(e)
      }
    }
  }
</script>
<style>
  .containers {
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    background: #fff;
    margin: 20px;
    border-radius: 10px;
    padding: 30px;
    box-sizing: border-box;
  }
  .top_title {
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
    margin-bottom: 20px;
  }
  .table_list {
    margin-top: 20px;
  }
  .ivu-table-wrapper {
    border-bottom: 1px solid #dddee1;
  }
  .total {
    text-align: center;
    padding-top: 40px;
    font-size: 16px;
  }
  /* 模态框 */
  .vertical-center-modal {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .vertical-center-modal .ivu-modal{
      top: 0;
  }
  .ivu-modal-header {
    background: #1e2538;
  }
  .ivu-modal-header-inner {
    color: #fff;
  }
  .ivu-modal-close .ivu-icon-ios-close-empty {
    color: #fff;
  }
  .modal_title {
    text-align: center;
    font-size: 20px;
    color: #000;
  }
  .order_info {
    font-size: 15px;
    margin: 10px 0;
  }
  .ivu-modal-close .ivu-icon-ios-close-empty:hover {
    color: #fff;
  }
  .item_rgt {
    text-align: right;
  }
</style>