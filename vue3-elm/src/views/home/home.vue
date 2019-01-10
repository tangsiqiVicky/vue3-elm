<template>
  <div>
  <header-top>
    <span slot="logo" class="head_logo">ele.me</span>
  </header-top>
  <nav class="city_nav">
    <div class="city_tip">
      <span>当前定位城市:</span>
      <span>定位不准时，请在城市列表中选择</span>
    </div>
  </nav>
  </div>
</template>

<script>
import headerTop from '../../components/header/header.vue'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  components: {
    headerTop
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import 'src/style/mixin';
  .head_logo {
    left: 0.4em;
    font-weight:400;
    @include sc(0.7em, #fff);
    @include ct;
  }
  .city_nav {
    padding-top: 2.35em;
    border-top: 1px solild $bc;
    background-color: #fff;
    margin-bottom: 0.4em;
    .city_tip {
      @include fj;
      line-height: 1.45em;
      padding: 0 0.45em;
      

    }
  }
</style>
