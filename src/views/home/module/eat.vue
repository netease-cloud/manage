<template>
  <div class="eat-bg">
    <div class="shop-title">一层</div>
    <div class="item-order">
      <div class="col-item epast-border" v-for="num in 40" :key="num">
        <div class="state epast">就餐中</div>
        <div class="price epast">￥120</div>
        <div class="num">01号桌</div>
      </div>
    </div>
    <div class="shop-title">二层</div>
    <div class="item-order">
      <div class="col-item" v-for="num in 37" :key="num">
        <div class="state">空桌</div>
        <!-- <div class="price">￥120</div> -->
        <div class="num">01号桌</div>
      </div>
    </div>
    <div class="shop-title">三层</div>
    <div class="item-order">
      <div class="col-item epast-border" v-for="num in 39" :key="num">
        <div class="state epast">就餐中</div>
        <div class="price epast">￥120</div>
        <div class="num">01号桌</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .eat-bg {
    height: 100%;
  }
  .shop-title {
    height: 54px;
    line-height: 54px;
    text-align: center;
    font-size: 18px;
    color: #000;
    font-weight: bold;
  }
  .item-order {
    box-sizing: border-box;
    padding: 0 40px;
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
<script>
  export default {
    
  }
</script>