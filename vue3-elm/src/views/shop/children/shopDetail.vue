<template>
  <div class="rating_page">
    <header-top :name="'商家详情'" go-back="true"></header-top>
    <section class="activities_container">
      <header>活动与属性</header>
      <ul class="actibites_ul">
        <li>
          <span>保</span>
          <span>已加入“外卖保”计划，食品安全有保障(APP专享)</span>
        </li>
        <li>
          <span>准</span>
          <span>准时必达，超时秒赔(APP专享)</span>
        </li>
      </ul>
      <ul class="actibites_ul">
        <li>
          <span>票</span>
          <span>该商家支持开发票，请在下单时填写好发票抬头(APP专享)</span>
        </li>
      </ul>
    </section>
    <section class="shop_status_container">
      <router-link class="shop_status_header" to="/">
        <span class="shop_detail_title">食品监督安全公示</span>
        <div>
          <span class="identification_detail">企业认证详情</span>
          <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" version="1.1" class="description_arrow">
            <path d="M0 0 L8 7 L0 14" stroke="#bbb" stroke-width="1.5" fill="none"></path>
          </svg>
        </div>
      </router-link>
      <section class="shop_status_detail">
        <div>
          <svg class="shop_status">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#res-well"></use>
          </svg>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import headerTop from '../../../components/header/header'
export default {
  data () {
    return {
    }
  },
  components: {
    headerTop
  },
  methods: {
  },
  created () {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'src/style/mixin';
  .rating_page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 12;
    p, span {
      font-family: Helvetica Neue,Tahoma,Arial;
    }
    .activities_container {
      margin-top: 1.95em;
      padding-left: .6em;
      header {
        @include sc(.75em, #333);
        line-height: 1.8em;
        border-bottom: 1px solid #f1f1f1;
        margin-bottom: .3em;
      }
      .actibites_ul {
        padding: 0 .6em;
        li {
          margin-bottom: .2em;
          span:nth-of-type(1) {
            @include sc(.45em, #fff);
            padding: .1em;
            border: 1px;
            border-radius: 0.1em;
            margin-right: .2em
          }
          span:nth-of-type(2) {
            @include sc(.55em, #666)
          }
        }
      }
    }
    .shop_status_container {
        background-color: #fff;
        margin-bottom: .4em;
        .shop_status_header {
          display: flex;
          justifiy-content: space-between;
          align-item: center;
          line-height: 1.8em;
          padding: 0 .6em;
          border-bottom: 0.025em soild #f1f1f1;
          .shop_detail_title {
            @include sc(.75em, #333);
          }
          .identification_detail {
            @include sc(.7em, #bbb);
            vertical-align: middle;
          }
          svg {
            @include wh(.6em, 6em);
            vertical-align: middle;
          }
        }
      }
  }
</style>
