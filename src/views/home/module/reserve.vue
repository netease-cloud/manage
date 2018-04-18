<template>
  <div class="container">
    <div class="content_top">
      <span class="seleTime">选择时间：</span>
      <DatePicker type="date" placeholder="请选择时间" style="width: 200px"></DatePicker>
    </div>
    <div class="item-order">
      <div class="col-item" v-for="num in 37" :key="num">
        <div class="state">空桌</div>
        <!-- <div class="price">￥120</div> -->
        <div class="num">01号桌</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style scoped>
  .container {
    box-sizing: border-box;
    padding: 30px 40px;
  }
  .seleTime {
    display: inline-block;
    vertical-align: middle;    
    font-size: 14px;
    font-weight: bold;
  }

  .item-order {
    margin-top: 30px;
    box-sizing: border-box;
    overflow: hidden;
  }
  .col-item {
    width: 12%;
    height: 140px;
    background: #fff;
    border: 3px solid #6f85bf;
    text-align: center;
    border-radius: 10px;
    float: left;
    margin-right: 0.57%;
    margin-bottom: 20px;
  }
  .col-item:nth-child(8n){
    margin-right: 0;
  }
  .state {
    font-size: 24px;
    margin-top: 20px;
  }
  .price {
    font-size: 19px;
  }
  .num {
    margin-top: 15px;
    font-size: 15px;
    color: #b5bfc8;
  }
  .epast {
    color: #29baad;
  }
  .epast-border {
    border: 3px solid #29baad;
    background: #eefafa;
  }
</style>
