<template>
  <div class="Main">
    <Layout :style="{minHeight: '100vh'}">
      <Sider hide-trigger style="min-width:250px;max-width: 250px;width: 250px" class="laout-left">
        <userInfo></userInfo>
        <menuLeft :menuList="menuList"></menuLeft>
      </Sider>
      <Layout class="layout-rgt">
        <router-view>
          <keep-alive></keep-alive>
        </router-view>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  import menuLeft from '../components/menu/menuLeft.vue'
  import userInfo from '../components/user-info/userInfo.vue'
  export default {
    name: 'Main',
    computed: {
      menuList() {
        return this.$store.state.app.menuList
      }
    },
    components: {
      menuLeft,
      userInfo
    }
  }
</script>
<style>
  .Main {
    height: 100%;
  }
  .laout-left {
    background: #1e2538;
  }
  .layout-rgt {
    background: linear-gradient(to bottom,  #94a0ba, #eccfa5);
  }
</style>
