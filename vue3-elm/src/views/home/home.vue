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
    <router-link to="/" class="guess_city" tag="div">
      <span>上海</span>
      <svg class="arrow_right">
        <use xmlns:xlink="http://www.w3.org/1999/xlink"
        xlink:href="#arrow-right"></use>
      </svg>
    </router-link>
  </nav>
  <section id="hot_city_container">
    <h4 class="city_title">热门城市</h4>
    <ul class="citylistul clean">
      <li>上海</li>
    </ul>
  </section>
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
    border-top: 1px solid $bc;
    background-color: #fff;
    margin-bottom: 0.4rem;
    .city_tip {
      @include fj;
      line-height: 1.45rem;
      padding: 0 0.45rem;
      span:nth-of-type(1) {
        @include sc(0.55rem, #666);
      }
      span:nth-of-type(2) {
        font-weight: 900;
        @include sc(0.475rem, #9f9f9f);
      }
    }
    .guess_city {
      @include fj;
      align-items: center;
      height: 2em;
      padding: 0 0.45em;
      border-top: 1px solid $bc;
      border-bottom: 2px solid $bc;
      @include font(0.75em, 1.8em);
      span:nth-of-type(1) {
        color: $blue
      }
      .arrow_right {
        @include wh(.6em, .6em);
        fill: #999;
      }
    }
  }
  #hot_city_container {
    background-color: #fff;
    margin-bottom: 0.4em;
  }
  .citylistul {
    li{
      float: left;
      text-align: center;
      color: $blue;
      border-bottom: 0.025em solid $bc;
      border-rigjt: 0.025em solid $bc;
      @include wh(25%, 1.75em);
      @include font(0.6em, 1.75em)
    }
    li:nth-of-type(4) {
      border-right: none;
    }
  }
  .city_title {
    color: #666;
    font-weight: 400;
    text-indent: 0.45em;
    border-top: 2px solid $bc;
    border-bottom: 1px solid $bc;
    @include font(0.65em, 2.5em, "Helvetica Neue");
    span{      @include sc(0.575em, #999)
    }
  }
</style>
