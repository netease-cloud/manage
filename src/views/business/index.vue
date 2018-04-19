<template>
  <div class="container">
    <Row class="top">
      <Col span="4">
        <div class="title">营业概要</div>
      </Col>
      <Col span="20">
        <DatePicker type="datetimerange" placeholder="选择起止时间" style="width: 300px"></DatePicker>
      </Col>
    </Row>
    <Row>
      <Col span="11">
        <div class="car-title">订单</div>
        <Card dis-hover class="card" :padding="0" >
          <Row>
            <Col span="12">
              <div class="card_item card_left">
                <div class="eat eat_in">堂食</div>
                <div class="eat-conet">223<span class="unit">单</span></div>
              </div>
            </Col>
            <Col span="12">
              <div class="card_item">
                <div class="eat eat_out">外卖</div>
                <div class="eat-conet">36<span class="unit">单</span></div>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span="11" offset="2">
        <div class="car-title">订单金额</div>
        <Card dis-hover class="card" :padding="0" >
          <Row>
            <Col span="12">
              <div class="card_item card_left">
                <div class="eat eat_in">堂食</div>
                <div class="eat-conet">22312341<span class="unit">元</span></div>
              </div>
            </Col>
            <Col span="12">
              <div class="card_item">
                <div class="eat eat_out">外卖</div>
                <div class="eat-conet">361234<span class="unit">元</span></div>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  </div>
</template>
<script>
  export default {
    
  }
</script>
<style scoped>
  .container {
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    background: #fff;
    margin: 20px;
    border-radius: 10px;
    padding: 30px;
    box-sizing: border-box;
  }
  .title {
    font-size: 20px;
    font-weight: bold;
  }
  .top {
    padding: 10px;
    margin-bottom: 20px;
  }
  .car-title {
    padding: 14px 16px;
    line-height: 1;
    background-color: #f0f1f5;
    color: #1c2438;
    font-weight: bold;
    font-size: 16px;
  }
  .card {
    border-radius: 0%;
  }
  .card_left {
    border-right: 1px solid #f0f1f5;    
  }
  .card_item {
    padding: 20px;
  }
  .eat {
    font-size: 20px;
  }
  .eat_in {
    color: #4abcc7;
  }
  .eat_out {
    color: #eb8384;
  }
  .eat-conet {
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    padding: 30px 0;
  }
  .unit {
    font-size: 20px;
    margin-left: 10px;
  }
</style>
